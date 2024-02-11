import React, { useState } from "react";
import ContactCard from "../components/Faq/ContactCard";
import FaqAccordion from "../components/Faq/FaqAccordion";

const qAndA = [
  {
    question: "What should I do on my first trip to Rome?",
    answer:
      "Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.",
  },
  {
    question: "What are some hidden gems to see in Rome?",
    answer:
      "Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.",
  },
  {
    question: "How much time should I spend in Rome?",
    answer:
      "Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.",
  },
  {
    question: "What food is Rome known for?",
    answer:
      "Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.",
  },
  {
    question: "What is the best way to get around Rome?",
    answer:
      "Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <div className="container mx-auto px-4  ">
      <div className=" my-20 grid h-fit lg:grid-flow-col  grid-rows-1 grid-cols-1 lg:grid-cols-12 ">
        <div className="lg:col-span-5">
          <div className="mb-12  h-fit   ">
            <h2 className="mb-4 font-semibold text-2xl">
              Frequently asked questions
            </h2>
            <p className="text-[#60646C] text-md">
              Here are some of our most asked questions.
            </p>
          </div>
          <div className="hidden lg:block mb-5  ">
            <ContactCard
              imgSrc="/assets/others/illustration.png"
              className=""
              title={
                <h3 className="text-sm lg:text-lg">
                  Still need help?
                  <br />
                  We&apos;re here for you.
                </h3>
              }
              btnText="Chat with us"
            />
          </div>
        </div>
        <div className="lg:col-span-7 lg:ms-16 lg:row-span-2">
          {qAndA.map((val, i) => (
            <FaqAccordion
              key={i}
              question={val.question}
              index={i}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            >
              <p className="text-sm lg:text-base mt-5 mb-6 font-normal text-[#60646C]">
                {val.answer}
              </p>
            </FaqAccordion>
          ))}
        </div>
        <div className="lg:hidden lg:col-span-5 mb-5 row-auto ">
          <ContactCard
            imgSrc="/assets/others/illustration.png"
            className=""
            title={
              <h3 className="text-sm lg:text-lg">
                Still need help?
                <br />
                We&apos;re here for you.
              </h3>
            }
            btnText="Chat with us"
          />
        </div>
        <hr className="lg:col-span-12" />
      </div>
    </div>
  );
}
