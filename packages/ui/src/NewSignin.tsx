"use client";
import { useState } from "react";
import { signIn } from 'next-auth/react';
import { useRouter } from "next/navigation"
import Link from "next/link";

export const NewSignin = ({ type }: { type: "signup" | "signin" }) => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSignIn = async () => {
        const result = await signIn('credentials', {
            redirect: false,
            phone:phone,
            password:password,
        });
        
        if (result  && !result.error) {
            
            // Redirect to home page or any other page after successful login
            router.push('/dashboard');
        } else {
            
          // Handle error
          alert("password or phone is incorrect")
          console.error('Failed to sign in');
        }
      };

    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="text-center font-extrabold text-5xl mb-20"> 
                MyMoney
            </div>
            <div className="flex justify-center">
                <div>
                    <div className="px-10">
                        
                        <div className="text-3xl font-extrabold  ">
                            {type == "signup" ? "Create an Account" : "Login to Account"}
                        </div>
                        <div className="text-slate-400 text-center">
                            {type == "signin" ? "Don't have an Account?" : "Already have an account?"}
                            <Link className="pl-2 underline" href="/signup">
                            signup
                        </Link>
                        </div>
                    </div>
                    <div className="pt-7">
                        <div className="pt-2">
                            <div>
                                <label className="block mb-2 text-sm font-semibold text-black">Phone</label>
                                <input onChange={(e)=>{
                                    setPhone(e.target.value)
                                }} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="priyanshu Lakra" required />
                            </div>
                        </div>
                        <div className="pt-2">
                            <div>
                                <label className="block mb-2 text-sm font-semibold text-black">password</label>
                                <input onChange={(e)=>{
                                    setPassword(e.target.value);
                                }} type="password" id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="passowrd" required />
                            </div>
                        </div>
                        
                    </div>
                    <button onClick={handleSignIn}  type="button" className="mt-8  w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type == "signup" ? "Sign Up" : "Sign in"}</button>
                </div>
            </div>
        </div>
    )

}

   




