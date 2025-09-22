import React from "react";
import Arrow from "../images/Arrow.png";
import { useState } from "react";

const Update = () => {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault()
    if (!email.trim()) {
      setError('Please fill the input')
    }
  }

  return (
    <section className="bg-black ">
      <div className="container mx-auto px-6 py-20 text-center text-white">
        <h1 className="adamina text-3xl md:text-[44px] mb-5">
          Stay in the Loop, Beyond Earth
        </h1>
        <p className="text-[18px] text-[var(--p-color)] mb-10">
          Join our cosmic circle — get the latest mission updates,
          behind-the-scenes insights, <br /> and discoveries sent straight to
          your inbox. No spam, just pure space magic.
        </p>

        <form
          onSubmit={handleSubmit}
          className="lg:relative justify-center gap-3 flex flex-col items-center lg:block"
        >
          <input
            type="email"
            placeholder="Enter mail"
            className=" border border-[var(--visionborder)] px-6 py-4 focus:outline-none rounded-[30px] w-full sm:w-130"
            value={email}
            onChange={(e) => setEmail(e.target.target)}
          />
          <p className="text-red-500">{error}</p>
          <div className="">
            <button onClick={handleSubmit} className="lg:absolute lg:right-[30%] bottom-2 cursor-pointer  flex gap-2 items-center  justify-center w-[183px] h-[43px] rounded-[20px] px-[19px] py-[10px] bg-(--button-color) text-[18px] font-[400] text-(--button-text)">
              Subscribe
              <img
                src={Arrow}
                alt="arrow"
                className="shadow-[#5D5D5D] shadow-md bg-[black] border-[1px] border-(--border-color2) h-[33px] w-[33px] rounded-[14px] p-2"
              />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Update;
