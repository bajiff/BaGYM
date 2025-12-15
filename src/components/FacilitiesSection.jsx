import { facilities } from "../utils";
const FacilitiesSection = () => (
  <section id="fasilitas" className="min-h-screen flex items-center bg-[#020103] text-white">
    <div className="max-w-7xl mx-auto px-6">
       <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 tracking-tight text-[#fff7e8]">Fasilitas Lengkap</h2>
        <p className="text-white/60 max-w-xl mx-auto">Semua yang Anda butuhkan untuk sesi latihan yang efektif.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {facilities.map((facility, index) => (
          <div key={index} className="p-6 border border-white/10 rounded-xl flex items-center gap-4 hover:bg-white/5 transition-colors">
            <div className="w-3 h-3 rounded-full bg-[#fff7e8]"></div>
            <span className="text-lg font-medium">{facility.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default FacilitiesSection;