const express = require('express');
const cors = require('cors');
const db = require('./config/database'); // Import koneksi DB yang tadi dibuat

// Inisialisasi App
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());             // Izinkan akses dari Frontend
app.use(express.json());     // Supaya bisa baca data JSON dari request body

// Test Route (Cek apakah server jalan)
app.get('/', async (req, res) => {
    try {
        // Test query simpel ke PostgreSQL
        const result = await db.query('SELECT NOW()'); 
        res.send(`Server BaGYM Jalan! Waktu DB: ${result.rows[0].now}`);
    } catch (err) {
        res.status(500).send('Error koneksi database!');
    }
});

// Jalankan Server
app.listen(PORT, () => {
    console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});