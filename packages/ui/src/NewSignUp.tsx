"use client"

import axios from "axios";
import { useState } from "react"
import { useRouter} from "next/navigation"
import Link from "next/link";
import { SignUpZod } from "./SignUpZod";



export const NewSignUp=()=>{
    const [phone , setPhone] = useState('');
    const [name , setName ] = useState('');
    const [password , setPassword] = useState('');
    const router = useRouter();
    const handelSignUp = async ()=>{
        try {
            const formData = { phone, name, password };
            
            const {success} = SignUpZod.safeParse(formData);
            if (!success) {
                alert("please provide correct credenticals");
                return{
                    Message:"please try again with correct credentials"
                }
            }
            else{
                
                const response = await axios.post('/api/auth/signup', { phone , name , password });
                if (response.status === 200) {
                  // Redirect to sign-in page after successful sign-up
                  router.push('/signin');
                }
            }
          } catch (error) {
            console.error('Failed to sign up', error);
          }
    }

    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div>
                    <div className="px-10">
                        <div className="text-3xl font-extrabold ">
                            Create an Account
                        </div>
                        <div className="text-slate-400 text-center">
                             Already have an account? 
                             <Link className="pl-2 underline" href="/signin">
                            signin
                        </Link>
                            
                        </div>
                    </div>
                    <div className="pt-7">
                        <div className="pt-2">
                            <div>
                                <label className="block mb-2 text-sm font-semibold text-black">Phone</label>
                                <input onChange={(e)=>{
                                    setPhone(e.target.value)
                                }} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="At least 10 digit number" required />
                            </div>
                        </div>

                        <div className="pt-2">
                            <div>
                                <label className="block mb-2 text-sm font-semibold text-black">Name</label>
                                <input onChange={(e)=>{
                                    setName(e.target.value)
                                }} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="priyanshu Lakra" required />
                            </div>
                        </div>
                        
                        
                        <div className="pt-2">
                            <div>
                                <label className="block mb-2 text-sm font-semibold text-black">password</label>
                                <input onChange={(e)=>{
                                    setPassword(e.target.value);
                                }} type="password" id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="at Least 6 digits" required />
                            </div>
                        </div>
                        
                    </div>
                    <button onClick={handelSignUp}  type="button" className="mt-8  w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"> signup</button>
                </div>
            </div>
        </div>
    )
}