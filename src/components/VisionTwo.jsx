import React from "react";
import moon from "../assets/Moon.svg";
import check from "../assets/Vector.svg";

const VisionTwo = () => {
  return (
    <section className=" bg-black">
      <div className="grid md:grid-cols-2 container mx-auto px-6 py-20 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-[58px] text-white adamina">
            Moon watch view with NASA
          </h1>
          <p className="text-[18px] text-[var(--p-color)] mb-3">
            Under the gaze of the Moon, we partnered with NASA to bring space
            closer than ever — a night of discovery, wonder, and breakthrough
            moments.
          </p>
          <div className="text-white mb-3">
            <div className="flex gap-1 items-center mb-2">
              <img src={check} alt="" className="w-[20px] h-[20px]" />
              <p className="text-[18px]">Educational Outreach</p>
            </div>
            <div className="flex gap-1 items-center mb-2">
              <img src={check} alt="" className="w-[20px] h-[20px]" />
              <p className="text-[18px]">Data Collaboration</p>
            </div>
            <div className="flex gap-1 items-center mb-2">
              <img src={check} alt="" className="w-[20px] h-[20px]" />
              <p className="text-[18px]">Real-Time Public Engagement</p>
            </div>
          </div>
        </div>
        <div className="">
          <img
            src={moon}
            alt="ship"
            className="rounded-[30px] border border-solid border-[var(--visionborder)]"
          />
        </div>
      </div>
    </section>
  );
};

export default VisionTwo;
