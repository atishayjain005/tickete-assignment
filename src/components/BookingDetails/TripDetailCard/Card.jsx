import React from "react";
import Carousel from "./Carousel";

export default function Card() {
  return (
    <div className=" border rounded-3xl lg:row-span-2 h-fit order-2 lg:order-3">
      <div className=" p-4">
        <Carousel />
        <p className="text-sm flex items-center gap-1 text-[#60646C] mt-4">
          <img src="/assets/others/rating_star.png" />
          <span className="font-semibold text-black">4.9</span>(4.5K)
          <span className="text-[4px]">{"\u2B24"}</span>
          {"<category>"}
        </p>
        <p className="mt-[2px] font-semibold text-md">
          Amsterdam open boat canal cruise - Live Guiye - from Anne Frank Housef
        </p>
        <div className="mt-3 pt-3 pb-5 text-sm flex flex-col gap-4 border-b border-dashed">
          <p className="flex font-semibold items-start gap-2">
            <img src="/assets/others/ticket.png" />
            {"<ticket type - variant>"}
          </p>
          <p className="flex font-semibold items-start gap-2">
            <img src="/assets/others/calender.png" />
            <span className="flex flex-col gap-2">
              {"<day>, <month> <date>"}
              <br />
              <span className="text-xs text-[#60646C] font-normal">
                Duration: duration
              </span>
            </span>
          </p>
          <p className="font-semibold flex items-start gap-2">
            <img src="/assets/others/clock.png" />
            <span className="flex flex-col gap-2">
              {"<time>"}
              <span className="text-xs text-[#60646C] font-normal ">
                {"Operating hours: <time> to <time>"}
              </span>
            </span>
          </p>
          <p className="font-semibold flex items-start gap-2">
            <img src="/assets/others/guest.png" />5 guests
          </p>
        </div>
        <a
          href="#"
          className="pt-4 pb-1  flex items-center justify-between text-sm text-[#60646C] underline font-semibold"
        >
          View payment summary
          <img src="/assets/others/plus.png" />
        </a>
      </div>
      <hr />
      <div className="p-4">
        <h3 className="text-lg flex justify-between items-center font-semibold">
          Total Payable: <span>$XXX</span>
        </h3>
        <p className="my-2 w-fit bg-[#E9F9EE] text-xs flex gap-1 rounded-full items-center text-[#299764] font-semibold px-2 py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="none"
          >
            <path
              fill="#299764"
              d="M12.36 4.817a4.808 4.808 0 00-1.718-2.188h1.17a.438.438 0 000-.874H6.125a4.82 4.82 0 00-4.797 4.43A1.75 1.75 0 000 7.874a.438.438 0 00.875 0 .875.875 0 01.469-.774 4.796 4.796 0 001.172 2.646l.687 1.922a.875.875 0 00.824.581h.696a.874.874 0 00.824-.58l.105-.295h3.134l.105.294a.875.875 0 00.824.581h.695a.874.874 0 00.825-.58l.886-2.482h.129a1.313 1.313 0 001.313-1.313v-1.75a1.313 1.313 0 00-1.204-1.308zm-4.047-.88H6.124a.438.438 0 010-.874h2.188a.437.437 0 110 .875zM9.842 7a.656.656 0 110-1.312.656.656 0 010 1.312z"
            ></path>
          </svg>
          you save {"<price>"}
        </p>
        <a
          href="#"
          className="text-xs text-[#60646C] font-semibold gap-2 mb-3 mt-5 flex items-center"
        >
          <span className="underline">You wil be charged in AED</span>&nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 25 25"
            strokeWidth={1}
            stroke="#60646C"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
        </a>
        <div className="hidden lg:block mt-8">
          <p className="text-xs text-[#60646C]">
            By clicking “confirm & pay”, you agree to{" "}
            <a href="#" className="text-[#3A5CCC] underline">
              Tickete’s general terms and conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#3A5CCC] underline">
              cancellation policy.
            </a>
          </p>
          <button className="bg-black text-white text-lg font-semibold flex items-center justify-center gap-2 py-4 px-6 rounded-2xl mt-5 mb-4 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="22"
              fill="none"
            >
              <path
                fill="#EDEEF0"
                d="M18.375 6.875h-2.75V4.813a4.125 4.125 0 00-8.25 0v2.062h-2.75A1.375 1.375 0 003.25 8.25v9.625a1.375 1.375 0 001.375 1.375h13.75a1.375 1.375 0 001.375-1.375V8.25a1.375 1.375 0 00-1.375-1.375zM11.5 14.094a1.031 1.031 0 110-2.062 1.031 1.031 0 010 2.062zm2.75-7.219h-5.5V4.813a2.75 2.75 0 015.5 0v2.062z"
              ></path>
            </svg>
            Confirm & pay
          </button>
        </div>
      </div>
    </div>
  );
}
