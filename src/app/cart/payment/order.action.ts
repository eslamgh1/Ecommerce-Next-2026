'use server'
import { getUserToken } from "_/app/utils/utils"
import { revalidatePath } from "next/cache";

type shippingAddressType = {
    city: string;
    phone: string;
    details: string;
}

export async function createCashOrder(cartId:string , shippingAddress: shippingAddressType) {

    const token = await getUserToken()
    
    if (!token) {
        console.error("No authentication token available")
        return { statusMsg: 'fail', message: 'Authentication required' }
    }

    try {
        const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`, {
            method: "POST",
            body: JSON.stringify({ shippingAddress}),
            headers: {
                "Content-Type": "application/json",
                token: token as string
            },
            // cache: "force-cache"
        })

        const finalCreateOrder = await response.json()
        console.log({finalCreateOrder})
        if(finalCreateOrder.status==="success"){
            revalidatePath("/cart")

            return true
        }
        
        // return finalCreateOrder
    } catch (error) {
        console.error("Error creating order:", error)
        // return { statusMsg: 'fail', message: 'Failed to create order' }
        return false
    }
}
export async function makeCheckoutSession(cartId:string , shippingAddress: shippingAddressType) {

    const token = await getUserToken()
    
    if (!token) {
        console.error("No authentication token available")
        return { statusMsg: 'fail', message: 'Authentication required' }
    }

    try {
        const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`, {
            method: "POST",
            body: JSON.stringify({ shippingAddress}), // stringfy the shippingAddress  to convert the shippingAddress to a string
            headers: {
                "Content-Type": "application/json",
                token: token as string
            },
            // cache: "force-cache"
        })

        const finalCardOrder = await response.json()
        console.log({finalCardOrder})
        if(finalCardOrder.status==="success"){
            revalidatePath("/cart")

            return true
        }
        
        // return finalCreateOrder
    } catch (error) {
        console.error("Error creating order:", error)
        // return { statusMsg: 'fail', message: 'Failed to create order' }
        return false
    }
}