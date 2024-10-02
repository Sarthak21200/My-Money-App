import express from "express";
import db from "@repo/db/client";

import cors from 'cors';
const app = express();


app.use(express.json())

app.use(cors());


app.post("/hdfcWebhook", async (req, res) => {
    //TODO: Add zod validation here?
    //TODO: HDFC bank should ideally send us a secret so we know this is sent by them
    const paymentInformation: {
        token: string;
        userId: string;
        amount: string
    } = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    };
    
    try {
        // const b = db.balance.findFirst({
        //     where:{
        //         userId:Number(paymentInformation.userId)
        //     }
        // })
        // if(!b){
        //     await db.balance.create({
        //         data:{
        //             userId:Number(paymentInformation.userId),
        //             amount:Number(0),
        //             locked:Number(0)
        //         }
        //     })
        // }
        console.log("jai baba ki")

        await db.$transaction([            
            
            db.balance.updateMany({
                where: {
                    userId: Number(paymentInformation.userId)
                },
                data: {
                    amount: {
                        // You can also get this from your DB
                        increment: Number(paymentInformation.amount)
                    }
                }
            }),
            db.onRampTransaction.updateMany({
                where: {
                    token: paymentInformation.token
                }, 
                data: {
                    status: "Success",
                }
            })
        ]);

        res.status(200).json({
            message: "Captured"
        })
    } catch(e) {
        console.error(e);
        res.status(411).json({
            message: "Error while processing webhook"
        })
    }finally {
        await db.$disconnect(); // Disconnect Prisma Client
      }

})

app.listen(3003, () => {
    console.log("Listening on port 3003");
});