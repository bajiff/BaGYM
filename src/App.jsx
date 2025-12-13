import React, { useState, useEffect } from 'react';
import {bannerImg} from "./assets/banner.png"

// --- MOCK DATA ---
// Data ini biasanya diambil dari database/backend, tapi kita hardcode untuk tampilan UI.

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Keunggulan', href: '#keunggulan' },
  { name: 'Fasilitas', href: '#fasilitas' },
  { name: 'Paket', href: '#paket' },
  { name: 'Testimoni', href: '#testimoni' },
];

const features = [
  { title: "Peralatan Modern", description: "Alat gym terbaru dan terawat untuk menunjang performa latihan Anda." },
  { title: "Trainer Profesional", description: "Bimbingan dari ahli bersertifikat untuk mencapai target tubuh ideal." },
  { title: "Lingkungan Nyaman", description: "Area luas, bersih, dan ber-AC dengan suasana yang memotivasi." },
];

const facilities = [
  { name: "Area Angkat Beban Luas" },
  { name: "Zona Kardio Lengkap" },
  { name: "Studio Kelas (Yoga/Zumba)" },
  { name: "Loker & Ruang Ganti Bersih" },
  { name: "Shower Air Hangat" },
  { name: "Free WiFi & Charging Station" },
];

const packages = [
  { name: "Daily Visit", price: "10K", duration: "/hari", description: "Akses sekali masuk. Cocok untuk mencoba.", featured: false },
  { name: "Monthly Grind", price: "150K", duration: "/bulan", description: "Akses penuh selama 30 hari. Paling populer!", featured: true },
  { name: "Annual Gains", price: "1.5jt", duration: "/tahun", description: "Komitmen jangka panjang, hemat maksimal.", featured: false },
];

const testimonials = [
  { name: "Budi Santoso", role: "Member 6 Bulan", quote: "Awalnya ragu karena murah, ternyata alatnya lengkap banget! Suasananya juga enak buat pemula." },
  { name: "Siti Aminah", role: "Member 1 Tahun", quote: "Trainer di BaGYM sangat membantu. Saya berhasil turun 10kg dalam 4 bulan berkat program mereka." },
  { name: "Reza Rahardian", role: "Daily Visitor", quote: "Kalau lagi dinas luar kota dan butuh tempat gym, BaGYM selalu jadi pilihan. Bersih dan praktis." },
];

