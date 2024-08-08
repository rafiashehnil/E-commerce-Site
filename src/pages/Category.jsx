import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import all_products from '../assets/all_products';
import Item from '../components/Item';

const Category = ({ category, banner }) => {
  return (
    <section className="max_padd_container py-12 xl:py-28">
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
      <div className="flex flex-col md:flex-row md:justify-between my-8 mx-2 px-4 md:px-8">
        <h5 className="text-lg font-semibold mb-4 md:mb-0">
          <span className="font-bold">Showing 1-12</span> out of 36 products
        </h5>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full ring-1 ring-slate-900/15 bg-white">
          Sort by <MdOutlineKeyboardArrowDown />
        </div>
      </div> 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-8">
        {all_products.map((item) => {
          if (category === item.category) {
            return (
              <Item 
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            )
          }
          return null;
        })}
      </div>
    </section>
  );
}

export default Category;







