//imported pacakages
import React from "react";

//locally imported
import { ApiTitle } from "./ApiTitle";
import { PastableSpan } from "./PastableSpan";


export const RegisterC2BUrl = () => {
    return (
      <section className="text-myGray">
        <ApiTitle text="RegisterURLS" />
        <p className="mt-5">
          You can use this api to register validation and confirmation URLs. You
          can read the official docs{" "}
          <a
            href="https://developer.safaricom.co.ke/APIs/CustomerToBusinessRegisterURL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline"
          >
            here.
          </a>{" "}
          The gist is that the URLs you register will be used to confirm or
          validate a transaction each time it is executed.
        </p>
        <p className="mt-5">
          You can use the <PastableSpan text="registerC2BUrl" /> function to
          make the request. It takes in an object as an argument of type{" "}
          <PastableSpan text="RegisterUrlBody" /> and returns a{" "}
          <PastableSpan text="RegisterUrlResponse" />
        </p>
      </section>
    );
  };