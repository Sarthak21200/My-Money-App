




import { ConfirmAdd } from "@repo/ui/confirmAdd";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { ConfirmAdd2 } from "../../components/ConfirmAdd2";

export default async function confirmAddMoney(){
   
    const session = await getServerSession(authOptions);
    
    const userId = session.user.id;
   
    return(
        <div>
            
            {/* <ConfirmAdd user_identifier={userId}></ConfirmAdd> */}
            <ConfirmAdd2 user_identifier={userId}></ConfirmAdd2>
        </div>
        
    )

}