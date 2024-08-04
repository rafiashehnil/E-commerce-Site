import React from 'react';

const NewsLetter = () => {
  return (
    <section className="bg-gray-200 py-12 xl:py-28">
      <div className="bg-white max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 rounded-lg">
        <div className="mx-auto xl:w-[80%] flex flex-col items-center gap-y-8 w-full max-w-[666px]">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-black">Get Exclusive Offers on Your Email</h3>
          <h4 className="uppercase text-lg md:text-xl font-semibold text-center text-black">Subscribe to our Newsletter and stay tuned</h4>
          <div className="flex items-center rounded-full ring-1 ring-slate-900/5 hover:ring-slate-900/15 bg-white w-full max-w-[588px]"> 
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full bg-gray-200 pl-7 py-3 border-none outline-none text-base md:text-lg placeholder-gray-500 rounded-full" 
            />
            <button className="bg-black text-white py-3 px-6 rounded-full flex items-center hover:bg-gray-700 transition duration-300 -ml-12">
              Subscribe
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;


