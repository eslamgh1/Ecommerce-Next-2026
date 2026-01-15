

import { ProductType } from "_/app/_interfaces/products";
import React from "react";
import { ProductTypeCard } from "./ProductCard.type";


export default async function ProductCard({product} : ProductTypeCard) {


  return (
<div key={product.id} className="bg-blue-300 rounded-lg p-b">
        <img src={product.imageCover} alt={product.title} width="w-full" />
        <h2>{product.title.split(" ", 3).join(" ")}</h2>
        {/* <p>{product.description}</p> */}
        <p>Price: {product.priceAfterDiscount ? <> 
        <span className="line-through text-red-500 pe-3">{product.price} EGP</span> 
        <span>{product.priceAfterDiscount} EGP</span></> : 
          <span>{product.price} EGP</span>}</p>
          <p>{product.ratingsAverage} <i className="fa-solid fa-star text-yellow-500"></i></p>


      </div>
  )
}
