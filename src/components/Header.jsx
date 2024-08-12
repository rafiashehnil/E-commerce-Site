import React, { useContext, useState } from 'react'; 
import { Link, NavLink } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md'; 
import { FaOpencart } from 'react-icons/fa'; 
import Navbar from './Navbar';
import logo from '../assets/images/logo.png';
import logout from '../assets/images/logout.svg';
import user from '../assets/images/user.svg';
import { ShopContext } from '../Context/ShopContext';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false); 
  const {getTotalCartItems} =useContext(ShopContext);

  return (
    <header className="fixed top-0 left-0 w-full bg-white ring-1 ring-slate-900/5 z-10 h-16 flex items-center">
      <div className="container mx-auto px-4 flex justify-between items-center h-full">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-14 w-auto object-contain" />
        </Link>
        
        {/* Navbar Desktop */}
        <Navbar containerStyles="hidden md:flex gap-x-5 xl:gap-x-10 medium-15 capitalize font-bold" />
        
        {/* Navbar Mobile */}
        <Navbar 
          containerStyles={`${
            menuOpened
              ? "flex items-start flex-col gap-y-12 fixed top-20 p-6 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 right-0 m-4"
              : "hidden"
          }`}
        />

        <div className="flex items-center gap-4">
          {/* Button to toggle mobile menu */}
          <button 
            onClick={() => setMenuOpened(!menuOpened)} 
            className="md:hidden cursor-pointer hover:text-orange-500 p-2 ring-1 ring-slate-900/30 h-8 w-8 rounded-full flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {menuOpened ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
          
          {/* Cart Button */}
          <NavLink to="/cart" className="relative flex items-center sm:gap-x-6">
            <FaOpencart className="p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full" aria-label="Cart" />
            <span className="absolute top-[-10px] right-[-10px] flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-orange-500 rounded-full">
            {getTotalCartItems()}
            </span>
          </NavLink>
          
          {/* Login Button */}
          <NavLink to="/login" className="bg-orange-500 text-white rounded flex justify-center items-center py-2 px-4 mr-4">
            <img src={user} alt="User Icon" className="h-5 w-5 mr-2" />  
            Login
           </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
