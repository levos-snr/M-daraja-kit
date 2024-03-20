//imported packages
import { Metadata } from "next";
import React from "react";

//locally imported
import { ApiTitle } from "@/components/ApiTitle";
import { PastableSpan } from "@/components/PastableSpan";
import { SmallNav } from "@/components/SmallNav";


export const metadata: Metadata = {
    title: "Tools",
  };

  const Tools = () => {
    return (
      <div className="w-5/6 h-full p-5 text-myGray">
        <SmallNav />
        <h1 id="installation">Tools</h1>
        <p className="mt-5">
          We understand that migrating is hard :). For this purpose the library
          offers some functions to help you easily integrate daraja-kit to your
          app while still enjoying the stability of your existing code.
        </p>
        <section>
          <ApiTitle text="generateAccessToken" />
          <p className="mt-5">
            The lib offers a <PastableSpan text="generateAccessToken" />{" "}
            function that helps give you accurate non-expired access tokens with
            all the advantages of daraja-kit built in!
          </p>
        </section>
        <section>
          <ApiTitle text="generatePassword" />
          <p className="mt-5">
            The <PastableSpan text="generatePassword" /> function can be used
            to get passwords to include in your daraja api requests
          </p>
        </section>
        <section>
          <ApiTitle text="generateTimestamp" />
          <p className="mt-5">
            The <PastableSpan text="generateTimestamp" /> function can be used
            to get accurate timestamps for using alongside your daraja api calls.
          </p>
        </section>
      </div>
    );
  };
  
  export default Tools; 