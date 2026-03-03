"use client"
import { Button } from "_/components/ui/button";
import { changeCount } from "./cart.action";
import { toast } from "sonner";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export function ChangeCountBtn({ isIncrement = false, id, newCount }: { isIncrement?: boolean, id: string, newCount: number }) {



    const { updateCartCount } = useContext(CartContext)

    // calling Api
    async function handleChangeCount() {

        const output = await changeCount(id, newCount)

        console.log(output);

        if (output === null) {
            toast.error("Count Not Changed, try again")
        } else {
            toast.success(`Count Changed to ${newCount}`)
            updateCartCount(output)
        }
    }

       return (
            <div>

                <Button disabled={newCount === 0} onClick={handleChangeCount} className="cursor-pointer" size="sm">{isIncrement ? '+' : '-'}</Button>

            </div>
        )
    }