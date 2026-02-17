import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "_/components/ui/table";
import { getUserToken } from "../utils/utils";
import { ProductType } from "../_interfaces/products";
import { Button } from "_/components/ui/button";
import { Input } from "_/components/ui/input";
import { useState } from "react";

type itemType = {
  count: number,
  product: ProductType,
  price: number,
  _id: string
}

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

    // Handle error responses including "Pool was force destroyed"
    if (!response.ok || !finalRes?.data || finalRes?.statusMsg === 'error') {
      console.error('Cart API Error:', finalRes);
      return {
        numOfCartItems: 0,
        products: [],
        totalCartPrice: 0
      };
    }

    return {
      numOfCartItems: finalRes.numOfCartItems ?? 0,
      products: finalRes.data.products ?? [],
      totalCartPrice: finalRes.data.totalCartPrice ?? 0
    }
  }

  const { numOfCartItems, products, totalCartPrice } = await getUserCart()
  console.log({ "products": products });

  // For now, make inputs read-only since this is a server component
  // TODO: Convert to client component for full interactivity
  return (
    <div className="p-30">
      <div className="w-full flex justify-between mb-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Shopping Cart</h2>
          <div className="text-lg">Number of items: {numOfCartItems}</div>
          <div className="text-lg font-semibold">Total price: {totalCartPrice} EGP</div>
        </div>
        <div className="flex gap-2">
          <Button className="cursor-pointer">Proceed to Payment</Button>
          <Button className="cursor-pointer" variant="destructive">Clear Cart</Button>
        </div>
      </div>

      <div className="w-3/4 mx-auto">
        <Table>
          <TableCaption>Your shopping cart items</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/2 text-blue-600 text-center">Product</TableHead>
              <TableHead className="text-blue-600 text-center">Price</TableHead>
              <TableHead className="text-blue-600 text-center">Count</TableHead>
              <TableHead className="text-center text-blue-600">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-center">
            {products.map((item: itemType) => (
              <TableRow key={item._id}>
                <TableCell className="font-medium text-green-600">
                  <div className="flex flex-col items-center gap-2">
                    <div>
                      <img src={item.product.imageCover} alt={item.product.title} className="max-w-[100px] max-h-[100px]" />
                    </div>
                    <h3 className="text-sm">
                      {item.product.title.split(' ').slice(0, 2).join(' ')}
                    </h3>
                  </div>
                </TableCell>
                <TableCell className="text-green-600">{item.price}</TableCell>
                <TableCell className="text-green-600">{item.count}</TableCell>
                <TableCell className="text-green-600 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex gap-2">
                      <Button className="cursor-pointer" size="sm">+</Button>
                      <Input 
                        type="number" 
                        value={item.count} 
                        className="w-16 text-center" 
                        readOnly 
                      />
                      <Button className="cursor-pointer" size="sm">-</Button>
                    </div>
                    <div>
                      <Button variant="destructive" className="cursor-pointer w-full" size="sm">Remove</Button>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}