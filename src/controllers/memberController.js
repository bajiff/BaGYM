// ? controllers/memberController.js
const db = equire('../config/database'); // Koneksi DB Anda

// 1. GET ALL MEMBERS (Data untuk Halaman Data Member)
export const getAllMembers = async (req, res) => {
  try {
    const sql = `
      SELECT 
        id, member_code, full_name, phone_number, status,
        DATE_FORMAT(join_date, '%d-%m-%Y') as join_indo,
        DATE_FORMAT(expired_date, '%d-%m-%Y') as expired_indo,
        DATEDIFF(expired_date, CURDATE()) as sisa_hari,
        CASE 
            WHEN status = 'Frozen' THEN 'Frozen'
            WHEN expired_date < CURDATE() THEN 'Expired'
            ELSE 'Active'
        END as status_aktual
      FROM members
      WHERE is_deleted = 0
      ORDER BY expired_date ASC
    `;
    const [rows] = await db.query(sql);
    res.json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 2. CHECK-IN LOGIC (Data untuk Kiosk)
exports.checkInMember = async (req, res) => {
  const { code } = req.body; // Input dari Barcode Scanner / Ketik Manual
  
  try {
    // A. Cek Status Member
    const checkSql = `
      SELECT id, full_name, status, expired_date,
      CASE 
          WHEN status = 'Active' AND expired_date >= CURDATE() THEN 'BOLEH_MASUK'
          WHEN status = 'Frozen' THEN 'DITOLAK_CUTI'
          ELSE 'DITOLAK_EXPIRED'
      END as keputusan_sistem
      FROM members WHERE member_code = ?
    `;
    const [members] = await db.query(checkSql, [code]);

    if (members.length === 0) {
      return res.status(404).json({ success: false, message: "Member tidak ditemukan!" });
    }

    const member = members[0];
    const accessStatus = member.keputusan_sistem === 'BOLEH_MASUK' ? 'Granted' : 'Denied';
    
    // B. Catat ke Tabel Attendance
    await db.query(
      `INSERT INTO attendance (member_id, access_status, notes) VALUES (?, ?, ?)`,
      [member.id, accessStatus, member.keputusan_sistem]
    );

    res.json({ 
      success: true, 
      access: accessStatus, 
      data: member 
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 3. RENEW MEMBERSHIP (Logika Perpanjang)
exports.renewMember = async (req, res) => {
  const { id, package_id, amount, duration_days } = req.body;

  try {
    // A. Update Member (Pakai Logic GREATEST Anda)
    const updateSql = `
      UPDATE members
      SET 
        expired_date = DATE_ADD(GREATEST(expired_date, CURDATE()), INTERVAL ? DAY),
        status = 'Active',
        updated_at = NOW()
      WHERE id = ?
    `;
    await db.query(updateSql, [duration_days, id]);

    // B. Catat Transaksi
    const trxSql = `
      INSERT INTO transactions (invoice_number, member_id, package_id, amount, type, transaction_date)
      VALUES (?, ?, ?, ?, 'Renew', NOW())
    `;
    // Tips: Gunakan library 'uuid' atau timestamp untuk invoice unik
    const invoice = `INV-${Date.now()}`; 
    await db.query(trxSql, [invoice, id, package_id, amount]);

    res.json({ success: true, message: "Perpanjangan Berhasil!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};