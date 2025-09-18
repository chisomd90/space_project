import React from 'react'
import frame1 from '../assets/Frame1.svg'
import frame2 from '../assets/Frame2.svg'
import frame3 from '../assets/Frame3.svg'


const Vision = () => {
  return (
    <section className="bg-black text-[var(--button-color)] flex items-center justify-center">
      <div className="container  flex flex-col justify-center items-center">
        <div className=" mb-10">
          <h1 className="adamina text-[44px] text-center mb-4">
            Powering the future with quantum automation
          </h1>
          <p className="text-[18px] text-center">
            We innovate at the forefront of technology, crafting <br />
            solutions that shape the future.
          </p>
        </div>

        <div className="p-3 rounded-[30px] container gap-5  mx-auto grid md:grid-cols-3  border-solid border border-[var(--visionborder)]   ">
          <div className=" flex flex-col justify-between">
            <div className="">
              <img
                src={frame1}
                alt="frame1"
                className="h-[198px] w-full object-cover  rounded-bl-[30px] rounded-tl-[30px]"
              />
            </div>
            <div>
              <h4 className="text-[24px] mb-2 adamina">
                Space & Satellite Tech
              </h4>
              <p className="text-[18px] text-[var(--p-color)]">
                Connecting earth through advanced space tech.{" "}
              </p>
            </div>
          </div>
          <div className=" flex flex-col justify-between">
            <div className="">
              <img
                src={frame1}
                alt="frame1"
                className="h-[198px] w-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-[24px] mb-2">Quantum Processing</h4>
              <p className="text-[18px] text-[var(--p-color)]">
                Next-gen speed through quantum breakthroughs.
              </p>
            </div>
          </div>
          <div className=" flex flex-col justify-between gap-4">
            <div className="">
              <img
                src={frame1}
                alt="frame1"
                className="h-[198px] w-full object-cover rounded-br-[30px] rounded-tr-[30px]"
              />
            </div>
            <div className="w-full">
              <h4 className="text-[24px] mb-2">BioTech Integration</h4>
              <p className="text-[18px] text-[var(--p-color)]">
                Where biology meets intelligent technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision