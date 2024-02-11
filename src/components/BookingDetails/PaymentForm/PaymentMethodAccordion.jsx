import React, { useState } from "react";

const PaymentMethodAccordion = ({
  title,
  children,
  index,
  openIndex,
  setOpenIndex,
  disabled,
}) => {
  const isOpen = index === openIndex;

  const toggleAccordion = () => {
    if (isOpen || disabled) {
      // Prevent closing the open accordion or toggling the disabled accordion
      return;
    }
    setOpenIndex(index);
  };

  return (
    <div
      className={`border ${
        disabled
          ? "border-gray-300 bg-[#F9F9FB] text-[#8B8D98]"
          : "border-black"
      } lg:p-6 p-4 rounded-2xl my-5 `}
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <div>{title}</div>
        <div>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                fill="#1C2024"
                d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12c0 6.628-5.373 12-12 12S0 18.628 0 12z"
              ></path>
              <circle cx="12" cy="12" r="4" fill="#FCFCFD"></circle>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                fill="#E4E4E9"
                d="M.5 12C.5 5.65 5.649.5 12 .5S23.5 5.65 23.5 12c0 6.352-5.149 11.5-11.5 11.5S.5 18.352.5 12z"
              ></path>
              <path
                stroke="#D3D4DB"
                d="M.5 12C.5 5.65 5.649.5 12 .5S23.5 5.65 23.5 12c0 6.352-5.149 11.5-11.5 11.5S.5 18.352.5 12z"
              ></path>
            </svg>
          )}
        </div>
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default PaymentMethodAccordion;
