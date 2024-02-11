import React from "react";
import SubNav from "./SubNav";

export default function Navbar() {
  return (
    <>
      <div className="bg-[#F9F9FB]">
        <div className="container mx-auto flex justify-between items-center py-5 px-4 ">
          <img src="/assets/Logo1x.png" alt="Logo" className="h-full hidden lg:block" />
          <img src="/assets/others/ArrowLeft.png" className="lg:hidden px-3 py-2" />
          <a href="#" className="flex items-center text-[#60646C] gap-1 font-semibold ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 26 26"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                clipRule="evenodd"
              />
            </svg>
            Checkout
          </a>
          <span className="flex items-center gap-1 px-3 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
            <span className="hidden lg:block">Help</span>
          </span>
        </div>
      </div>
      <SubNav mins={30}/>
    </>
  );
}
