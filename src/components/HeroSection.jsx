import {certificates,person,skills} from "./data";
const HeroSection = () => {
return(
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
)};
export default HeroSection;