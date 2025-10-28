import { Link, NavLink } from "react-router-dom";

export default function AppHeader() {
  return (
    <header className="bg-blue-200 shadow-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
    
        <Link to="/" className="flex items-center gap-3">
          <div className="w-16 h-12 flex items-center justify-center overflow-hidden">
            <img
              src="/logo.png"
              alt="logo"
              className="max-w-[70%] max-h-[70%] object-contain"
            />
          </div>
          <span className="font-semibold">HERO.IO</span>
        </Link>

      
        <nav className="flex-1 flex justify-center items-center gap-4">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-3 py-2 rounded ${isActive ? "bg-purple-100 text-purple-700" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/apps"
            className={({ isActive }) =>
              `px-3 py-2 rounded ${isActive ? "bg-purple-100 text-purple-700" : ""}`
            }
          >
            Apps
          </NavLink>
          <NavLink
            to="/installation"
            className={({ isActive }) =>
              `px-3 py-2 rounded ${isActive ? "bg-purple-100 text-purple-700" : ""}`
            }
          >
            Installation
          </NavLink>
        </nav>

    
        <a
          href="https://github.com/mahinrabby10101"
          target="_blank"
          rel="noreferrer"
          className="ml-4 px-3 py-2 rounded bg-gradient-to-r from-purple-500 to-indigo-600 text-white"
        >
          Contribute
        </a>
      </div>
    </header>
  );
}
