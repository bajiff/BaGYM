use  db_bagym;

-- 1. Insert Data Member (Perhatikan titik koma di akhir)
INSERT INTO members (member_code, full_name, phone_number, gender, join_date, expired_date, status)
VALUES ('GYM-001', 'Budi Santoso', '08123456789', 'Laki-laki', CURDATE(), DATE_ADD(CURDATE(), INTERVAL 30 DAY), 'Active');

-- 2. Insert Riwayat Transaksi
INSERT INTO transactions (invoice_number, member_id, package_id, amount, type) VALUES ('INV-001', LAST_INSERT_ID(), 2, 150000, 'New');




SELECT 
    id,
    member_code,
    full_name,
    phone_number,
    -- Format tanggal biar enak dibaca Indonesia (DD-MM-YYYY)
    DATE_FORMAT(join_date, '%d-%m-%Y') as join_indo,
    DATE_FORMAT(expired_date, '%d-%m-%Y') as expired_indo,
    
    -- Logika Cerdas: Hitung sisa hari
    DATEDIFF(expired_date, CURDATE()) as sisa_hari,
    
    -- Logika Cerdas: Tentukan status Real-time
    CASE 
        WHEN expired_date < CURDATE() THEN 'Expired'
        ELSE 'Active'
    END as status_aktual

FROM members
WHERE is_deleted = 0 -- Hanya tampilkan yang tidak dihapus (Soft Delete)
ORDER BY expired_date ASC; -- Yang mau expired muncul paling atas (supaya Admin notice)


-- UPDATE LOGIC: Perpanjang Membership
UPDATE members
SET 
    -- LOGIKA SAKTI: Ambil tanggal paling akhir antara 'Expired Date' atau 'Hari Ini'
    expired_date = DATE_ADD(
        GREATEST(expired_date, CURDATE()), 
        INTERVAL 30 DAY
    ),
    
    -- Pastikan status kembali 'Active' (jika sebelumnya Expired)
    status = 'Active',
    
    -- Update timestamp
    updated_at = NOW()

WHERE id = 1; -- Ganti dengan ID Member yang sedang diproses




-- INSERT LOGIC: Catat Uang Masuk
INSERT INTO transactions (
    invoice_number, 
    member_id, 
    package_id, 
    amount, 
    type, 
    transaction_date
) VALUES (
    'INV-RENEW-001', -- Generate nomor invoice baru (backend logic)
    1,               -- ID Member
    2,               -- ID Paket (Misal: 2 = Bulanan)
    150000,          -- Harga Paket
    'Renew',         -- Tipe Transaksi: PERPANJANGAN
    NOW()
);




-- Ubah kolom ENUM untuk menambah status 'Frozen'
ALTER TABLE members 
MODIFY COLUMN status ENUM('Active', 'Expired', 'Inactive', 'Frozen') DEFAULT 'Inactive';




CREATE TABLE member_freezes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    member_id INT NOT NULL,
    start_date DATE NOT NULL,      -- Mulai cuti kapan
    end_date DATE NOT NULL,        -- Selesai cuti kapan
    duration_days INT NOT NULL,    -- Berapa lama (misal 30 hari)
    reason TEXT,                   -- Alasan (Sakit/Dinas/Mudik)
    admin_fee DECIMAL(10, 2) DEFAULT 0, -- Biaya administrasi cuti (opsional)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (member_id) REFERENCES members(id)
);


-- Note: Pastikan ENUM type di tabel transactions ditambah 'Freeze_Fee'
INSERT INTO transactions (invoice_number, member_id, package_id, amount, type)
VALUES ('INV-FREEZE-001', 1, NULL, 50000, 'Freeze_Fee'); 




-- 1. Ubah kolom package_id agar BOLEH KOSONG (NULL)
ALTER TABLE transactions 
MODIFY COLUMN package_id INT NULL;

-- 2. Update juga kolom 'type' untuk menerima jenis transaksi baru
-- (PENTING: Kalau tidak dijalankan, nanti error lagi karena 'Freeze_Fee' tidak dikenal)
ALTER TABLE transactions 
MODIFY COLUMN type ENUM('New', 'Renew', 'Freeze_Fee', 'Other') NOT NULL;




INSERT INTO transactions (invoice_number, member_id, package_id, amount, type) 
VALUES ('INV-FREEZE-001', 1, NULL, 50000, 'Freeze_Fee');



-- Table Attendance
CREATE TABLE attendance (
    id INT AUTO_INCREMENT PRIMARY KEY,
    member_id INT NOT NULL,
    checkin_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    
    -- Status Kunjungan: Sukses masuk atau Ditolak
    access_status ENUM('Granted', 'Denied') NOT NULL,
    
    -- Catatan (Misal: "Ditolak karena Expired" atau "Sukses")
    notes VARCHAR(255),
    
    FOREIGN KEY (member_id) REFERENCES members(id)
);


SELECT 
    id, full_name, status, expired_date,
    CASE 
        -- Logika Keras: Harus Active DAN Belum Expired
        WHEN status = 'Active' AND expired_date >= CURDATE() THEN 'BOLEH_MASUK'
        WHEN status = 'Frozen' THEN 'DITOLAK_CUTI'
        ELSE 'DITOLAK_EXPIRED'
    END as keputusan_sistem
FROM members 
WHERE member_code = 'GYM-001'; -- Ganti dengan input dari scanner


INSERT INTO attendance (member_id, access_status, notes)
VALUES (1, 'Granted', 'Member Active'); -- ID 1 didapat dari query sebelumnya


INSERT INTO attendance (member_id, access_status, notes)
VALUES (1, 'Denied', 'Membership Expired pada 2023-10-30');


SELECT 
    DATE_FORMAT(a.checkin_time, '%H:%i') as jam_masuk,
    m.full_name,
    m.status,
    a.access_status
FROM attendance a
JOIN members m ON a.member_id = m.id
WHERE DATE(a.checkin_time) = CURDATE() -- Hanya tampilkan hari ini
ORDER BY a.checkin_time DESC;




