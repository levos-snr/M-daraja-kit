//imported packages
import React from "react";

//locally imported
import { ApiTitle } from "./ApiTitle";
import { PastableSpan } from "./PastableSpan";

export const ReverseC2BTransaction = () => {
    return (
      <section className="text-myGray">
        <ApiTitle text="ReverseC2BTransaction" />
        <p className="mt-5">
          Reverses a C2B M-Pesa transaction. Once a customer pays and there is a
          need to reverse the transaction, the organization will use this API to
          reverse the amount. You can read the official docs{" "}
          <a
            href="https://developer.safaricom.co.ke/APIs/Reversal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline"
          >
            here.
          </a>
        </p>
        <p className="mt-5">
          You can use the <PastableSpan text="reverseC2BTransaction" />{" "}
          function to make the API call. It takes in an arguement of type
          <PastableSpan text="ReverseC2BTransactionBody" /> and returns an
          awaitable promise of type{" "}
          <PastableSpan text="ReverseC2BTransactionResponse" />
        </p>
      </section>
    );
  };