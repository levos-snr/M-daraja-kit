//import packages
import React from "react";

//locally imported
import { ApiTitle } from "./ApiTitle";
import { PastableSpan } from "./PastableSpan";

export const B2BExpressCheckout = () => {
    return (
      <section className="text-myGray">
        <ApiTitle text="B2BExpressCheckout" />
        <p className="mt-5">
          This API enables you to pay bills directly from your business account to
          a pay bill number, or a paybill store. You can use this API to pay on
          behalf of a consumer/requester.
        </p>
        <p className="mt-5">
          You can use the <PastableSpan text="b2bExpressCheckout" /> function
          to make that call. It takes an arguement of type{" "}
          <PastableSpan text="B2BExpressCheckoutBody" /> and returns an
          awaitable promise of type <i>unknown</i>. I have not used this api
          extensively but i am working on finding out how it works in depth and
          update the return typings correctly.
        </p>
      </section>
    );
  };