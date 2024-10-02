"use server"
import db from "@repo/db/client";






export default async function seachBarSugg(filter:string) {
  
    
  if (!filter || typeof filter !== 'string') {
    return {
        message:"no filter"
    }
  }

  const users = await db.user.findMany({
      where: {
          name: { contains: filter },
        }
    });
   
    
    return {
        user: users.map(user => ({
           username: user.number,
        }))
    }
  
}
