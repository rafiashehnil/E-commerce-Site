import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Item = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg relative h-[400px] flex flex-col">
      <div className="relative flex-1 group overflow-hidden transition-transform duration-300">
        <Link
          to={`/product/${id}`}
          className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-12 bg-white rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300 z-20"
        >
          <FaSearch className="text-gray-600 text-base" />
        </Link>
        <img
          src={image}
          alt="productImage"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          style={{ objectPosition: 'center top' }}
        />
      </div>
      <div className="p-4 flex flex-col justify-between">
        <h4 className="my-[6px] text-gray-700 text-lg font-medium line-clamp-2">{name}</h4>
        <div className="flex gap-5 items-center">
          <div className="font-bold text-lg">
            Tk {new_price.toFixed(2)}
          </div>
          <div className="text-orange-500 line-through text-lg">
            Tk {old_price.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;






