import React from 'react'
import spaceship from '../assets/ship.svg'
import check from "../assets/Vector.svg";

const VisionOne = () => {
  return (
    <section className=" bg-black">
      <div className="grid md:grid-cols-2 container mx-auto px-6 py-20 gap-10 items-center">
        <div className="">
          <img
            src={spaceship}
            alt="ship"
            className="rounded-[30px] border-[var(--visionborder)] border border-solid"
          />
        </div>
        <div className="">
          <h1 className="text-3xl md:text-[58px] text-white adamina mb-3">
            K2-11 Satellite Launch
          </h1>
          <p className="text-[18px] text-[var(--p-color)] mb-3">
            Lifting the future: K2-11 has launched — unlocking new frontiers in
            space communication and earth observation.
          </p>
          <div className="text-white">
            <div className="flex gap-1 items-center mb-2">
              <img src={check} alt="" className="w-[20px] h-[20px]" />
              <p className="text-[18px]">
                Over 100,000 viewers participated live
              </p>
            </div>
            <div className="flex gap-1 items-center mb-2 ">
              <img src={check} alt="" className="w-[20px] h-[20px]" />
              <p className="text-[18px]">Led by Liz.co & NASA scientists.</p>
            </div>
            <div className="flex gap-1 items-center mb-2">
              <img src={check} alt="" className="w-[20px] h-[20px]" />
              <p className="text-[18px]">
                Lunar surface data for joint research on future missions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionOne