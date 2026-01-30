// ? components/features/CheckInKiosk.jsx
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const CheckInKiosk = () => {
  const [inputCode, setInputCode] = useState('');
  const [result, setResult] = useState(null); // Data member hasil scan
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null); // Untuk Auto-focus

  // Auto-focus ke input saat halaman dimuat
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleScan = async (e) => {
    e.preventDefault();
    if (!inputCode) return;

    setLoading(true);
    setResult(null);

    try {
      const response = await axios.post('http://localhost:5000/api/checkin', { code: inputCode });
      setResult(response.data);
    } catch (error) {
      // Handle error (Member tidak ditemukan dll)
      setResult({ 
        access: 'Error', 
        message: error.response?.data?.message || 'Error System' 
      });
    } finally {
      setLoading(false);
      setInputCode(''); // Reset input biar siap scan berikutnya
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      
      {/* 1. Header Kiosk */}
      <h1 className="text-white text-3xl font-bold mb-8 tracking-widest">
        BaGYM ACCESS CHECK
      </h1>

      {/* 2. Input Scanner Area */}
      <div className="w-full max-w-lg">
        <form onSubmit={handleScan} className="relative">
          <input
            ref={inputRef}
            type="text"
            className="w-full p-6 text-center text-2xl font-bold rounded-2xl border-4 border-gray-700 bg-gray-800 text-white focus:outline-none focus:border-green-500 transition-colors"
            placeholder="Scan Barcode / Ketik ID..."
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
            disabled={loading}
          />
          {loading && <p className="text-center text-gray-400 mt-2">Memproses...</p>}
        </form>
      </div>

      {/* 3. Result Display Area */}
      {result && (
        <div className={`mt-10 p-8 rounded-3xl text-center w-full max-w-2xl shadow-2xl transform transition-all duration-500 scale-105 ${
          result.access === 'Granted' ? 'bg-green-500' : 'bg-red-600'
        }`}>
          
          {/* Ikon Besar */}
          <div className="text-8xl mb-4">
            {result.access === 'Granted' ? '✅' : '❌'}
          </div>

          {/* Teks Status */}
          <h2 className="text-5xl font-black text-white mb-2 uppercase">
            {result.access === 'Granted' ? 'SILAHKAN MASUK' : 'AKSES DITOLAK'}
          </h2>

          {/* Detail Member */}
          {result.data && (
            <div className="bg-white/20 rounded-xl p-4 mt-6 text-white backdrop-blur-sm">
              <p className="text-2xl font-bold">{result.data.full_name}</p>
              
              {result.access === 'Granted' ? (
                 <p className="text-lg mt-2">Sisa Membership: {result.data.keputusan_sistem === 'BOLEH_MASUK' ? 'Aman' : 'Critical'}</p>
              ) : (
                <div className="mt-2">
                  <p className="font-bold bg-black/30 inline-block px-3 py-1 rounded">
                    {result.data.keputusan_sistem}
                  </p>
                  {/* Tombol Aksi Cepat jika Expired */}
                  {result.data.keputusan_sistem === 'DITOLAK_EXPIRED' && (
                    <button className="block w-full mt-4 bg-yellow-400 text-black font-bold py-3 rounded shadow hover:bg-yellow-300">
                      PERPANJANG SEKARANG
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
          
          {/* Pesan Error jika Not Found */}
          {result.access === 'Error' && (
            <p className="text-xl text-white font-medium">{result.message}</p>
          )}

        </div>
      )}

      <p className="text-gray-500 mt-12 text-sm">Tekan ENTER setelah scan</p>
    </div>
  );
};

export default CheckInKiosk;