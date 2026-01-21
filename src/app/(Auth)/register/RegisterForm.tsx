'use client'
import { Button } from '_/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '_/components/ui/form';
import { Input } from '_/components/ui/input';
import React from 'react'
import { useForm } from 'react-hook-form';

//npx shadcn@latest add form
//https://react-hook-form.com/get-started?#IntegratingControlledInputs

//==================================    
//    "name": "Ahmed Abd Al-Muti",
//    "email":"ahmedmuttii4012@gmail.com",
//    "password":"Ahmed@123",
//    "rePassword":"Ahmed@123",
//    "phone":"01010700701"
//==================================
export default function RegisterForm() {

    const reactHookFormObject = useForm()
    const { control, handleSubmit } = reactHookFormObject

    function mySubmit(data : any) {
        console.log('mySubmit', data)
    }

    return (
        <div className='w-1/2 mx-auto pt-20 pb-10 flex flex-col gap-5'>
            <h1 className='text-2xl font-bold p-10 text-center'>Register</h1>
            {/* //Form is wrapper not <form */}
            <Form {...reactHookFormObject}>
                <form onSubmit={handleSubmit(mySubmit)}>
                <FormField
                    control={control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>

                            <FormLabel>Name: </FormLabel>
                            <FormControl>
                                <Input placeholder="write your name" {...field} type="text" />
                            </FormControl>
                            {/* <FormDescription>This is your public display name.</FormDescription> */}
                            {/* //<FormMessage /> Display error message */}
                            <FormMessage />

                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>

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
                        <FormItem>

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
                <FormField
                    control={control}
                    name="rePassword"
                    render={({ field }) => (
                        <FormItem>

                            <FormLabel>Confirm Password: </FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your confirm password" {...field} type='password' />
                            </FormControl>
                            {/* <FormDescription>This is your public display name.</FormDescription> */}
                            {/* //<FormMessage /> Display error message */}
                            <FormMessage />

                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>

                            <FormLabel>Phone: </FormLabel>
                            <FormControl>
                                <Input placeholder="write your phone" {...field} type="tel" />
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