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
import { TaxRemittance } from "@/components/TaxRemittance";
import { B2BPaymentRequest } from "@/components/B2BPaymentRequest";
import { B2BExpressCheckout } from "@/components/B2BExpressCheckout";
import { NextPage } from "@/components/NextPage";
import SmoothScroll from "@/components/SmoothScroll";


export const metadata: Metadata = {
    title: "Api",
  };


const links = [
    "B2BExpressCheckout",
    "B2BPaymentRequest",
    "TaxRemittance",
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
        <TaxRemittance />
        <B2BPaymentRequest />
        <B2BExpressCheckout />
        <NextPage prevHref="installation" nextHref="tools" />
        </ScrollArea >
        <aside className="w-1/6 border-l p-5 flex flex-col gap-3">
        <p className="text-brightGreen font-semibold">On this page</p>
        {links.map((l) => (
          <a
            href={`https://daraja-kit.vercel.app/api#${l}`}
            className="bg-gray-100 text-sm font-semibold px-2 hover:text-myPurple ml-2 overflow-clip"
            key={l}
          >
            {l}
          </a>
        ))}
      </aside>
      <SmoothScroll />
        </>
    )
}


export default Page;