'use server'
import { toast } from "sonner";
import { getUserToken } from "../utils/utils";

// I Can use Axio "library-outside"
export default async function addProductToCart(productId: string) {
    console.log("Add to Cart clicked");

    const token = await getUserToken()
    console.log({ token });

    if (token) {
        const response = await fetch("https://ecommerce.routemisr.com/api/v1/cart", {
            method: "POST",
            body: JSON.stringify({ productId }),
            headers: {
                "Content-Type": "application/json",
                token: token as string
            }
        })
        const finalRes = await response.json()
  

        if(finalRes.status === "success") {
            return true
        }else{
            return false
        }
    }

}