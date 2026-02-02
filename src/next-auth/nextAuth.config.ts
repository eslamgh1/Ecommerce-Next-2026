import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const nextAuthConfig: NextAuthOptions = {
    providers: [
        //Credentials Provider is used to create custom login page
        //google provider 
        //github provider

        Credentials({
            name: "Login Fresh Cart",
            authorize: async function (credentials, req) {

                console.log("credentials", credentials )
                // console.log("req", req )

                const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(credentials)  //convert object to JSON string. 
                })  
                const finalRes = await res.json()
                // console.log({ finalRes })

                if (finalRes.message == "success") {

                    const { role, ...rest } = finalRes.user
                    console.log({ rest })
                    return {
                        ...rest
                        // id: finalRes.user.email, // NextAuth needs this id field!
                        // token: finalRes.token
                    }
                }
                return null
            },
            // field in login page
            credentials: {
                email: {},
                password: {}
            },

        })
    ],

    pages:{
        signIn: "/login"
    }
}

