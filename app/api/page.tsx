//import packages
import React from "react";
import { Metadata } from "next";

//import locally
import { ScrollArea } from "@/components/ui/scroll-area";
import { SmallNav } from "@/components/SmallNav";
import { StkPush } from "@/components/StkPush";
import { QrCode } from "@/components/QrCode";
import { OnlinePayment } from "@/components/OnlinePayment";
import { RegisterC2BUrl } from "@/components/RegisterC2BUrl";
import { B2CPaymentRequest } from "@/components/B2CPaymentRequest";
import { TransactionStatus } from "@/components/TransactionStatus";
import { AccountBalance } from "@/components/AccountBalance";
import { ReverseC2BTransaction } from "@/components/ReverseC2BTransaction";


export const metadata: Metadata = {
    title: "Api",
  };


const links = [
    "ReverseC2BTransaction",
    "Accountbalance",
    "TransactionStatus",
    "B2CPaymentRequest",
    "RegisterURLS",
    "OnlinePayment",
    "QrCode",
    "StkPush",
    

]


const Page = () => {
    return (
        <>
        <ScrollArea className="w-4/6 p-5 h-full">
        <SmallNav />
        <h1 className="text-myTextColor">API</h1>
        <p className="text-myGray">The documentation of all available functions and types.</p>
        <StkPush />
        <QrCode />
        <OnlinePayment/>
        <RegisterC2BUrl />
        <B2CPaymentRequest />
        <TransactionStatus />
        <AccountBalance />
        <ReverseC2BTransaction />


        </ScrollArea >
        </>
    )
}


export default Page;