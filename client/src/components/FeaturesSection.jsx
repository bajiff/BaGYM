import { features } from "../utils";
const FeaturesSection = () => (
  <section id="keunggulan" className="min-h-screen flex items-center pt-10 lg:pt-0 bg-[#fff7e8] text-[#020103] ">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 tracking-tight">Mengapa BaGYM?</h2>
        <p className="text-[#020103]/70 max-w-xl mx-auto">Kami memberikan value terbaik untuk investasi kesehatan Anda.</p>
      </div>
      <div className="flex flex-col gap-10 lg:grid lg:grid-cols-3">
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
export default FeaturesSection;