// src/components/Navbar.jsx
import React from "react";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="p-4 bg-gray-100 dark:bg-gray-800 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold dark:text-white">MySite</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="text-sm bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-4 py-1 rounded"
      >
        {darkMode ? "🌞 Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}

export default Navbar;
