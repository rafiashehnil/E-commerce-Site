import React from "react";
import { MdOutlineLocalOffer } from "react-icons/md";
import { NavLink } from "react-router-dom";
import heroBg from '../assets/images/hero.jpg'; 
import { FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat h-screen w-full p-8"  style={{ backgroundImage: `url(${heroBg})`, backgroundPosition: 'center top', backgroundSize: 'cover' }}
    >
      <div className="container mx-auto px-4 py-12 relative top-32 xs:top-52">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Discover Timeless Elegance</h1>
          <p className="text-gray-700 text-base sm:text-lg lg:text-xl mb-6">
            Explore our curated digital collections, where timeless elegance meets
            modern convenience. Discover a selection of meticulously chosen pieces
            that bring classic style into the digital age, all at your fingertips.
            Shop now to find your perfect look with ease and sophistication.
          </p>
          <div className="mb-6 flex items-center gap-x-4 my-10">
            <div className="flex items-center gap-x-3">
              <FaStar className="text-black" />
              <FaStar className="text-black" />
              <FaStar className="text-black" />
              <FaStar className="text-black" />
            </div>
            <div className="text-lg sm:text-xl font-bold">
              136K{" "}
              <span className="font-normal text-base sm:text-lg">
                Outstanding Reviews
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <NavLink 
              to="/" 
              className="bg-gray-800 text-white rounded-full py-2 px-4 text-xs sm:text-sm lg:text-base hover:bg-gray-700"
            >
              Shop Now
            </NavLink>
            <NavLink 
              to="/" 
              className="bg-gray-800 text-white rounded-full py-2 px-4 text-xs sm:text-sm lg:text-base flex items-center gap-2 hover:bg-gray-700"
            >
              <MdOutlineLocalOffer />
              Offers
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

