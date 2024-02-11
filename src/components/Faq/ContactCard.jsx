import React from "react";

export default function ContactCard({ imgSrc, title, btnText }) {
  return (
    <div className="bg-[#F9F9FB] rounded-2xl p-6 flex justify-between items-start  lg:gap-[60px] gap-8">
      <div className="font-semibold">
        {title}
        <button className="mt-5 bg-black text-white lg:px-4 lg:py-[14px] p-3 text-sm lg:text-md rounded-xl">
          {btnText}
        </button>
      </div>
      <img src={imgSrc} className=" w-5/12 lg:w-2/6" />
    </div>
  );
}
