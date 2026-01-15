import React from "react";
import { ProductType } from "./_interfaces/products";
import ProductCard from "./_Component/ProductCard/ProductCard";
import { getAllProducts } from "./_services/products.service";

//Home function is a Server Component.
// It’s just a "Regular" Async Function
//One-Time Run: It doesn't "re-render" every time something changes like a client component; it runs once per request (unless you use caching).
export default async function Home() {
  //1- fetch the products from the API
  const allProducts = await getAllProducts()
  // console.log({ allProducts });

  return (
    //1- Main Dev: grid layout with 4 columns instead of Flexbox
    <div className="grid grid-cols-4 gap-5 w-3/4 mx-auto">
      {/*2- map through the products and display them in separate divs */}
      {allProducts?.map((product) => <ProductCard key={product.id} product={product}/>)}

    </div>
  );
}
