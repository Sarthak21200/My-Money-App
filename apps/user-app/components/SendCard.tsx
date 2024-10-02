"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/textinput";
import { useState } from "react";
import { p2pTransfer } from "../app/lib/action/transferp2p";
import { useRouter } from "next/navigation";


export const P2Pmoney = () => {
    const [number , setNumber ] = useState("");
    const[amount , setAmount] = useState("");
    const router = useRouter();
    return <div>
        <Card title="Send Money">
            <div className="w-full">
                <TextInput label={"phone"} placeholder={"phone"} onChange={(value) => {
                    setNumber(value)
                }} />
                <TextInput label={"Amount"} placeholder={"Amount"} onChange={(value) => {
                    setAmount(value)
                }} />
                <div className="flex justify-center pt-4">
                    <Button onClick={() => {
                        p2pTransfer(number , Number(amount)*100)
                        router.push("/dashboard")
                    }}>
                        Send Money
                    </Button>
                </div>
            </div>
        </Card>
    </div>
}