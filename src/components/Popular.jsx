import React from 'react';
import POPULAR from '../assets/popular';
import Item from './Item';

const Popular = () => {
  console.log(POPULAR); 

  return (
    <section className="bg-white py-12 xl:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
          Popular{' '}
          <span className="text-orange-500">Products</span>
        </h3>
        <hr className="h-[3px] md:w-1/2 mx-auto bg-gradient-to-r from-transparent via-black to-transparent mb-16" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {POPULAR.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
