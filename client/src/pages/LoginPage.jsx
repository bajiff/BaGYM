import { useState } from 'react';
import api from '../utils/api.js';

const LoginPage = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            // Tembak API Login
            const response = await api.post('/auth/login', { email, password });
            
            // Ambil data dari respon server
            const { token, user } = response.data;

            // Simpan Token di LocalStorage (Penyimpanan Browser)
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            alert(`Selamat datang, ${user.name}!`);
            
            // Panggil fungsi parent untuk pindah halaman
            if (onLoginSuccess) onLoginSuccess(user);
            
            // Reload halaman agar state ter-update (cara cepat)
            window.location.reload();

        } catch (err) {
            setError(err.response?.data?.message || "Login Gagal");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#020103]">
            <div className="w-full max-w-md p-8 space-y-6 bg-white/5 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-md">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-[#fff7e8]">BaGYM<span className="text-green-500">.</span></h1>
                    <p className="text-gray-400 mt-2">Masuk untuk mengelola member</p>
                </div>

                {error && <div className="p-3 text-sm text-red-200 bg-red-900/50 rounded-lg text-center">{error}</div>}

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="text-sm text-gray-400">Email Address</label>
                        <input 
                            type="email" 
                            className="w-full px-4 py-3 mt-1 text-white bg-black/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                            placeholder="admin@bagym.com"
                            value={email} onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="text-sm text-gray-400">Password</label>
                        <input 
                            type="password" 
                            className="w-full px-4 py-3 mt-1 text-white bg-black/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                            placeholder="••••••••"
                            value={password} onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="w-full py-3 font-bold text-[#020103] bg-green-500 rounded-lg hover:bg-green-400 transition transform hover:scale-105">
                        MASUK SEKARANG
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;