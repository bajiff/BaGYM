import { packages } from "../utils";

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
export default PricingSection;