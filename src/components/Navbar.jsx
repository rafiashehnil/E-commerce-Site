import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from 'react-icons/md';

const Navbar = ({ containerStyles }) => {
  return (
    <nav className={containerStyles}>
      <NavLink to="/" className="text-gray-700 hover:text-gray-900"><div className="flex items-center gap-2"><MdHomeFilled />Home </div></NavLink>
      <NavLink to="/men" className="text-gray-700 hover:text-gray-900"><div className="flex items-center gap-2"><MdCategory />Men </div></NavLink>
      <NavLink to="/women" className="text-gray-700 hover:text-gray-900"><div className="flex items-center gap-2"><MdShop2 />Women </div></NavLink>
      <NavLink to="/kids" className="text-gray-700 hover:text-gray-900"><div className="flex items-center gap-2"><MdContacts />Kids </div></NavLink>
      
    </nav>
  );
};

export default Navbar;
