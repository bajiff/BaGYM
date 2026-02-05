import { useEffect, useState } from 'react';
import api from '../utils/api.js'; // Import jembatan tadi

const MemberList = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fungsi ambil data dari Backend

  // Jalankan saat halaman pertama kali dibuka
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        // Ini akan menembak ke: http://localhost:5000/api/members
        const response = await api.get('/members');
        
        // Simpan data ke state
        // Perhatikan: response.data.data (karena di backend: res.json({ data: rows }))
        setMembers(response.data.data); 
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Gagal mengambil data dari server.");
        setLoading(false);
      }
    };
    fetchMembers()
  }, []);

  if (loading) return <div className="p-10 text-center">Loading data member...</div>;
  if (error) return <div className="p-10 text-center text-red-500">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-xl rounded-xl mt-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Daftar Member BaGYM</h2>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition">
          + Tambah Member
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Nama</th>
              <th className="py-3 px-6 text-left">No HP</th>
              <th className="py-3 px-6 text-center">Join Date</th>
              <th className="py-3 px-6 text-center">Expired</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {members.map((member) => (
              <tr key={member.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="font-medium text-gray-800">{member.full_name}</div>
                  <div className="text-xs text-gray-400">{member.member_code}</div>
                </td>
                <td className="py-3 px-6 text-left">
                  {member.phone_number}
                </td>
                <td className="py-3 px-6 text-center">
                  {member.join_indo}
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="font-bold text-gray-700">{member.expired_indo}</div>
                  {/* Logic warna sisa hari */}
                  <div className={`text-xs ${member.sisa_hari < 7 ? 'text-red-500 font-bold' : 'text-green-600'}`}>
                    ({member.sisa_hari} hari lagi)
                  </div>
                </td>
                <td className="py-3 px-6 text-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold 
                    ${member.status_aktual === 'Active' ? 'bg-green-200 text-green-700' : 
                      member.status_aktual === 'Expired' ? 'bg-red-200 text-red-700' : 
                      'bg-blue-200 text-blue-700'}`}>
                    {member.status_aktual}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center gap-2">
                    <button className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 flex items-center justify-center">
                       👁️
                    </button>
                    <button className="w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 hover:bg-yellow-200 flex items-center justify-center">
                       ✏️
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MemberList;