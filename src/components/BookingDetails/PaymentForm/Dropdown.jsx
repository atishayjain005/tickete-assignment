import React, { useEffect, useState, useRef } from "react";
import Select from "react-select";

export default function Dropdown({
  options,
  placeholder,
  icon,
  colSpan,
  isMulti,
}) {
  return (
    <div className={`${colSpan} flex items-center border p-2 rounded-2xl `}>
      {icon}
      <Select
        placeholder={
          <span className="text-[#60646C]">
            {placeholder}&nbsp;<span className="text-red-500">*</span>
          </span>
        }
        isMulti={isMulti ? isMulti : false}
        className="w-full"
        components={{ IndicatorSeparator: () => null }}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            border: 0,
            boxShadow: "none",
            width: "100%",
          }),
        }}
        options={options}
      />
    </div>
  );
}
