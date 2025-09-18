import React from "react";
import astronaut from "../images/astronaut.png";
import peers from "../images/peers.png";
import Arrow from "../images/Arrow.png";

const Hero = () => {
  return (
    <section className=" flex items-center  bg-(--bg-color) text-(--text-color)">
      <div className="container mx-auto px-6 py-20 flex justify-between">
        <div className="mt-15 max-w-[610px] justify-center items-center">
          <div className="flex w-[283.68px] px-[6px] py-[3px] gap-3">
            <div>
              <img src={peers} alt="peers" className="w-[75.68px] h-[25px]" />
            </div>
            <div>
              <p className="font-[400] text-[14px] tracking-[1%]">
                Join over 34k happy clients
              </p>
            </div>
          </div>

          <div>
            <h1 className="adamina text-[40px] md:text-[50px] lg:text-[80px] font-[400]">
              Beyond Space <br /> Beyond Limit.
            </h1>
          </div>

          <div>
            <p className="text-(--p-color) text-[18px] font-[400]">
              We innovate at the forefront of technology, <br /> crafting
              solutions that shape the future.
            </p>
          </div>

          <button className="cursor-pointer mt-10 flex gap-2 items-center  justify-centerw-[183px] h-[50px] rounded-[20px] px-[19px] py-[10px] bg-(--button-color) text-[18px] font-[400] text-(--button-text)">
            Get started
            <img
              src={Arrow}
              alt="arrow"
              className="shadow-[#5D5D5D] shadow-md bg-[black] bo rder-[1px] border-(--border-color2) h-[33px] w-[33px] rounded-[14px] p-2"
            />
          </button>
        </div>
        <div className=" hidden md:flex justify-center">
          <img
            src={astronaut}
            alt="astronaut"
            className="w-[40px] md:w-[610px] "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
