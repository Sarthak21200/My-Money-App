"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";


export async function createOnRampTransaction(provider:string , amount:number){

    const session = await getServerSession(authOptions);
    
    const userId = session.user.id;
    if(!session.user || !session.user.id){
        return {
            message:"Unauthorised user"
        }
    }

    // const token = (Math.random() * 1000).toString();
    const token = "9999999999";
    
    await prisma.onRampTransaction.create({
        data:{
            userId:Number(userId),
            amount:amount*100,
            status:"Processing",
            startTime:new Date(),
            provider,
            token:token
        }
    })



    return {
        message:"onRamptransaction added "
    }
}