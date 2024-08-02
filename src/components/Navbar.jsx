import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from 'react-icons/md';

const Navbar = ({ containerStyles }) => {
  return (
    <nav className={containerStyles}>
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive
          ? "text-orange-500 font-bold relative before:absolute before:inset-x-0 before:bottom-[-6px] before:border-b-2 before:border-orange-500 before:transition-transform before:scale-x-100"
          : "text-gray-700 hover:text-gray-900 relative before:absolute before:inset-x-0 before:bottom-[-6px] before:border-b-2 before:border-transparent before:hover:border-orange-500 before:transition-transform before:scale-x-0 hover:before:scale-x-100"
      }
    >
      <div className="flex items-center gap-2">
        <MdHomeFilled />
        Home
      </div>
    </NavLink>
    <NavLink
      to="/men"
      className={({ isActive }) =>
        isActive
          ? "text-orange-500 font-bold relative before:absolute before:inset-x-0 before:bottom-[-6px] before:border-b-2 before:border-orange-500 before:transition-transform before:scale-x-100"
          : "text-gray-700 hover:text-gray-900 relative before:absolute before:inset-x-0 before:bottom-[-6px] before:border-b-2 before:border-transparent before:hover:border-orange-500 before:transition-transform before:scale-x-0 hover:before:scale-x-100"
      }
    >
      <div className="flex items-center gap-2">
        <MdCategory />
        Men
      </div>
    </NavLink>
    <NavLink
      to="/women"
      className={({ isActive }) =>
        isActive
          ? "text-orange-500 font-bold relative before:absolute before:inset-x-0 before:bottom-[-6px] before:border-b-2 before:border-orange-500 before:transition-transform before:scale-x-100"
          : "text-gray-700 hover:text-gray-900 relative before:absolute before:inset-x-0 before:bottom-[-6px] before:border-b-2 before:border-transparent before:hover:border-orange-500 before:transition-transform before:scale-x-0 hover:before:scale-x-100"
      }
    >
      <div className="flex items-center gap-2">
        <MdShop2 />
        Women
      </div>
    </NavLink>
    <NavLink
      to="/kids"
      className={({ isActive }) =>
        isActive
          ? "text-orange-500 font-bold relative before:absolute before:inset-x-0 before:bottom-[-6px] before:border-b-2 before:border-orange-500 before:transition-transform before:scale-x-100"
          : "text-gray-700 hover:text-gray-900 relative before:absolute before:inset-x-0 before:bottom-[-6px] before:border-b-2 before:border-transparent before:hover:border-orange-500 before:transition-transform before:scale-x-0 hover:before:scale-x-100"
      }
    >
      <div className="flex items-center gap-2">
        <MdContacts />
        Kids
      </div>
    </NavLink>
  </nav>
  

  

  );
};

export default Navbar;
