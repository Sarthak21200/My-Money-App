
import { OnRampTransactions } from "../../../components/OnRampTransactions";
import { P2pTransactions } from "../../../components/P2pTransactions";
import { getOnRampTransactions, getp2pTransactions } from "../transfer/page";




export default async function() {
    
    const transactions = await getOnRampTransactions();
    const p2ptransaction  = await getp2pTransactions();


    return  <div className="w-screen">
    
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
        
        <div>
            <div className="pt-4">
                <OnRampTransactions transactions={transactions} />
            </div>
            <div>
                <P2pTransactions transactions={p2ptransaction}></P2pTransactions>
            </div>
        </div>
    </div>
</div>
}