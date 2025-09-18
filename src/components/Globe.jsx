import React from 'react'
import group from '../assets/Group.svg'
import australia from '../assets/Australia.svg'
import brazil from '../assets/Brazil.svg'
import china from '../assets/China.svg'
import naija from '../assets/Nigeria.svg'
import usa from '../assets/Usa.svg'
import sa from '../assets/SA.svg'
import england from '../assets/England.svg'
import russia from '../assets/Russia.svg'

const Globe = () => {
  return (
    <section className=" bg-black">
      <div className="justify-center items-center flex-col flex container mx-auto px-6 py-20">
        <h1 className="text-white text-center text-[58px] adamina mb-5">
          Creating global impact
        </h1>
        <div className="max-w-[1065px] relative w-full mx-auto h-auto">
          <img src={group} alt="" className="w-full h-auto" />
          <div className="">
            <div className="absolute top-[70%] left-[80%]">
              <img src={australia} alt="" />
            </div>
            <div className="absolute top-[70%] left-[29%]">
              <img src={brazil} alt="" />
            </div>
            <div className="absolute top-[35%] left-[65%]">
              <img src={china} alt="" />
            </div>
            <div className="absolute top-[50%] left-[48%]">
              <img src={naija} alt="" />
            </div>
            <div className="absolute top-[20%] left-[69%]">
              <img src={russia} alt="" />
            </div>
            <div className="absolute top-[8%] left-[35%]">
              <img src={england} alt="" />
            </div>
            <div className="absolute top-[70%] left-[52%]">
              <img src={sa} alt="" />
            </div>
            <div className="absolute top-[30%] left-[23%]">
              <img src={usa} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Globe