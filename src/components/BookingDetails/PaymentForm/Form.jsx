import React, { useState } from "react";
import Header from "../Header";
import Badge from "./Badge";
import InputField from "./InputField";
import Dropdown from "./Dropdown";
import Accordion from "./PaymentMethodAccordion";

const countryCodes = [
  { value: "us", label: "US" },
  { value: "india", label: "India" },
  { value: "australia", label: "Australia" },
];
export default function Form() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <Badge justify="between">
        <div>
          <p className="font-semibold">Free cancellation</p>
          <p className="text-[#60646C] mt-1">
            Tickets can be cancelled by 13th December, 2023
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#7E808A"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
            clipRule="evenodd"
          />
        </svg>
      </Badge>
      <div className="mt-16 mb-8">
        <h3 className="mb-4 text-2xl font-semibold">Enter your details</h3>
        <p className="pb-4 text-[#60646C]">
          We&apos;ll be sending tickets to the details below, Booking for a
          friend? Add their details.
        </p>
        <div className="my-8 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-4">
          <InputField
            placeholder="Full name"
            colSpan="lg:col-span-2"
            type="text"
            name="full-name"
          />
          <Dropdown
            options={countryCodes}
            placeholder="Country code"
            icon={
              <span className="ps-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#60646C"
                  className="w-5 h-5"
                >
                  <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            }
          />
          <InputField
            placeholder="Phone number"
            type="number"
            name="phone-number"
          />
          <InputField placeholder="Email" type="email" name="email" />
          <InputField
            placeholder="Confirm email"
            type="email"
            name="confirm-email"
          />
        </div>
      </div>
      <hr />
      <div className="mt-16 mb-8">
        <h3 className="mb-4 text-2xl font-semibold">Additional information</h3>
        <p className="pb-4 text-[#60646C]">
          We need a few more details to complete your reservation.
        </p>
        <div className="my-8 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-4">
          <InputField placeholder="Input label" type="text" name="full-name" />
          <Dropdown options={countryCodes} placeholder="Select" />
          <Dropdown
            colSpan="lg:col-span-2"
            options={countryCodes}
            isMulti={true}
            placeholder="Multiselect"
          />
        </div>
      </div>
      <hr />
      <div className="mt-16 mb-8">
        <h3 className="mb-4 text-2xl font-semibold">
          Select your mode of payment
        </h3>
        <p className="pb-4 mb-8 text-[#60646C]">
          Payments with Tickete are secure and encrypted.
        </p>
        <Accordion
          title={
            <p className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 35 20"
                style={{ width: "35px", height: "20px" }}
              >
                <rect width="35" height="20" fill="#fff" rx="3.75"></rect>
                <path
                  fill="#60646C"
                  d="M25 3.75H10A1.25 1.25 0 008.75 5v10A1.25 1.25 0 0010 16.25h15A1.25 1.25 0 0026.25 15V5A1.25 1.25 0 0025 3.75zM25 5v1.875H10V5h15zm0 10H10V8.125h15V15zm-1.25-1.875a.625.625 0 01-.625.625h-2.5a.625.625 0 110-1.25h2.5a.625.625 0 01.625.625zm-5 0a.625.625 0 01-.625.625h-1.25a.625.625 0 110-1.25h1.25a.625.625 0 01.625.625z"
                ></path>
                <rect
                  width="34.375"
                  height="19.375"
                  x="0.313"
                  y="0.313"
                  stroke="#DDDDE3"
                  rx="3.438"
                ></rect>
              </svg>
              Credit & debit card
            </p>
          }
          index={0}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
        >
          <p className="flex my-8 gap-2">
            <img src="/assets/cards/visa.png" />
            <img src="/assets/cards/mastercard.png" />
            <img src="/assets/cards/diners-club.png" />
          </p>
          <div className="my-8 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-4">
            <InputField
              placeholder="Name on card"
              type="text"
              name="full-name"
            />
            <InputField
              placeholder="Card number"
              type="number"
              name="card-number"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="20"
                  fill="none"
                >
                  <g clipPath="url(#a)">
                    <rect width="35" height="20" fill="#fff" rx="3.75"></rect>
                    <path
                      fill="#60646C"
                      d="M25 3.75H10A1.25 1.25 0 008.75 5v10A1.25 1.25 0 0010 16.25h15A1.25 1.25 0 0026.25 15V5A1.25 1.25 0 0025 3.75zM25 5v1.875H10V5h15zm0 10H10V8.125h15V15zm-1.25-1.875a.625.625 0 01-.625.625h-2.5a.625.625 0 110-1.25h2.5a.625.625 0 01.625.625zm-5 0a.625.625 0 01-.625.625h-1.25a.625.625 0 110-1.25h1.25a.625.625 0 01.625.625z"
                    ></path>
                  </g>
                  <rect
                    width="34.375"
                    height="19.375"
                    x="0.313"
                    y="0.313"
                    stroke="#DDDDE3"
                    strokeWidth="0.625"
                    rx="3.438"
                  ></rect>
                  <defs>
                    <clipPath id="a">
                      <rect width="35" height="20" fill="#fff" rx="3.75"></rect>
                    </clipPath>
                  </defs>
                </svg>
              }
            />
            <InputField
              placeholder="Expiry date"
              type="number"
              name="expiry-date"
            />
            <InputField placeholder="<CVV/CVC>" type="number" name="cvv-cvc" />
          </div>
          <hr />
          <div>
            <div className="flex flex-col-reverse gap-[10px] lg:gap-0 lg:flex-row my-4 justify-between items-start">
              <h5 className="text-lg font-semibold">Total payable: $XXX</h5>
              <p className="bg-[#299764] text-xs flex gap-1 rounded-full items-center text-white font-semibold px-2 py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="none"
                >
                  <path
                    fill="#E9F9EE"
                    d="M12.36 4.817a4.808 4.808 0 00-1.718-2.188h1.17a.438.438 0 000-.874H6.125a4.82 4.82 0 00-4.797 4.43A1.75 1.75 0 000 7.874a.438.438 0 00.875 0 .875.875 0 01.469-.774 4.796 4.796 0 001.172 2.646l.687 1.922a.875.875 0 00.824.581h.696a.874.874 0 00.824-.58l.105-.295h3.134l.105.294a.875.875 0 00.824.581h.695a.874.874 0 00.825-.58l.886-2.482h.129a1.313 1.313 0 001.313-1.313v-1.75a1.313 1.313 0 00-1.204-1.308zm-4.047-.88H6.124a.438.438 0 010-.874h2.188a.437.437 0 110 .875zM9.842 7a.656.656 0 110-1.312.656.656 0 010 1.312z"
                  ></path>
                </svg>
                you save {"<price>"}
              </p>
            </div>
            <a
              href="#"
              className="text-xs text-[#60646C] font-semibold gap-2 flex items-center"
            >
              You wil be charged in AED&nbsp;
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
            <div className="mt-8">
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
              <button className="bg-black text-white text-lg font-semibold flex w-full lg:w-fit justify-center items-center gap-2 py-4 px-6 rounded-2xl mt-8 mb-2">
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
        </Accordion>
        <Accordion
          title={
            <p className="flex items-center gap-[15px] font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="20"
                fill="none"
              >
                <rect width="35" height="20" fill="#E4E4E9" rx="6"></rect>
                <path
                  fill="#8B8D98"
                  fillRule="evenodd"
                  d="M9.568 6.38c-.293.36-.762.646-1.23.605-.06-.489.17-1.008.439-1.328.293-.372.806-.636 1.22-.657.05.51-.14 1.008-.429 1.38zm.425.701c-.413-.024-.79.13-1.094.254-.196.08-.362.148-.488.148-.142 0-.315-.071-.509-.151-.254-.105-.544-.226-.849-.22-.698.01-1.348.422-1.704 1.079-.733 1.313-.19 3.256.517 4.325.347.53.762 1.11 1.31 1.09.24-.01.413-.087.592-.166.206-.091.42-.186.755-.186.323 0 .528.092.724.18.187.085.367.166.634.161.566-.01.922-.53 1.27-1.059a4.74 4.74 0 00.563-1.206l.003-.01-.014-.006c-.125-.06-1.08-.516-1.09-1.74-.01-1.026.758-1.546.88-1.628a.405.405 0 00.014-.01c-.489-.753-1.25-.834-1.514-.855zm3.921 6.458V5.606h2.857c1.475 0 2.505 1.058 2.505 2.605s-1.05 2.616-2.544 2.616h-1.636v2.712h-1.182zm1.182-6.895h1.362c1.026 0 1.612.57 1.612 1.572 0 1.003-.586 1.578-1.617 1.578h-1.357v-3.15zm8.082 5.943c-.313.621-1.001 1.013-1.744 1.013-1.098 0-1.865-.682-1.865-1.71 0-1.018.742-1.603 2.115-1.69l1.474-.09v-.438c0-.647-.405-.998-1.128-.998-.596 0-1.03.32-1.118.81h-1.064c.034-1.029.962-1.777 2.216-1.777 1.353 0 2.232.738 2.232 1.883v3.949h-1.094v-.952h-.024zm-1.426.072c-.63 0-1.03-.316-1.03-.8 0-.498.385-.788 1.123-.834l1.313-.086v.447c0 .743-.605 1.273-1.406 1.273zm6.173 1.19c-.474 1.39-1.016 1.848-2.169 1.848-.088 0-.38-.01-.449-.031v-.952c.073.01.254.02.347.02.522 0 .815-.228.996-.823l.107-.352-2.002-5.775h1.236l1.392 4.686h.024l1.392-4.686H30l-2.075 6.065z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Coming soon
            </p>
          }
          index={1}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
          disabled={true}
        ></Accordion>
        <Accordion
          title={
            <p className="flex items-center gap-[15px] font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="20"
                fill="none"
              >
                <rect width="35" height="20" fill="#E4E4E9" rx="6"></rect>
                <path
                  fill="#8B8D98"
                  d="M10.84 7.338a2.253 2.253 0 00-1.618-.643c-1.102 0-2.034.756-2.368 1.772h-.002a2.619 2.619 0 00.002 1.636c.334 1.01 1.266 1.766 2.368 1.766.568 0 1.055-.149 1.436-.41.445-.298.75-.773.844-1.303h-2.28V8.51h3.98c.046.286.07.577.07.868 0 1.309-.457 2.409-1.254 3.152-.698.654-1.659 1.035-2.796 1.035a4.21 4.21 0 01-3.77-2.355v-.006a4.3 4.3 0 010-3.842 4.215 4.215 0 013.77-2.36 4.042 4.042 0 012.825 1.112L10.84 7.338z"
                ></path>
                <path
                  fill="#8B8D98"
                  fillRule="evenodd"
                  d="M16.53 13.052v-3.02h1.56c.638 0 1.177-.215 1.617-.637l.105-.107a2.175 2.175 0 00-.105-3.045 2.225 2.225 0 00-1.618-.648h-2.503v7.457h.944zm0-3.936V6.51h1.583c.34 0 .662.13.903.369.51.5.522 1.332.029 1.849-.24.256-.58.398-.932.387H16.53zm7.685-.768c-.405-.374-.956-.564-1.653-.564-.897 0-1.571.333-2.017.993l.833.529c.304-.452.72-.678 1.248-.678.334 0 .657.125.909.35.246.215.387.524.387.851v.22c-.364-.202-.821-.309-1.384-.309-.656 0-1.184.155-1.577.47-.392.315-.592.731-.592 1.26-.011.482.194.94.557 1.25.37.332.839.499 1.39.499.65 0 1.166-.291 1.559-.874h.04v.707h.903V9.907c0-.66-.199-1.184-.603-1.559zm-2.562 3.765a.775.775 0 01-.31-.625c0-.28.129-.511.38-.695.259-.185.581-.28.962-.28.528-.006.938.113 1.231.351 0 .404-.158.755-.469 1.052a1.489 1.489 0 01-1.06.447 1.142 1.142 0 01-.734-.25z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#8B8D98"
                  d="M30 7.95l-3.154 7.344h-.973l1.173-2.569-2.07-4.775h1.026l1.495 3.663h.018l1.46-3.663H30z"
                ></path>
              </svg>
              Coming soon
            </p>
          }
          index={2}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
          disabled={true}
        ></Accordion>
        <hr className="mt-8" />
        <div className="mt-16 mb-8">
          <p className="my-2 w-fit lg:hidden border border-[#B4DFC4] bg-[#E9F9EE] text-xs flex gap-1 rounded-full items-center text-[#299764] font-semibold px-2 py-1">
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
          <h3 className="mb-4 text-2xl font-semibold">Total Payable: $XXX</h3>
          <Badge>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="font-semibold">You will be charged in AED</p>
              <p className="text-[#60646C] mt-1">
                The price shown here is in US Dollar (USD) as per the current
                conversion rate. You will be charged in United Arab Emirates
                Dirham (AED).
              </p>
            </div>
          </Badge>
        </div>
      </div>
    </>
  );
}
