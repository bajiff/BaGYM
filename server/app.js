// ? app.js
import express from 'express';
import cors from 'cors';
import db from './config/database.js';
import memberRoutes from './routes/memberRoutes.js';
import authRoutes from './routes/authRoutes.js'; // <--- Import ini
// ! WAJIB pakai .js di belakang untuk file lokal

// ? Inisialisasi App
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('api/auth', authRoutes)
app.use('/api', memberRoutes)

// Test Route (Versi MySQL)
app.get('/', async (req, res) => {
    try {
        // Syntax MySQL: pakai [rows] bukan result.rows
        const [rows] = await db.query('SELECT NOW() as waktu_server');
        res.send(`Server BaGYM Jalan! Waktu MySQL: ${rows[0].waktu_server}`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error koneksi database!');
    }
});

// Jalankan Server
app.listen(PORT, () => {
    console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});