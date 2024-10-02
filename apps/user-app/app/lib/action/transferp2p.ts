"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";


export async function p2pTransfer(to:string , amount:number){
    const session = await getServerSession(authOptions)
    
    const from = session.user.id;
    if(!from){
        // alert("please login first")
        return {
            message:"erro while sending"
        }
    }

    const toUser = await prisma.user.findFirst({
        where:{
            number:to
        }
    })
    if(!toUser){
        // alert("user with this number does't exists")
        return {
            message:"user not found"
        }
    }

    await prisma.$transaction(async (tx) => {
        
        await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(from)} FOR UPDATE`; // locking 
        const fromBalance = await tx.balance.findUnique({
            where: { userId: Number(from) },
          });
          if (!fromBalance || fromBalance.amount < amount) {
            // alert("you don't have sufficient balance ")
            throw new Error('Insufficient funds');
          }

          await tx.balance.update({
            where: { userId: Number(from) },
            data: { amount: { decrement: amount } },
          });

          await tx.balance.update({
            where: { userId: toUser.id },
            data: { amount: { increment: amount } },

          });

          await tx.p2pTransfer.create({
            data:{
                fromUserId:Number(from),
                toUserId:toUser.id,
                amount:amount,
                timestamp:new Date(),
            }
          })
    });

    

}