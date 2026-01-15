

import { ProductType } from "_/app/_interfaces/products";
import React from "react";
import { ProductTypeCard } from "./ProductCard.type";
import Link from "next/link";


export default async function ProductCard({product} : ProductTypeCard) {


  return (
<Link href={`/productDetails/${product.id}`}>
<div className="group relative bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Container with Aspect Ratio */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img 
          src={product.imageCover} 
          alt={product.title} 
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500" 
        />
        {product.priceAfterDiscount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            SALE
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h2 className="text-gray-800 font-semibold text-sm h-10 line-clamp-2 mb-2">
          {product.title}
        </h2>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            {product.priceAfterDiscount ? (
              <>
                <span className="text-xs text-red-400 line-through">
                  {product.price} EGP
                </span>
                <span className="text-blue-600 font-bold text-base">
                  {product.priceAfterDiscount} EGP
                </span>
              </>
            ) : (
              <span className="text-gray-900 font-bold text-base">
                {product.price} EGP
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded text-xs font-medium">
            <span className="text-gray-700">{product.ratingsAverage}</span>
            <i className="fa-solid fa-star text-yellow-500"></i>
          </div>
        </div>

        {/* Quick Add Button - Visible on Hover */}
        <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div></Link>
  )
}
