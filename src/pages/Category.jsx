import React from 'react';

const Category = ({ category, banner }) => {
  return (
    <div>
      <h1 className="text-center text-3xl my-8">{category} Category</h1>
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="carousel w-full">
          {banner.map((image, index) => (
            <div key={index} id={`slide${index + 1}`} className="carousel-item relative w-full">
              <img 
                src={image} 
                className="w-full h-full object-cover object-center" 
                alt={`Slide ${index + 1}`} 
              />
              <div className="absolute inset-0 flex items-center justify-between px-5">
                <a href={`#slide${index === 0 ? banner.length : index}`} className="btn btn-circle bg-white text-gray-500">❮</a>
                <a href={`#slide${index + 2 > banner.length ? 1 : index + 2}`} className="btn btn-circle bg-white text-gray-500">❯</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 md:px-8 lg:px-16 mt-4">
        <h5 className="text-base md:text-lg lg:text-xl">
          Showing 1-12 out of 36 products
        </h5>
      </div>
    </div>
  );
}

export default Category;














