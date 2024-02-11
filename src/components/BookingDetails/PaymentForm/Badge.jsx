import React from "react";

export default function Badge({ children, justify }) {
  return (
    <div
      className={` flex gap-3 justify-${justify} items-start text-sm border py-4 px-5 my-6 lg:my-4 rounded-2xl bg-[#FCFCFD] border-[#D3D4DB]`}
    >
      {children}
    </div>
  );
}
