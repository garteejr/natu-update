import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LaporanMasuk() {
  const [laporan, setLaporan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/calling")
      .then(res => {
        if (!res.ok) throw new Error("Gagal mengambil data laporan");
        return res.json();
      })
      .then(data => {
        setLaporan(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-4">Loading laporan...</div>;
  if (error) return <div className="p-4">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="bg-white px-4 py-3 flex items-center shadow-sm">
        <button
          onClick={() => navigate("/profile")}
          className="p-2 rounded-full active:bg-gray-100 transition"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#16a34a"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <h1 className="ml-2 text-sm font-semibold text-gray-800">
          Laporan Masuk
        </h1>
      </div>

      {laporan.length === 0 && (
        <div className="p-4 text-gray-500">
          Tidak ada laporan masuk
        </div>
      )}

      <div className="space-y-4 p-4">
        {laporan.map(lap => (
          <div
            key={lap.id}
            onClick={() => navigate(`/relawan/laporan/${lap.id}`)}
            className="
              bg-white p-4 rounded-xl shadow
              cursor-pointer
              hover:bg-gray-50
              transition
            "
          >
            <p className="font-semibold">Korban: {lap.korbanName}</p>
            <p className="text-sm text-gray-600">Lokasi: {lap.location}</p>
            <p className="text-sm">Status: {lap.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