// --- COMPONENTS ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Efek untuk mengubah navbar saat di-scroll
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
          {navigation.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="text-white/80 hover:text-[#fff7e8] transition-colors text-sm uppercase tracking-wider font-medium">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile menu button placeholder */}
        <button className="md:hidden text-[#fff7e8]">Menu</button>
      </div>
    </nav>
  );
};

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center bg-[#020103] overflow-hidden">
    {/* Background placeholder image or gradient */}
    <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center"></div>
    
    <div className="max-w-7xl mx-auto px-6 z-10 pt-20 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Tebal Otot, <br /> 
          <span className="text-[#fff7e8]">Tipis Dompet?</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
          BaGYM adalah solusi kaum realistis. Dapatkan fasilitas premium tanpa menguras tabungan Anda.
        </p>
        <a href="#paket" className="inline-block px-8 py-4 rounded-full bg-[#fff7e8] text-[#020103] font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,247,232,0.3)]">
          Mulai Sekarang
        </a>
      </div>
      <div className="flex-1 hidden md:block">
        {/* Jika ada banner.png, gunakan ini. Jika tidak, gunakan placeholder */}
        {/* <img src="./assets/banner.png" alt="BaGYM Athlete" className="w-full h-auto object-cover mask-image-gradient" /> */}
         <div className="w-full aspect-square from-[#fff7e8]/20 to-transparent rounded-3xl relative overflow-hidden border border-[#fff7e8]/10 p-2">
             <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1470&auto=format&fit=crop" alt="Placeholder Gym" className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"/>
         </div>
      </div>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section id="keunggulan" className="py-24 bg-[#fff7e8] text-[#020103]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 tracking-tight">Mengapa BaGYM?</h2>
        <p className="text-[#020103]/70 max-w-xl mx-auto">Kami memberikan value terbaik untuk investasi kesehatan Anda.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div key={index} className="p-8 bg-white rounded-2xl shadow-sm border border-[#020103]/5 hover:shadow-xl transition-all group">
            <div className="w-12 h-12 bg-[#020103] rounded-lg mb-6 flex items-center justify-center group-hover:bg-[#fff7e8] transition-colors">
               {/* Placeholder Icon */}
               <div className="w-4 h-4 bg-[#fff7e8] group-hover:bg-[#020103] rounded-sm"></div>
            </div>
            <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
            <p className="text-[#020103]/70 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FacilitiesSection = () => (
  <section id="fasilitas" className="py-24 bg-[#020103] text-white">
    <div className="max-w-7xl mx-auto px-6">
       <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 tracking-tight text-[#fff7e8]">Fasilitas Lengkap</h2>
        <p className="text-white/60 max-w-xl mx-auto">Semua yang Anda butuhkan untuk sesi latihan yang efektif.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {facilities.map((item, index) => (
          <div key={index} className="p-6 border border-white/10 rounded-xl flex items-center gap-4 hover:bg-white/5 transition-colors">
            <div className="w-3 h-3 rounded-full bg-[#fff7e8]"></div>
            <span className="text-lg font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PricingSection = () => (
  <section id="paket" className="py-24 bg-[#fff7e8] text-[#020103]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 tracking-tight">Pilihan Paket</h2>
        <p className="text-[#020103]/70 max-w-xl mx-auto">Fleksibel sesuai kebutuhan dan budget Anda.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 items-center">
        {packages.map((pkg, index) => (
          <div key={index} className={`p-10 rounded-3xl border ${pkg.featured ? 'bg-[#020103] text-white border-[#020103] shadow-2xl scale-105 z-10' : 'bg-white border-[#020103]/10 text-[#020103]'}`}>
            {pkg.featured && <span className="bg-[#fff7e8] text-[#020103] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 inline-block">Best Value</span>}
            <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
            <div className="mb-6">
              <span className={`text-5xl font-extrabold ${pkg.featured ? 'text-[#fff7e8]' : 'text-[#020103]'}`}>Rp{pkg.price}</span>
              <span className={pkg.featured ? 'text-white/60' : 'text-[#020103]/60'}>{pkg.duration}</span>
            </div>
            <p className={`mb-8 ${pkg.featured ? 'text-white/70' : 'text-[#020103]/70'}`}>{pkg.description}</p>
            <button className={`w-full py-3 rounded-xl font-bold transition-all ${pkg.featured ? 'bg-[#fff7e8] text-[#020103] hover:bg-white' : 'bg-[#020103] text-white hover:bg-[#020103]/80'}`}>
              Pilih Paket
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TestimonialSection = () => (
  <section id="testimoni" className="py-24 bg-[#020103] text-white border-t border-white/10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 tracking-tight text-[#fff7e8]">Kata Mereka</h2>
        <p className="text-white/60 max-w-xl mx-auto">Pengalaman nyata dari member komunitas BaGYM.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {testimonials.map((testi, index) => (
          <div key={index} className="bg-white/5 p-8 rounded-2xl border border-white/10 relative">
            {/* Quote Icon decorative */}
            <span className="text-6xl text-[#fff7e8]/20 absolute top-4 left-4 font-serif">"</span>
            <p className="relative z-10 text-lg italic mb-8 text-white/90 leading-relaxed">
              "{testi.quote}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#fff7e8] rounded-full flex items-center justify-center text-[#020103] font-bold text-xl">
                {testi.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-[#fff7e8]">{testi.name}</h4>
                <p className="text-sm text-white/60">{testi.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
    <footer className="py-10 bg-[#020103] text-center text-white/50 border-t border-white/5">
        <p className="mb-4 text-2xl font-bold text-[#fff7e8]">BaGYM<span className="text-white">.</span></p>
        <ul className="flex justify-center gap-6 mb-6">
            <li><a href="#home" className="hover:text-[#fff7e8]">Home</a></li>
            <li><a href="#paket" className="hover:text-[#fff7e8]">Paket</a></li>
            <li><a href="/contact" className="hover:text-[#fff7e8]">Contact</a></li>
        </ul>
        <p className="text-sm">© 2023 BaGYM Project. All rights reserved.</p>
    </footer>
)

// --- MAIN APP COMPONENT ---

const App = () => {
  return (
    <main className="bg-[#020103] text-white antialiased select-none font-sans">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <FacilitiesSection />
      <PricingSection />
      <TestimonialSection />
      <Footer />
    </main>
  );
}

export default App;