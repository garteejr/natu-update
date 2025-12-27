import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, pin }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.user.role);
        navigate("/profile");
      } else {
        setError(data.error || "Login gagal");
      }
    } catch {
      setError("Server error");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col px-4">

      {/* AVATAR (ATAS) */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-24 h-24 rounded-full border border-gray-300 flex items-center justify-center">
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 20.25a7.5 7.5 0 0115 0"
            />
          </svg>
        </div>
      </div>

      {/* FORM (BAWAH) */}
      <div className="w-full max-w-[360px] mx-auto pb-10">

        {error && (
          <p className="text-sm text-red-500 text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Email / Phone Number"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-100 rounded-full px-5 py-3 text-sm focus:outline-none"
            required
          />

          <input
            type={showPin ? "text" : "password"}
            placeholder="Password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="bg-gray-100 rounded-full px-5 py-3 text-sm focus:outline-none"
            required
          />

          <button
            type="submit"
            className="mt-2 bg-[#16a34a] text-white py-3 rounded-full font-medium"
          >
            Next
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-6">
          Belum punya akun?{" "}
          <Link to="/register" className="text-gray-600 font-medium">
            Registrasi dulu
          </Link>
        </p>

      </div>
    </div>
  );
}
