import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import footerlogo from '../assets/FooterLogo.svg'


const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-[var(--visionborder)] py-10 ">
      <div className="container mx-auto">
        <div className="top flex flex-col lg:flex-row justify-between gap-20 mx-auto px-6 items-center">
          <div className="left max-w-[459px]  p-6 flex flex-col justify-between gap-15 border rounded-[30px] border-[var(--visionborder)]">
            <div>
              <img src={footerlogo} alt="" />
              <p className="text-[18px] text-[var(--p-color)]">
                Our unparalleled voyages transform the dream of space travel
                into a tranquil reality, inviting you to discover the universe
                with peace and wonder.
              </p>
            </div>
            <div className="">
              <p className="text-[14px] text-[var(--p-color)]">Location:</p>
              <p className="text-[15px] text-[var(--p-color)]">
                35, Austin bridge, Lagos, Nigeria.
              </p>
            </div>
          </div>
          <div className="right grid md:grid-cols-2 justify-center lg:grid-cols-3 lg:justify-between w-full gap-10 items-center text-center">
            <div className="flex flex-col gap-5">
              <div className="px-[49px] py-[26px] w-[222px] h-[85px] rounded-[30px] border border-[var(--visionborder)]">
                <a
                  href=""
                  className="text-[var(--p-color)] cursor-pointer hover:text-white"
                >
                  Home
                </a>
              </div>
              <div className="px-[49px] py-[26px] w-[222px] h-[85px] rounded-[30px] border border-[var(--visionborder)]">
                <a href="" className="text-[var(--p-color)] hover:text-white">
                  Project
                </a>
              </div>
              <div className="px-[49px] py-[26px] w-[222px] h-[85px] rounded-[30px] border border-[var(--visionborder)]">
                <a href="" className="text-[var(--p-color)] hover:text-white">
                  Blogs
                </a>
              </div>
              <div className="px-[49px] py-[26px] w-[222px] h-[85px] rounded-[30px] border border-[var(--visionborder)]">
                <a href="" className="text-[var(--p-color)] hover:text-white">
                  About
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="px-[49px] py-[26px] w-[222px] h-[85px] rounded-[30px] border border-[var(--visionborder)]">
                <a href="" className="text-[var(--p-color)] hover:text-white">
                  Terms
                </a>
              </div>
              <div className="px-[49px] py-[26px] w-[222px] h-[85px] rounded-[30px] border border-[var(--visionborder)]">
                <a href="" className="text-[var(--p-color)] hover:text-white">
                  Privacy Notice
                </a>
              </div>
              <div className="px-[49px] py-[26px] w-[222px] h-[85px] rounded-[30px] border border-[var(--visionborder)]">
                <a href="" className="text-[var(--p-color)] hover:text-white">
                  Legal Polcies
                </a>
              </div>
              <div className="px-[49px] py-[26px] w-[222px] h-[85px] rounded-[30px] border border-[var(--visionborder)]">
                <a href="" className="hover:text-white text-[var(--p-color)]">
                  Partnership
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-center w-[222px] h-[85px] rounded-[30px] border border-[var(--visionborder)]">
                <BsTwitterX />
              </div>
              <div className="flex items-center justify-center px-[49px] py-[26px] w-[222px] h-[85px] rounded-[30px] border border-[var(--visionborder)]">
                <FaFacebookF />
              </div>
              <div className="flex items-center justify-center px-[49px] py-[26px] w-[222px] h-[85px] rounded-[30px] border border-[var(--visionborder)]">
                <FaLinkedin />
              </div>
              <div className="flex items-center justify-center px-[49px] py-[26px]  w-[222px] h-[85px] rounded-[30px] border border-[var(--visionborder)]">
                <FaRedditAlien />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom border border-[var(--visionborder)] mt-6 mx-auto p-3 text-center rounded-[30px]">
          <p className="text-[14px]">Copyright Quickrooms 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
