"use client"

import axios from "axios";
import { useState } from "react"
import { useRouter } from "next/navigation";
import { addMoneyFromBank } from "../app/lib/action/addMoneyFromBank";

interface ConfirmAddProps {
    user_identifier: string;
  }
  
  export const ConfirmAdd2: React.FC<ConfirmAddProps> = ({ user_identifier })=>{
    const [amount , setAmount] = useState("");
    const token = "9999999999";
    const router = useRouter();
    const handleOnclick = async () => {
        try {
          // const response = await axios.post("http://localhost:49160/hdfcWebhook", {
          //   token,
          //   user_identifier,
          //   amount,
          // });

          addMoneyFromBank(token , user_identifier , amount)
          router.push("/dashboard")
          // if (response.status === 200) {
          //   router.push("/dashboard")
          //   // alert("Payment done");
          //   // router.push('/transfer')
          // } else {
          //   alert("Payment failed");
          // }
        } catch (error) {
          console.error("Error making the request:", error);
          alert("Payment failed");
        }
      };


    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div>
                    <div className="px-10">
                        <div className="text-3xl font-extrabold text-center ">
                            HDFC BANK
                        </div>
                        <div className="text-slate-400 ">
                             Add money to your paytm wallet
                            {/* <Link className="pl-2 underline" to={type=='signin'? "/signup" : "/signin"}>
                            {type=="signin"?"Sign up":"Sign in"}
                        </Link> */}
                        </div>
                    </div>
                    <div className="pt-7">
                        

                        <div className="pt-2">
                            <div>
                                <label className="block mb-2 text-sm font-semibold text-black">Amount</label>
                                <input onChange={(e)=>{
                                    setAmount(e.target.value)
                                }} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                            </div>
                        </div>
                        
                        
                    </div>
                    <button  onClick={handleOnclick} type="button" className="mt-8  w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"> Confirm Payment</button>
                </div>
            </div>
        </div>
    )
}

