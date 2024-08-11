import React from 'react'
import product_rt_1 from '../assets/product_rt_1.jpg'
import product_rt_2 from '../assets/product_rt_2.jpg'
import product_rt_3 from '../assets/product_rt_3.jpg'
import product_rt_4 from '../assets/product_rt_4.jpg'
import {MdStar} from "react-icons/md"


const ProductDisplay = (props) => {
const {product}=props;


  return (
    <section>
        <div className="flex flex-col gap-14 xl:flex-row px-4 lg:px-8">
            <div className="flex gap-x-4 lg:gap-x-6">
                <div className="flex flex-col gap-2 lg:gap-4 flex-wrap">
                    <img src={product_rt_1} alt="prdctImg" className="max-h-[99px]"/>
                    <img src={product_rt_2} alt="prdctImg" className="max-h-[99px]"/>
                    <img src={product_rt_3} alt="prdctImg" className="max-h-[99px]"/>
                    <img src={product_rt_4} alt="prdctImg" className="max-h-[99px]"/>

                    
                </div>
                <div>
                    <img src={product.image} alt=""/>
                </div>
            </div>
            <div className="flex flex-col">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold">
                    {product.name}
                </h3>
                <div className="flex items-center gap-x-2 sm:gap-x-4 text-orange-500 text-lg sm:text-xl lg:text-2xl font-medium">
                    <MdStar/>
                    <MdStar/>
                    <MdStar/>
                    <MdStar/>
                    <p className="text-gray-500">(111)</p>
                </div>
                <div className="flex gap-x-6 text-lg sm:text-xl lg:text-2xl font-medium my-4">
                    <div className="line-through">Tk {product.old_price}</div>
                    <div className="text-orange-500">Tk {product.new_price}</div>
                </div>
                <div className="mb-4">
    <h4 className="text-lg sm:text-xl font-bold">Select Size:</h4>
    <div className="flex gap-3 my-3">
        <div className="ring-2 ring-slate-900 h-10 w-10 flex items-center justify-center cursor-pointer">S</div>
        <div className="ring-2 ring-slate-900/10 h-10 w-10 flex items-center justify-center cursor-pointer">M</div>
        <div className="ring-2 ring-slate-900/10 h-10 w-10 flex items-center justify-center cursor-pointer">L</div>
        <div className="ring-2 ring-slate-900/10 h-10 w-10 flex items-center justify-center cursor-pointer">XL</div>
    </div>
    <div className="flex flex-col gap-y-3 mb-4 max-w-[555px]">
    <button className="bg-transparent border-2 border-gray-900 text-gray-900 py-2 px-4 rounded-none uppercase text-sm tracking-widest hover:bg-gray-900 hover:text-white transition duration-300">
        Add to cart
    </button>
    <button className="bg-gray-900 text-white py-2 px-4 rounded-none uppercase text-sm tracking-widest hover:bg-gray-700 transition duration-300">
        Buy it now
    </button>
</div>

<p className="text-gray-700">
    <span className="text-sm sm:text-base font-bold">Category:</span> Women | Salwar Kamiz | Summer
</p>
<p className="text-gray-700">
    <span className="text-sm sm:text-base font-bold">Tags:</span> Ethnic | Modern | Stylish
</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductDisplay