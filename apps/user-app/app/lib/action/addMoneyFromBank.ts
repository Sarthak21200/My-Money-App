"use server"

import db from "@repo/db/client";

export async function addMoneyFromBank(token:string , user_identifier :string , amount:string){

    await db.$transaction([            
            
        db.balance.updateMany({
            where: {
                userId: Number(user_identifier)
            },
            data: {
                amount: {
                    // You can also get this from your DB
                    increment: Number(amount)
                }
            }
        }),
        db.onRampTransaction.updateMany({
            where: {
                userId:Number(user_identifier)
            }, 
            data: {
                status: "Success",
            }
        })
    ]);

    // return {
    //     message:"money added to wallet "
    // }



}