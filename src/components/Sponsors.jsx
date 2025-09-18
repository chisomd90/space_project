import React from "react";
import c1 from "../assets/c1.svg";
import c2 from "../assets/c2.svg";
import c3 from "../assets/c3.svg";
import c4 from "../assets/c4.svg";
import c5 from "../assets/c5.svg";

const Sponsors = () => {
  const sponpors = [
    c1,
    c2,
    c3,
    c4,
    c5,
    c4,
    c5,
    c5,
    c1,
    c5,
    c4,
    c5,
    c5,
    c1,
    c5,
    c4,
    c5,
    c5,
    c1,
  ];
  return (
    <section className="bg-black py-8">
      <div className="my-10 flex justify-between gap-2 overflow-x-scroll">
        {sponpors.map((image, index) => {
          return (
            <img
              src={image}
              key={index}
              alt="sponsors"
              className=" border-1 border-[#4B4B4B] rounded-[20px]"
            />
          );
        })}
      </div>
    </section>
  );
};

export default Sponsors;
