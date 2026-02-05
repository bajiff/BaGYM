import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Untuk pindah halaman
import { MemberList } from "../components/Index.jsx"

const DashboardPage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Cek apakah ada user di local storage
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      navigate('/login'); // Tendang ke login jika belum masuk
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  if (!user) return null; // Jangan tampilkan apa-apa saat redirect

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar Khusus Admin */}
      <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-gray-800">BaGYM Dashboard</h1>
        <div className="flex items-center gap-4">
           <span className="text-sm text-gray-600">Halo, <b>{user.name}</b></span>
           <button 
             onClick={handleLogout} 
             className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition"
           >
             Logout
           </button>
        </div>
      </nav>

      {/* Konten Utama */}
      <div className="container mx-auto px-4">
        <MemberList />
      </div>
    </div>
  );
};

export default DashboardPage;