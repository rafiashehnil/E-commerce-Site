import React from 'react'
import {TbArrowRight} from "react-icons/tb"

const ProductHd = (props) => {
    const {product}=props;
  return (
    <div className="flex items-center font-bold flex-wrap gap-x-4 lg:gap-x-6 medium-16 my-4 capitalize px-4 lg:px-8">
      Home<TbArrowRight/>Shop<TbArrowRight/>{product.category}<TbArrowRight/>{product.name}
    </div>
  )
}

export default ProductHd
