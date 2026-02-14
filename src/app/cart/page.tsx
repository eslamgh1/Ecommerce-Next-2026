import { getUserToken } from "../utils/utils";

export default async function CartPage() {

    async function getUserCart() {
        const token = await getUserToken();
        const response = await fetch("https://ecommerce.routemisr.com/api/v1/cart", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                token: token as string
            }
        })
        const finalRes = await response.json()
        console.log({ "CartPage": finalRes });

        const { numOfCartItems, data: { products, totalCartPrice } } = finalRes

        return {
            numOfCartItems,
            products,
            totalCartPrice
        }
    }

    const { numOfCartItems, products,totalCartPrice } = await getUserCart()
    console.log({ "products": products });
 getUserCart()

    return (
        <div className="p-30">
            <div>Cart user</div>
            <div>Number of items: {numOfCartItems}</div>
            <div>Total price: {totalCartPrice}</div>
            <div>
                {products.map((product: any) => <div key={product._id}> Hello</div>)}
            </div>
        </div>
    )
}