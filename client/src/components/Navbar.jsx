import { useState , useEffect} from "react";
import { Link } from "react-router-dom";
const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);
  // ? Efek untuk mengubah navbar saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <li><Link to="/login">Login</Link></li>
        </ul>
        {/* Mobile menu button placeholder */}
      </div>
    </nav>
  );
};

export default Navbar;