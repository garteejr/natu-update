export default function DashboardUser({ user, onLogout }) {
  return (
    <div className="min-h-screen bg-gray-100 pb-32">

      <div className="bg-green-600 text-white px-4 pt-6 pb-14 rounded-b-3xl">
        <div className="relative flex items-center justify-center">
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

          <h1 className="text-lg font-bold text-center">Dashboard</h1>
        </div>
      </div>

      <div className="px-4 -mt-10 mb-6">
        <div className="bg-white rounded-2xl p-4 shadow">
          <p className="text-sm text-gray-500">Halo,</p>
          <p className="text-xl font-bold text-gray-900">
            {user?.username || user?.name || "Pengguna"}
          </p>
          <p className="text-xs text-gray-400 capitalize mb-4">
            Akun {user.role}
          </p>

          <button
            className="w-full border border-green-600 text-green-600
                       text-sm py-2 rounded-full
                       active:scale-95 transition"
          >
            EDIT PROFILE
          </button>
        </div>
      </div>

      <div className="px-4 grid grid-cols-2 gap-4">
        {[
          "AKTIVITAS",
          "KEAMANAN",
          "BANTUAN",
          "PENGATURAN",
        ].map((item) => (
          <div
            key={item}
            className="bg-white rounded-2xl p-5 shadow
                       flex flex-col items-center justify-center
                       active:scale-95 transition"
          >
            <div className="w-10 h-10 bg-green-100 rounded-full
                            flex items-center justify-center mb-3">
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

    </div>
  );
}
