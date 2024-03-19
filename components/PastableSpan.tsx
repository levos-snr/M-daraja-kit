"use client";

import React from "react";

export const PastableSpan = ({ text }: { text: string }) => {
  return (
    <span
      className="bg-gray-100 text-sm font-semibold px-2 text-brightGreen rounded-md mr-2 ml-1"
      onClick={() => navigator.clipboard.writeText(text)}
    >
      {text}
    </span>
  );
};