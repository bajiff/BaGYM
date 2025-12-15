import { testimonials } from "../utils";

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
export default TestimonialSection;