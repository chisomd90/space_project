import React from 'react'
import alien from '../assets/Alien.svg'
import chopra from '../assets/Chopra.svg'
import james from '../assets/James.svg'
import fred from '../assets/Fred.svg'

const Team = () => {
  return (
    <section className="bg-black">
      <div className="flex flex-col justify-center items-center container mx-auto px-6 py-20">
        <div className="text-center mb-10 max-w-[695px]">
          <h1 className="adamina text-[44px] text-white mb-5">
            Our incredible team
          </h1>
          <p className="text-[18px] text-[var(--p-color)]">
            Meet the people powering innovation, collaboration, and
            extraordinary <br /> results every day.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-5 text-white text-center">
          <div className="border border-[var(--visionborder)] rounded-[30px] px-[20px] py-[21px]">
            <div>
              <img src={alien} alt="alien" />
            </div>
            <div>
              <h1 className="adamina text-[24px]">Lizarius Ghuna</h1>
              <p className="text-[18px] text-[var(--p-color)]">
                Cosmos head & Co founder
              </p>
            </div>
          </div>
          <div className="border border-[var(--visionborder)] rounded-[30px] px-[20px] py-[21px]">
            <div className="">
              <img src={chopra} alt="chopra" />
            </div>
            <div>
              <h1 className="adamina text-[24px]">Mehek Chopra</h1>
              <p className="text-[18px] text-[var(--p-color)]">
                Lead satellite
              </p>
            </div>
          </div>
          <div className="border border-[var(--visionborder)] rounded-[30px] px-[20px] py-[21px]">
            <div>
              <img src={fred} alt="fred" />
            </div>
            <div>
              <h1 className="adamina text-[24px]">Fred Thomas</h1>
              <p className="text-[18px] text-[var(--p-color)]">
                Bio-tech specialist
              </p>
            </div>
          </div>
          <div className="border border-[var(--visionborder)] rounded-[30px] px-[20px] py-[21px]">
            <div>
              <img src={james} alt="james" />
            </div>
            <div>
              <h1 className="text-[24px] adamina">Harry James</h1>
              <p className="text-[18px] text-[var(--p-color)]">
                Lead quantum processor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team