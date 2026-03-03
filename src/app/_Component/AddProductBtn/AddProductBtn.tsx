'use client'

import { Button } from "_/components/ui/button";
import { toast } from "sonner";
import { useContext } from "react";
import { CartContext } from "_/app/cart/CartContext";
import { addProductToCart } from "_/app/cart/cart.action";

export default function AddProductBtn({id}:{id:string}) {

    const {updateCartCount} = useContext(CartContext)

    async function handleAddToCart() {
        console.log("Add to Cart clicked");
        const  isSuccessfullyAdd = await addProductToCart(id); // server action ==> cart.action

        if (isSuccessfullyAdd) {
            toast.success("Product added to cart successfully" ,{position: "top-center"});
            updateCartCount( isSuccessfullyAdd)
        } else {
            toast.error("Somthing wrong" ,{position: "top-center"});
        }
       

    }



    return (<>
        {/* Quick Add Button - Now part of the flex column */}
        <div className="p-4 pt-0">
            {/* I removed opacity 0 */}
            <Button onClick={handleAddToCart} className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium group-hover:opacity-100 transition-opacity duration-300 hover:bg-blue-700">
                Add to Cart
            </Button>
        </div>
    </>
    )


}