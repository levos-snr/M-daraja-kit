//imported packages
import React from "react";

//loacally imported
import { ApiTitle } from "./ApiTitle";
import { PastableSpan } from "./PastableSpan";


export const B2CPaymentRequest = () => {
    return (
      <section className="text-myGray">
        <ApiTitle text="B2CPaymentRequest" />
        <p className="mt-5">
          B2C API is an API used to make payments from a Business to Customers
          (Pay Outs), also known as Bulk Disbursements. B2C API is used in several
          scenarios by businesses that require to either make Salary Payments,
          Cashback payments, Promotional Payments(e.g. betting winning payouts),
          winnings, financial institutions withdrawal of funds, loan
          disbursements, etc. You can read the official docs{" "}
          <a
            href="https://developer.safaricom.co.ke/APIs/BusinessToCustomer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline"
          >
            here.
          </a>
        </p>
        <p className="mt-5">
          You can use the <PastableSpan text="b2cPaymentRequest" /> function
          to make that call. It takes a <PastableSpan text="B2CRequestBody" />{" "}
          and returns a Promise of type{" "}
          <PastableSpan text="B2CRequestResponse" />.
        </p>
      </section>
    );
  };