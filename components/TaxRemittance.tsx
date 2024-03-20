//imported packages
import React from "react";
//locally imported
import { ApiTitle } from "./ApiTitle";
import { PastableSpan } from "./PastableSpan";

export const TaxRemittance = () => {
  return (
    <section className="text-myGray">
      <ApiTitle text="Tax Remittance" />
      <p className="mt-5">
        This API enables businesses to remit tax to Kenya Revenue Authority
        (KRA). To use this API, prior integration is required with KRA for tax
        declaration, payment registration number (PRN) generation, and exchange
        of other tax-related information. You can read the official docs{" "}
        <a
          href="https://developer.safaricom.co.ke/APIs/TaxRemittance"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-underline"
        >
          here.
        </a>
      </p>
      <p className="mt-5">
        You can use the <PastableSpan text="remitTax" /> function to make
        the api call. It takes in an arguement of type{" "}
        <PastableSpan text="TaxRemittanceBody" /> and returns an awaitable
        promise of type <PastableSpan text="TaxRemittanceResponse" />
      </p>
    </section>
  );
};