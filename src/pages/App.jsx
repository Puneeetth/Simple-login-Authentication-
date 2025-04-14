import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to MySite</h1>
      <Link to="/login">
        <button className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-200 transition duration-300">
          Please Login
        </button>
      </Link>
    </div>
  );
}

export default App;
