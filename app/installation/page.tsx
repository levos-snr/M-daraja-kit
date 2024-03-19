//import packages
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";
import React from "react";

//locally imported
import { ScrollArea } from "@/components/ui/scroll-area";
import { SmallNav } from "@/components/SmallNav";
import { InstallCommands } from "@/components/InstallCommands";



export const metadata: Metadata = {
    title: "Installation",
  };


const links = ["installation", "basic-usage"];  

const Page = () => {
    return(
        <>
        <ScrollArea className="w-4/6 h-full p-5">
            <SmallNav />
            <h1 id="installation">Installation</h1>
            <p className="mt-5 text-myGray">
          In the directory containing package.json, run your package manager`s
          install command:
        </p>
        <InstallCommands />
        </ScrollArea>
        </>
    )
}


export default Page;