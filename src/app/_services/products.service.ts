import { ProductType } from "../_interfaces/products";

  
  export async function getAllProducts(): Promise<ProductType[] | null> {
    try {
      // await == pause the execution until the promise is resolved
      const res = await fetch("https://ecommerce.routemisr.com/api/v1/products");
      //pause the execution until the promise is resolved
      const finalRes = await res.json();

      return finalRes.data; // to use the data in other functions

    } catch (error) {
      console.log({ error });
      return null;
    }
  }