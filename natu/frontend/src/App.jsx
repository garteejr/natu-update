import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./component/auth/AuthContext";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/profile";
import Emergency from "./pages/Emergency";
import LaporanMasuk from "./pages/menurelawan/LaporanMasuk";
import MobileLayout from "./component/layout/MobileLayout";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile/*"
            element={
              <MobileLayout>
                <Profile />
              </MobileLayout>
            }
          />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/relawan/laporan" element={<LaporanMasuk />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
