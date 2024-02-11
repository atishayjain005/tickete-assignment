import React, { useRef, useState, useEffect } from "react";

export default function InputField({
  type,
  className,
  placeholder,
  name,
  id,
  colSpan,
  icon,
}) {
  const [isActive, setIsActive] = useState(true);
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current && isActive) {
      console.log(inputRef.current.value.length);
    }
  }, [isActive]);

  return (
    <div
      className={`relative ${colSpan}`}
      // onClick={() => setIsActive(false)}
    >
      {isActive &&
        (!inputRef.current || inputRef.current.value.length === 0) && (
          <label
            htmlFor={name}
            className=" text-[#60646C] absolute inset-4 flex items-center "
            style={{ zIndex: "-1" }}
          >
            {icon && <span className="me-[10px]">{icon}</span>}
            {placeholder}&nbsp;
            <span className="text-red-500">*</span>
          </label>
        )}
      <input
        type={type}
        ref={inputRef}
        placeholder=""
        className={`${className} border border-1 w-full rounded-2xl p-4 bg-transparent focus-visible:outline-none `}
        name={name}
        id={id}
        onFocus={() => setIsActive(false)}
        onBlur={() => setIsActive(true)}
      />
    </div>
  );
}
