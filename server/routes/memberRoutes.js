// ? server/routes/memberRoutes.js
import express from 'express';
// Import controller yang sudah dibuat (Pastikan nama filenya sesuai)
import { 
    getAllMembers, 
    checkInMember, 
    renewMember 
} from  "../controllers/memberControllers.js"

const memberRouters = express.Router();

// --- DEFINISI RUTE ---

// GET /api/members -> Ambil semua data member
memberRouters.get('/members', getAllMembers);

// POST /api/checkin -> Scan Barcode / Check-in
memberRouters.post('/checkin', checkInMember);

// POST /api/renew -> Perpanjang Membership
memberRouters.post('/renew', renewMember);

// Kita export memberRouters ini sebagai default dan bisa di import dengan nama yang beda
export default memberRouters;