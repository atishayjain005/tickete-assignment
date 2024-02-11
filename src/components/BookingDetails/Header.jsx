import React from "react";

export default function Header({ className }) {
  return (
    <h1
      className={`${className} text-[32px] lg:text-[57px] font-medium pb-6 lg:pb-11 `}
      style={{ fontFamily: "Roboto Serif, serif" }}
    >
      Confirm & Pay
    </h1>
  );
}
