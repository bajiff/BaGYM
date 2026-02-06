import { useState } from 'react';
import api from '../utils/api.js';
import { useNavigate } from 'react-router-dom'; // <--- 1. Import ini

const LoginPage = () => {

    const navigate = useNavigate();
    
    // State Mode: True = Login, False = Register
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // State Form Data (Digabung agar ringkas)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone_number: '', // Opsional untuk register
    });

    // Handle Ketikan
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // LOGIKA UTAMA: Submit Form
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            if (isLoginMode) {
                // --- MODE LOGIN ---
                const response = await api.post('/auth/login', { 
                    email: formData.email, 
                    password: formData.password 
                });
                
                const { token, user } = response.data;

                // Simpan ke LocalStorage
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));

                alert(`Selamat datang kembali, ${user.name}!`);

                // VALIDASI ROLE (Redirect Intelligence)
                if (user.role === 'admin') {
                    navigate('/dashboard'); // Admin masuk dapur
                } else {
                    navigate('/'); // Member masuk ruang tamu (Home)
                }

            } else {
                // --- MODE REGISTER ---
                await api.post('/auth/register', {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    phone_number: formData.phone_number
                });

                alert("Registrasi Berhasil! Silakan Login.");
                setIsLoginMode(true); // Pindahkan ke mode login otomatis
            }

        } catch (err) {
            setError(err.response?.data?.message || "Terjadi kesalahan sistem.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#020103] px-4">
            <div className="w-full max-w-md p-8 space-y-6 bg-white/5 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-md">
                
                {/* Header Dinamis */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-[#fff7e8]">BaGYM<span className="text-green-500">.</span></h1>
                    <p className="text-gray-400 mt-2">
                        {isLoginMode ? 'Masuk ke akun Anda' : 'Bergabung menjadi Member'}
                    </p>
                </div>

                {error && (
                    <div className="p-3 text-sm text-red-200 bg-red-900/50 rounded-lg text-center border border-red-500/50">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Input Nama (Hanya muncul saat Register) */}
                    {!isLoginMode && (
                        <div>
                            <label className="text-sm text-gray-400">Nama Lengkap</label>
                            <input 
                                type="text" name="name"
                                className="w-full px-4 py-3 mt-1 text-white bg-black/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                                placeholder="Nama Anda"
                                value={formData.name} onChange={handleChange}
                                required={!isLoginMode}
                            />
                        </div>
                    )}

                    {/* Input Email (Muncul di keduanya) */}
                    <div>
                        <label className="text-sm text-gray-400">Email Address</label>
                        <input 
                            type="email" name="email"
                            className="w-full px-4 py-3 mt-1 text-white bg-black/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                            placeholder="user@example.com"
                            value={formData.email} onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Input Password (Muncul di keduanya) */}
                    <div>
                        <label className="text-sm text-gray-400">Password</label>
                        <input 
                            type="password" name="password"
                            className="w-full px-4 py-3 mt-1 text-white bg-black/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                            placeholder="••••••••"
                            value={formData.password} onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Tombol Submit Dinamis */}
                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full py-3 font-bold text-[#020103] bg-green-500 rounded-lg hover:bg-green-400 transition transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Memproses...' : (isLoginMode ? 'MASUK SEKARANG' : 'DAFTAR SEKARANG')}
                    </button>
                </form>

                {/* Footer Switcher (Ganti Mode) */}
                <div className="text-center pt-4 border-t border-white/10">
                    <p className="text-gray-400 text-sm">
                        {isLoginMode ? "Belum punya akun?" : "Sudah punya akun?"}
                        <button 
                            onClick={() => {
                                setIsLoginMode(!isLoginMode);
                                setError(''); // Hapus pesan error saat ganti mode
                            }}
                            className="ml-2 text-green-400 hover:text-green-300 font-bold hover:underline transition"
                        >
                            {isLoginMode ? "Daftar di sini" : "Login di sini"}
                        </button>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default LoginPage;