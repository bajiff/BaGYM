import db from '../config/database.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// KUNCI RAHASIA (Sebaiknya taruh di .env, tapi hardcode dulu untuk belajar)
const JWT_SECRET = process.env.JWT_SECRET || 'rahasia_negara_bagym_2026';

// 1. REGISTER (Hanya untuk bikin Admin pertama kali)
export const register = async (req, res) => {
    // Terima data tambahan: phone_number & gender
    const { name, email, password, phone_number, gender } = req.body;

    try {
        // 1. Cek email ganda
        const [existingUser] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
        if (existingUser.length > 0) return res.status(400).json({ message: "Email sudah terdaftar!" });

        // 2. Hash Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 3. Simpan ke DB Users
        // PENTING: Role kita paksa jadi 'member' untuk pendaftar umum
        const [userResult] = await db.query(
            "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)", 
            [name, email, hashedPassword, 'member']
        );

        // 4. (Opsional tapi Bagus)
        // Kalau mau langsung catat data detail ke tabel 'members' juga, bisa dilakukan di sini.
        // Tapi untuk sekarang, kita simpan akun loginnya dulu saja.
        
        res.status(201).json({ success: true, message: "Akun berhasil dibuat! Silakan login." });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 2. LOGIN
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Cari user berdasarkan email
        const [users] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
        if (users.length === 0) return res.status(404).json({ message: "User tidak ditemukan!" });

        const user = users[0];

        // Cek Password (Bandingkan password input vs password hash di DB)
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Password salah!" });

        // Buat Token (Tiket Masuk)
        const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1d' });

        res.json({
            success: true,
            message: "Login Berhasil",
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};