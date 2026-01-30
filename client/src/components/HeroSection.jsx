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
        {/* <img src="../assets/banner.png" alt="BaGYM Athlete" className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500" /> */}
         <div className="w-full aspect-square from-[#fff7e8]/20 to-transparent rounded-3xl relative overflow-hidden border border-[#fff7e8]/10 p-2">
             <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1470&auto=format&fit=crop" alt="Placeholder Gym" className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500" />
         </div>
      </div>
    </div>
  </section>
);
export default HeroSection;