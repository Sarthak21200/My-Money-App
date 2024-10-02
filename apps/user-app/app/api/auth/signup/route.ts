import db from "@repo/db/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";


// i can also make this server using express library

export async function POST(req:NextRequest){
    const { phone, name, password } = await req.json();
    
    try {
      const existingUser = await db.user.findFirst({
        where: {
          number: phone,
        },
      });
      
      
      if (existingUser) {
        return NextResponse.json({ error: 'User already exists' }, { status: 400 });
      }
      
      const hashedPassword = await bcrypt.hash(password, 10);
        const user = await db.user.create({
          data: {
            number: phone,
            password: hashedPassword,
            name:name,
          },
        });

        const balance = await db.balance.create({
            data:{
              userId:user.id,
              amount:Number(0),
              locked:Number(0)
            }
        })

        
        
        
        return NextResponse.json({ message: 'User created successfully', user });
      } catch (error) {
        return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
      }
}