import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-blue-500 p-4">
      <div className="text-white font-bold text-lg">
        Studio Ghibli Archive
      </div>

      <div>
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "text-yellow-300 hover:bg-blue-700 px-3 py-2 rounded-md" : "text-white hover:bg-blue-700 px-3 py-2 rounded-md"}
        >
          Home
        </NavLink>
        <NavLink
          to="/films"
          className={({ isActive }) => isActive ? "text-yellow-300 hover:bg-blue-700 px-3 py-2 rounded-md" : "text-white hover:bg-blue-700 px-3 py-2 rounded-md"}
        >
          View Films
        </NavLink>
        <NavLink
          to="/people"
          className={({ isActive }) => isActive ? "text-yellow-300 hover:bg-blue-700 px-3 py-2 rounded-md" : "text-white hover:bg-blue-700 px-3 py-2 rounded-md"}
        >
          View People
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
