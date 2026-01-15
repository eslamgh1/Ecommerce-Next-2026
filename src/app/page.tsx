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
  /* - w-full: Takes full width on mobile.
     - max-w-[1400px]: Prevents the grid from becoming too stretched on large monitors.
     - px-4: Adds a small gutter on mobile so cards don't touch the screen edges.
  */
  <div className="w-full max-w-[1400px] mx-auto px-4 py-8">
    
    {/* - grid-cols-1: 1 card per row (Mobile)
       - sm:grid-cols-2: 2 cards per row (Tablets)
       - md:grid-cols-3: 3 cards per row (Laptops)
       - lg:grid-cols-4: 4 cards per row (Desktop)
       - xl:grid-cols-5: 5 cards per row (Ultra-wide screens)
    */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {allProducts?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    
  </div>
);
}
