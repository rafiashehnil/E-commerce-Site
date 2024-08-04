import React from 'react';
import bannerOffer from '../assets/images/bannerOffer.jpg'; 

const Offer = () => {
  return (
    <section
      className="bg-cover bg-top w-full px-4 py-24 my-16 flex items-center"
      style={{ backgroundImage: `url(${bannerOffer})` }} 
    >
      <div className="max-w-2xl pl-4 sm:pl-6 lg:pl-8">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Summer Sale 50% on all Products</h2>
        <h3 className="text-2xl md:text-3xl font-medium text-black mb-8 capitalize">Don't miss out!</h3>
        <button className="bg-black text-white py-2 px-6 rounded-full text-lg md:text-xl transition duration-300 hover:bg-gray-700">
          Go to Store
        </button>
      </div>
    </section>
  );
}

export default Offer;


