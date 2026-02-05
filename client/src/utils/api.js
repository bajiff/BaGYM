// ? client/src/utils/api.js
import axios from 'axios';

// ? Ambil URL dari .env
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// ? Buat "Instance" Axios (Settingan Pusat)
const api = axios.create({
    baseURL: `${BASE_URL}/api`,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;