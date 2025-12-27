import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LaporanMasuk from "../../pages/menurelawan/LaporanMasuk";

export default function DashboardRelawan({ user, onLogout }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();

  const displayName = user?.username || user?.id || "Pengguna";
  const displayRole = user?.role || "–";

  const menuItems = ["LAPORAN MASUK", "VERIFIKASI", "RIWAYAT", "PENGATURAN"];

  const handleMenuClick = (item) => {
    if (item === "LAPORAN MASUK") {
      navigate("/relawan/laporan");
    } else {
      setActiveMenu(item);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-32">
      <div className="bg-green-600 text-white px-4 pt-6 pb-14 rounded-b-3xl">
        <div className="flex items-center justify-center relative">
          <h1 className="text-lg font-bold">Dashboard</h1>

          <button
            onClick={onLogout}
            className="absolute right-0 p-2 rounded-full active:bg-green-700 transition"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </button>
        </div>
      </div>

      <div className="px-4 -mt-10 mb-6">
        <div className="bg-white rounded-2xl p-4 shadow">
          <p className="text-sm text-gray-500">Halo,</p>
          <p className="text-xl font-bold text-gray-900">{displayName}</p>
          <p className="text-xs text-gray-400 mb-3 capitalize">
            Akun {displayRole}
          </p>
          <span className="inline-block text-xs px-3 py-1 rounded-full bg-green-100 text-green-700">
            SIAGA AKTIF
          </span>
        </div>
      </div>

      <div className="px-4 mb-6">
        <div className="bg-white rounded-2xl p-5 shadow">
          <p className="text-sm font-semibold text-gray-900 mb-3">
            Status Relawan
          </p>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Kesiapan</span>
            <span className="text-sm font-semibold text-green-600">Aktif</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div className="bg-green-600 h-2 rounded-full w-[85%]" />
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Kamu siap menerima laporan darurat
          </p>
        </div>
      </div>

      <div className="px-4 grid grid-cols-2 gap-4 mb-4">
        {menuItems.map((item) => (
          <div
            key={item}
            onClick={() => handleMenuClick(item)}
            className="bg-white rounded-2xl p-5 shadow
                       flex flex-col items-center justify-center
                       active:scale-95 transition cursor-pointer"
          >
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#16a34a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="9" />
              </svg>
            </div>
            <p className="text-xs font-semibold text-green-700 text-center">
              {item}
            </p>
          </div>
        ))}
      </div>

      <div className="px-4">
        {activeMenu === "VERIFIKASI" && <Verifikasi />}
        {activeMenu === "RIWAYAT" && <Riwayat />}
        {activeMenu === "PENGATURAN" && <Pengaturan />}
      </div>

    </div>
  );
}
