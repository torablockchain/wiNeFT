import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <nav className="absolute top-0 left-0 w-full px-6 md:px-12 py-4 flex justify-between items-center bg-transparent text-white z-50">
      <div className="text-2xl font-bold tracking-wide">
        wiNe<span className="text-blue-300">FT</span>
      </div>

      <ul className="hidden md:flex space-x-6 text-sm md:text-base font-light">
        <li><a href="#" className="hover:text-gray-300 transition">Vinos</a></li>
        <li><a href="#" className="hover:text-gray-300 transition">Bodegas</a></li>
        <li><a href="#" className="hover:text-gray-300 transition">Cómo funciona</a></li>
        <li><a href="#" className="hover:text-gray-300 transition">Contacto</a></li>
        <li><a href="#" className="hover:text-gray-300 transition">FAQ</a></li>
      </ul>

      <div className="flex items-center space-x-4">
        <select
          onChange={changeLanguage}
          className="bg-transparent text-white text-sm focus:outline-none"
          defaultValue={i18n.language}
        >
          <option value="es" className="text-black">ES</option>
          <option value="en" className="text-black">EN</option>
        </select>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-white hover:text-gray-300 transition"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button className="px-4 py-1 border border-white rounded-full text-sm hover:bg-white hover:text-black transition">
          Conectar Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
