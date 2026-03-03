'use client'
import { Button } from "_/components/ui/button"
import { removeItemFromCart } from "./cart.action"
import { toast } from "sonner"
import { useContext } from "react"
import { CartContext } from "_/app/cart/CartContext"
// import { CartContext } from "./CartContext"


export default function RemoveItemButton({id}: {id: string}) {

const {updateCartCount}=useContext(CartContext)

async function handleRemoveItem(){
    const output =  await removeItemFromCart(id)
    if(output === null){
        toast.error("Failed to remove item from cart")
    }else{
        toast.success("Item removed from cart")
        updateCartCount(output)
    }
}

    return (
        <Button onClick={handleRemoveItem} variant="destructive" className="cursor-pointer" size="sm">Remove</Button>

    )
}  