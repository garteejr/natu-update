import DashboardUser from "../component/Dashboard/DashboardUser";
import DashboardRelawan from "../component/Dashboard/DashboardRelawan";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../component/auth/AuthContext";

export default function Profile() {
  const navigate = useNavigate();
  const { user, loading, logout } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>Data user tidak tersedia</div>;

console.log("USER DASHBOARD:", user);


  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return user.role === "relawan" ? (
    <DashboardRelawan user={user} onLogout={handleLogout} />
  ) : (
    <DashboardUser user={user} onLogout={handleLogout} />
  );
}
