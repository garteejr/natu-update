import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4">

      <div className="flex-1 flex items-center justify-center">
        <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center">
          <span className="text-gray-400 text-sm">LOGO</span>
        </div>
      </div>

      <div className="w-full max-w-sm flex flex-col items-center text-center pb-12">

        <h1 className="text-2xl font-bold tracking-widest text-gray-900 mb-2">
          WELCOME
        </h1>

        <p className="text-gray-400 text-sm mb-8 px-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
       
        <div className="flex gap-2 mb-10">
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-black"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        </div>

        <Link
          to="/login"
          className="w-[85%] bg-[#16a34a] py-3 rounded-full font-medium text-white shadow-md hover:bg-[#15803d] active:scale-95 transition"
        >
          Log In
        </Link>

        <Link
          to="/register"
          className="mt-6 text-sm text-gray-400 hover:text-gray-600 transition"
        >
          Register
        </Link>
      </div>

    </div>
  );
}
