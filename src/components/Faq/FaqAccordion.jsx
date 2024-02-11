import React from "react";

const FaqAccordion = ({
  question,
  children,
  index,
  openIndex,
  setOpenIndex,
  disabled,
}) => {
  const isOpen = index === openIndex;

  const toggleAccordion = () => {
    setOpenIndex(isOpen ? null : index);
  };

  return (
    <div className={`border  text-[#8B8D98] py-6 px-7 rounded-2xl my-5 first:mt-0`}>
      <div
        className="flex justify-start gap-6 items-start cursor-pointer"
        onClick={toggleAccordion}
      >
        <img
          src="/assets/others/plusVector.png"
          className={`transform duration-100 size-3.5 lg:size-5 mt-1 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        />
        <div className="duration-100">
          <h3 className="text-sm lg:text-lg text-black font-semibold">{question}</h3>
          {isOpen && children}
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
