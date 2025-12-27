import Header from "./HeaderLayout.jsx";
import BottomNav from "./Bottomnav.jsx";

export default function MobileLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100 pt-14 pb-16">
      <Header />
      {children}
      <BottomNav />
    </div>
  );
}
