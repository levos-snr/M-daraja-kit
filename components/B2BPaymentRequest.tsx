//imported packages
import React from "react";

//locally imported
import { ApiTitle } from "./ApiTitle";
import { PastableSpan } from "./PastableSpan";

export const B2BPaymentRequest = () => {
    return (
      <section className="text-myGray">
        <ApiTitle text="B2BPayment Request" />
        <p className="mt-5">
          This API enables you to pay bills directly from your business account to
          a pay bill number, or a paybill store. You can use this API to pay on
          behalf of a consumer/requester.
        </p>
        <p className="mt-5">
          You can use the <PastableSpan text="b2bPaymentRequest" /> function
          to make that call. It takes an arguement of type{" "}
          <PastableSpan text="BusinessRequestBody" /> and returns an awaitable
          promise of type <PastableSpan text="BusinessRequestResponse" />.
        </p>
      </section>
    );
  };