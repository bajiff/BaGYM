import { useState , useEffect} from "react";
import { Link, useNavigate  } from "react-router-dom";
const Navbar = () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);

  // ? Efek untuk mengubah navbar saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // Cek status login saat komponen dimuat
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate('/login');
  };

  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#020103]/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter text-[#fff7e8]">
          BaGYM<span className="text-white">.</span>
        </div>
        <ul className="hidden md:flex gap-8">
          <li><a href="#">Home</a></li>
          <li><a href="#keunggulan">Keunggulan</a></li>
          <li><a href="#fasilitas">Fasilitas</a></li>
          <li><a href="#paket">Paket</a></li>
          <li><a href="#testimoni">Testimoni</a></li>

          {/* <li><Link to="/login">Login</Link></li> */}
          <div className="flex gap-4">
            {user ? (
              // JIKA SUDAH LOGIN: Tampilkan Nama & Tombol Logout
              <div className="flex items-center gap-4">
                <span className="text-[#fff7e8] text-sm">Hi, <b>{user.name}</b></span>
                
                {/* Jika Admin, munculkan tombol Dashboard */}
                {user.role === 'admin' && (
                    <Link to="/dashboard" className="text-sm bg-gray-800 px-3 py-1 rounded text-white border border-gray-600">
                        Dashboard
                    </Link>
                )}

                <button onClick={handleLogout} className="text-red-500 hover:text-red-400 text-sm font-bold">
                  Logout
                </button>
              </div>
            ) : (
              // JIKA BELUM LOGIN: Tampilkan Tombol Masuk
              <Link to="/login" className="px-5 py-2 bg-green-600 rounded-full text-black font-bold hover:bg-green-500 transition">
                Login
              </Link>
            )}
          </div>
        </ul>
        {/* Mobile menu button placeholder */}
      </div>
    </nav>
  );
};

export default Navbar;