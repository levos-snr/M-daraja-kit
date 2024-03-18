//import packages
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";
import React from "react";

//locally imported
import { ScrollArea } from "@/components/ui/scroll-area";



export const metadata: Metadata = {
    title: "Installation",
  };


const links = ["installation", "basic-usage"];  

const Page = () => {
    return(
        <>
        <ScrollArea className="w-4/6 h-full p-5">
        installations
        </ScrollArea>
        </>
    )
}


export default Page;