import { CategoryType } from "../_interfaces/products"

export async function getAllCategories() : Promise<null | CategoryType[]> {

    try {
        
        const res = await fetch("https://ecommerce.routemisr.com/api/v1/categories")
        const finalRes = await res.json()
        // console.log("finalRes", finalRes.data)
        return finalRes.data
        
    } catch (error) {
        
        // console.log("errorGetAllCategories", error)
        return null
    }
}