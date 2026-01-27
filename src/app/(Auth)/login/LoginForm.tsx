'use client'
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '_/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '_/components/ui/form';
import { Input } from '_/components/ui/input';
import React from 'react'
import { useForm } from 'react-hook-form';
import * as zod from "zod"
import { schema } from './login.schema';


import { toast } from 'sonner';
import { cookies } from 'next/headers';
import { LoginFormType } from './login.type';
import { handleLogin } from './login.action';
import { useRouter } from 'next/navigation';

//npx shadcn@latest add form
//https://react-hook-form.com/get-started?#IntegratingControlledInputs


export default function LoginForm() {

    const router = useRouter()

    const reactHookFormObject = useForm({
        resolver: zodResolver(schema),
        mode: "onBlur",
        defaultValues: {
            email: "",
            password: "",

        },
    }
    )
    const { control, handleSubmit } = reactHookFormObject

    async function mySubmit(data: LoginFormType) {

        const resOutPut = await handleLogin(data)
        console.log({resOutPut})

        if (resOutPut === true) {

            toast.success("Login Successfully", { position: "top-center", duration:3000})
              router.push("/")
          
        } else {
            toast.error(resOutPut, { position: "top-center" ,duration:3000})
        }
    }

    return (
        <div className='w-1/2 mx-auto pt-20 pb-10 flex flex-col gap-5'>
            <h1 className='text-2xl font-bold p-10 text-center'>Register</h1>
            {/* //Form is wrapper not <form */}
            <Form {...reactHookFormObject}>
                <form onSubmit={handleSubmit(mySubmit)}>

                    <FormField
                        control={control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="mb-5">

                                <FormLabel>Email: </FormLabel>
                                <FormControl>
                                    <Input placeholder="write your email" {...field} type="email" />
                                </FormControl>
                                {/* <FormDescription>This is your public display name.</FormDescription> */}
                                {/* //<FormMessage /> Display error message */}
                                <FormMessage />

                            </FormItem>
                        )}
                    />
                    <FormField
                        control={control}
                        name="password"
                        render={({ field }) => (
                            <FormItem className="mb-5">

                                <FormLabel>Password: </FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your password" {...field} type="password" />
                                </FormControl>
                                {/* <FormDescription>This is your public display name.</FormDescription> */}
                                {/* //<FormMessage /> Display error message */}
                                <FormMessage />

                            </FormItem>
                        )}
                    />



                    <Button type="submit">Submit</Button>
                </form>
            </Form>



        </div>
    );
}