import { Link, useLocation } from "react-router-dom";

export default function Bottomnav() {
  const { pathname } = useLocation();

  const items = [
    ["/profile/weather", "Cuaca", (
      <>
        <circle cx="9" cy="9" r="3" />
        <path d="M9 2v2M9 14v2M2 9h2M14 9h2" />
        <path d="M15 18H7a4 4 0 1 1 .5-7.97A5 5 0 0 1 18 11a3 3 0 0 1-3 7z" />
      </>
    )],
    ["/profile/peringatan", "AI Warning", (
      <>
        <path d="M10.3 3.3L1.7 18a2 2 0 0 0 1.7 3h17.2a2 2 0 0 0 1.7-3L13.7 3.3a2 2 0 0 0-3.4 0z" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
      </>
    )],
    ["/profile/ai", "Chat AI", (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h.01M15 9h.01M9 15h6" />
      </>
    )],
    ["/profile", "Profile", (
      <>
        <circle cx="12" cy="7" r="4" />
        <path d="M20 21a8 8 0 0 0-16 0" />
      </>
    )],
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 bg-white rounded-t-2xl shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
      <div className="flex h-16">
        {items.map(([path, label, icon]) => {
          const active = pathname === path;

          return (
            <Link
              key={path}
              to={path}
              className="flex-1 flex flex-col items-center justify-center"
            >
              {/* indikator atas */}
              <div
                className={`h-1 w-8 mb-1 rounded-full transition-all ${
                  active ? "bg-green-500" : "bg-transparent"
                }`}
              />

              {/* icon */}
              <svg
                className={active ? "text-green-600" : "text-black"}
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {icon}
              </svg>

              {/* label */}
              <span
                className={`text-[11px] mt-1 ${
                  active ? "text-green-600" : "text-black"
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
