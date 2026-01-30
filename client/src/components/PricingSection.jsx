import { packages } from "../utils";

const PricingSection = () => {
  const sectionStyle = `min-h-screen flex items-center py-48 bg-[#fff7e8] text-[#020103]`
  const div1Style = `max-w-7xl mx-auto px-6`
  const pilihanPaketStyle = `text-center mb-16`
  const h2PilihanPaket =  `text-4xl font-bold mb-4 tracking-tight`
  const pPilihanPaket = `text-[#020103]/70 max-w-xl mx-auto`
  const div2Packages = `flex flex-col gap-10 lg:grid lg:grid-cols-3`
  
  const getPkgFeatured = (pkgFeatured) => {
    if (pkgFeatured) {
      return 'p-10 rounded-3xl border bg-[#020103] text-white border-[#020103] shadow-2xl scale-105 z-10'
    } else {
      return "p-10 rounded-3xl border bg-white border-[#020103]/10 text-[#020103]"
    }
  };
  
  const spanBestValue = `bg-[#fff7e8] text-[#020103] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 inline-block`
  
  const  h3pkgName =`text-2xl font-bold mb-2`

  return (
    <section id="paket" className={sectionStyle}>
      <div className={div1Style}>
        <div className={pilihanPaketStyle}>
          <h2 className={h2PilihanPaket}>Pilihan Paket</h2>
          <p className={pPilihanPaket}>Sangat terjangkau khususnya bagi kaum realistis</p>
        </div>
        <div className={div2Packages}>
          {packages.map((pkg, index) => (
            <div key={index} className={getPkgFeatured(pkg.featured)}>
              {pkg.featured && <span className={spanBestValue}>Best Value</span>}
              <h3 className={h3pkgName}>{pkg.name}</h3>
              <div className="mb-6">
                <span className={`text-5xl font-extrabold ${pkg.featured ? 'text-[#fff7e8]' : 'text-[#020103]'}`}>Rp{pkg.price}</span>
                <span className={pkg.featured ? 'text-white/60' : 'text-[#020103]/60'}>{pkg.duration}</span>
              </div>
              <p className={`mb-8 ${pkg.featured ? 'text-white/70' : 'text-[#020103]/70'}`}>{pkg.description}</p>
              <a className={`px-2 py-3 rounded-xl font-bold transition-all ${pkg.featured ? 'bg-[#fff7e8] text-[#020103] active:bg-[#f7e9cf] hover:bg-white' : 'bg-[#020103] active:bg-[#e1d4bc] text-white hover:bg-[#020103]/80'}`} href="https://wa.me/+6289639552070" target="_blank" >
                Pilih Paket
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default PricingSection;