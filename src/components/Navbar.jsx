import { useState } from "react";
import { FiLogIn, FiMenu, FiX } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // ✅ useNavigate for redirect

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-600 shadow-md z-50">
      <div className="flex items-center justify-between px-4 lg:px-10 py-4 lg:h-[90px]">
        {/* Logo */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          React Shop
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-6 text-lg bg-white border-2 border-black p-2 rounded-[25px] justify-center min-w-[350px]">
            <li className="cursor-pointer hover:text-blue-500">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-500">
              <Link to="/About">About</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-500">
              <Link to="/product">Products</Link>
            </li>
          </ul>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex space-x-4">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 border-2 border-black px-4 py-2 rounded-md hover:bg-gray-100 transition bg-white"
          >
            <FiLogIn />
            <span>Logout</span>
          </button>
          <button className="flex items-center space-x-2 border-2 border-black px-4 py-2 rounded-md hover:bg-gray-100 transition bg-white">
            <FaGithub />
            <span>Git</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl border border-black rounded-md p-2 bg-white hover:bg-gray-100 transition"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-300 shadow-md">
          <ul className="flex flex-col items-center space-y-3 py-4">
            <li className="cursor-pointer hover:text-blue-500">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-500">
              <Link to="/About">About</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-500">
              <Link to="/product">Products</Link>
            </li>
          </ul>

          <div className="flex flex-col items-center space-y-3 pb-4 w-full px-4">
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 w-full"
            >
              Logout
            </button>
            <button className="flex items-center justify-center w-full border-2 border-black px-4 py-2 rounded-md hover:bg-gray-100 transition bg-white">
              <VscAccount />
              <span className="ml-2"><Link to="/signup">Sign Up</Link></span>
            </button>
            <button className="flex items-center justify-center w-full border-2 border-black px-4 py-2 rounded-md hover:bg-gray-100 transition bg-white">
              <FaGithub />
              <span className="ml-2">Git</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
