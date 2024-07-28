import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 m-auto max_padd_container w-full bg-white ring-1 ring-slate-900/5 z-10">
      <div className="px-4 py-3 max-sm:px-2 flex justify-between">
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" height={66} width={66} />
          </Link>
        </div>
        <Navbar />
     <div>buttons</div>
      </div>
    </header>
  );
};

export default Header;
