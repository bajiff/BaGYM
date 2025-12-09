const App = () => {
  
  return (
    <>
      <nav className="flex align-center justify-center py-5 text-2xl">
        <ul className="flex gap-7 align-center">
          <li className="gap-3 rounded-tr-lg rounded-bl-lg px-5 py-1  transition-all  hover:bg-yellow-300 hover:shadow-gray-500 hover:shadow-xs"><a href="#" className="">Home</a></li>
          <li className="gap-3 rounded-tr-lg rounded-bl-lg px-5 py-1  transition-all  hover:bg-yellow-300 hover:shadow-gray-500 hover:shadow-xs"><a href="#keunggulan" className="">Keunggulan</a></li>
          <li className="gap-3 rounded-tr-lg rounded-bl-lg px-5 py-1  transition-all  hover:bg-yellow-300 hover:shadow-gray-500 hover:shadow-xs"><a href="#fasilitas">Fasilitas</a></li>
          <li className="gap-3 rounded-tr-lg rounded-bl-lg px-5 py-1  transition-all  hover:bg-yellow-300 hover:shadow-gray-500 hover:shadow-xs"><a href="#paket">Paket</a></li>
          <li className="gap-3 rounded-tr-lg rounded-bl-lg px-5 py-1  transition-all  hover:bg-yellow-300 hover:shadow-gray-500 hover:shadow-xs"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <main className="container py-10 m-auto ">
        <h1 className="text-5xl text-center">Selamat datang di BaGYM</h1>
        <p className="text-4xl text-center pt-10">Mau body <strong className="text-red-600">atletis</strong> tapi dompet lagi <em className="text-red-600 font-bold bg-yellow-400 rounded-2xl px-3">tipis?</em> BaGYM solusi kaum realitis.</p>
      </main>
    </>
  ) 
}

export default App;