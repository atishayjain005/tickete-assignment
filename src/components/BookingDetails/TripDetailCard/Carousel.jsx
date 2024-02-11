import React from "react";
import { Carousel } from "react-responsive-carousel";

const gallery = [
  {
    legend: "Bestseller",
    img: "/assets/gallery/pic_1.jpeg",
  },
  {
    legend: "Bestseller",
    img: "/assets/gallery/pic_2.jpeg",
  },
  {
    legend: "Bestseller",
    img: "/assets/gallery/pic_3.jpeg",
  },
  {
    legend: "Bestseller",
    img: "/assets/gallery/pic_4.jpeg",
  },
  {
    legend: "Bestseller",
    img: "/assets/gallery/pic_5.jpeg",
  },
];
export default function CarouselComp() {
  const handleNav = (clickHandler, icon) => {
    return (
      <div
        className={`absolute top-0 bottom-0 ${
          icon == "left" ? "left-0" : "right-0"
        } flex justify-center items-center p-3 hover:opacity-85 cursor-pointer z-20`}
        onClick={clickHandler}
      >
        <div className="w-9 h-9 flex justify-center items-center bg-white p-2 text-black rounded-full ">
          {icon == "left" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
            >
              <path
                fill="#60646C"
                d="M10.53 12.47a.752.752 0 01-1.062 1.062l-5-5a.75.75 0 010-1.063l5-5a.751.751 0 011.063 1.063L6.063 8l4.468 4.47z"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
            >
              <path
                fill="#60646C"
                d="M11.53 8.53l-5 5a.751.751 0 01-1.062-1.062L9.938 8l-4.47-4.47a.751.751 0 111.063-1.062l5 5a.748.748 0 01-.001 1.063z"
              ></path>
            </svg>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="relative">
      <p className="absolute flex items-center gap-1 px-2 py-1 top-4 h-fit left-4 w-fit bg-white text-black font-semibold text-xs rounded-[4px] z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="none"
        >
          <path
            fill="#1C2024"
            d="M12.688 3.5h-1.313v-.438a.875.875 0 00-.875-.874h-7a.875.875 0 00-.875.874V3.5H1.312a.875.875 0 00-.875.875v.875a2.188 2.188 0 002.188 2.188h.2a4.382 4.382 0 003.737 3.04v1.335H5.25a.438.438 0 000 .874h3.5a.438.438 0 000-.874H7.437v-1.336c1.747-.177 3.196-1.402 3.724-3.04h.214a2.187 2.187 0 002.188-2.187v-.875a.875.875 0 00-.876-.875zM2.624 6.563A1.313 1.313 0 011.312 5.25v-.875h1.313v1.75c0 .146.007.292.021.438h-.021zM12.688 5.25a1.313 1.313 0 01-1.313 1.313h-.027c.018-.162.027-.325.027-.487V4.375h1.313v.875z"
          ></path>
        </svg>
        Bestseller
      </p>
      <Carousel
        selectedItem={ 2}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        renderArrowPrev={(clickHandler) => handleNav(clickHandler, "left")}
        renderArrowNext={(clickHandler) => handleNav(clickHandler, "right")}
      >
        {gallery.map((image, i) => (
          <div key={i} className="rounded-3 relative ">
            <img src={image.img} className="max-h-52" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
