// Header.jsx
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Header() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSOS = () => {
    console.log("SOS DIKIRIM OLEH:", user);

    // simulasi kirim laporan ke calling
    alert("SOS berhasil dikirim ke relawan");

    // nanti bisa redirect ke status
    // navigate("/emergency/status");
  };

  console.log("HEADER USER:", user);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-gray-100">
      <div className="h-14 px-4 flex items-center justify-between">
        <img src="/natu.svg" alt="Natu" className="h-7 w-auto" />

        {user?.role === "korban" && (
          <button
            onClick={handleSOS}
            className="
              px-3 py-1
              text-xs font-semibold
              text-red-600
              border border-red-500
              rounded-full
              active:bg-red-50
              transition
            "
          >
            SOS
          </button>
        )}
      </div>
    </header>
  );
}
