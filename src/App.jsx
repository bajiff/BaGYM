<<<<<<< HEAD
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
=======
import {certificates,person,skills} from "./data";
const App = () => {

  return (
    <div className="min-h-screen bg-[#F1F3E0] text-[#778873] font-sans selection:bg-[#A1BC98] selection:text-white">
      
      {/* 1️⃣ Hero Section */}
      <section className="w-full min-h-[90vh] flex flex-col justify-center items-center text-center px-6 pt-10">
        <div className="max-w-3xl space-y-6 flex flex-col items-center">
          
          {/* Profile Picture */}
          <div className="relative group">
            <div className="absolute -inset-1  from-[#D2DCB6] to-[#A1BC98] rounded-full blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#F1F3E0] shadow-2xl">
              <img 
                src={person.profile} 
                alt="Putra Prana Raja Profile" 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          <div className="inline-block px-4 py-2 bg-[##778873] rounded-full text-3xl font-semibold tracking-wide mb-2 mt-6">
            Hello Dek 👋🏻 :D
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#778873]">
            {person.name}
          </h1>
          <p className="text-xl md:text-2xl font-medium opacity-90">
            {person.major}
          </p>
          <p className="max-w-lg mx-auto leading-relaxed text-lg opacity-80">
            {person.description}
          </p>
          <div className="pt-4 flex gap-4 justify-center">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-[#A1BC98] text-white font-semibold rounded-lg shadow-md hover:bg-[#778873] transition-all duration-300 transform hover:-translate-y-1 inline-block"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* 2️⃣ About Me Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center border-b-4 border-[#A1BC98] inline-block pb-2">
            About Me
          </h2>
          <div className="bg-[#D2DCB6] p-8 md:p-12 rounded-2xl shadow-xl transform transition-transform hover:scale-[1.01]">
            <p className="text-lg md:text-xl leading-loose text-justify text-[#778873] font-medium">
              {person.about}
            </p>
          </div>
        </div>
      </section>

      {/* 3️⃣ Skills Section */}
      <section className="py-20 px-6 bg-[#F1F3E0]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold border-b-4 border-[#A1BC98] inline-block pb-2">
              Skills
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="group bg-white p-6 rounded-xl shadow-md border-2 border-[#D2DCB6] hover:border-[#A1BC98] transition-all duration-300 hover:shadow-lg cursor-default flex flex-col items-center text-center"
              >
                <span className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </span>
                <h3 className="font-bold text-lg group-hover:text-[#A1BC98] transition-colors">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ Certificates Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold border-b-4 border-[#A1BC98] inline-block pb-2">
              Certificates
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {certificates.map((cert) => (
              <div key={cert.id} className="group bg-white rounded-xl overflow-hidden shadow-lg border border-[#D2DCB6] flex flex-col h-full hover:shadow-2xl transition-shadow duration-300">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <div className="absolute top-0 right-0 bg-[#A1BC98] text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10 shadow">
                    {cert.date}
                  </div>
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6 flex flex-col">
                  <div className="mb-4">
                    <span className="text-[#A1BC98] font-bold text-xs tracking-wider uppercase">Achievement</span>
                    <h3 className="text-xl font-bold mt-1 text-[#778873]">{cert.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {cert.place || cert.event}
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-4">
                    <a 
                      href={cert.image} 
                      target="_blank" 
                      rel="noreferrer"
                      className="block w-full text-center py-2 border-2 border-[#A1BC98] text-[#778873] font-semibold rounded-lg hover:bg-[#A1BC98] hover:text-white transition-colors duration-300"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ Contact / Footer Section */}
      <footer id="contact" className="bg-[#778873] text-[#F1F3E0] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="mb-8 opacity-90">
            Tertarik untuk berdiskusi mengenai pendidikan dasar atau proyek kolaborasi?
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            {/* Email Dummy */}
            <div className="bg-[#A1BC98]/20 border border-[#F1F3E0]/30 backdrop-blur-sm px-6 py-3 rounded-xl">
              <p className="text-lg font-mono">{person.email}</p>
            </div>
            
            {/* Instagram Link */}
            <a 
              href="https://www.instagram.com/putrapranaraja_/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 bg-[#F1F3E0] text-[#778873] px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-[#D2DCB6] transition-all duration-300 transform hover:-translate-y-1"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.48 2h-.165zm-3.77 1.765c-2.26.103-2.492.127-2.956.307a2.916 2.916 0 00-1.064.686 2.916 2.916 0 00-.686 1.064c-.18.463-.204.696-.307 2.956L3.5 12.337v.165c0 2.26.103 2.492.307 2.956.175.45.45.836.812 1.137.3.362.686.637 1.137.812.463.18.696.204 2.956.307l.165.004c2.26 0 2.492-.103 2.956-.307a2.916 2.916 0 001.064-.686 2.916 2.916 0 00.686-1.064c.18-.463.204-.696.307-2.956l.004-.165c0-2.26-.103-2.492-.307-2.956a2.916 2.916 0 00-.812-1.137 2.916 2.916 0 00-1.137-.812c-.463-.18-.696-.204-2.956-.307l-.165-.004zM12 6.666a5.334 5.334 0 110 10.668 5.334 5.334 0 010-10.668zm0 1.778a3.556 3.556 0 100 7.112 3.556 3.556 0 000-7.112z" clipRule="evenodd" />
              </svg>
              <span>@putrapranaraja_</span>
            </a>
          </div>

          <div className=" flex flex-col items-center">
            <p className="text-sm opacity-100">
              © {new Date().getFullYear()} Putra Prana Raja - UINSSC - Mahasiswa PGMI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
};
>>>>>>> 0e4f3634f203b3f5c0710a57cd597edec25dbc86

export default App;