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

export default App;