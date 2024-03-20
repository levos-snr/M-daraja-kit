//imported packages
import React from "react";

//locally imported
import { ApiTitle } from "./ApiTitle";
import { PastableSpan } from "./PastableSpan";

export const OnlinePayment = () => {
    return (
      <section className="text-myGray">
        <ApiTitle text="State Of A Lipa Na Mpesa Online Payment" />
        <p className="mt-5">
          You can use the <PastableSpan text="getStateOfALNMOnlinePayment" />{" "}
          to get the state of a lipa na mpesa online payment. You can use the
          types <PastableSpan text="StateOfALNMOnlinePaymentParam" /> and{" "}
          <PastableSpan text="StateOfALNMOnlinePaymentResponse" /> to handle
          the response.
        </p>
        {/* <p className="mt-5">
          You can read the official docs{" "}
          <a href="http://" target="_blank" rel="noopener noreferrer">
            here.
          </a>{" "}
        </p> */}
      </section>
    );
  };