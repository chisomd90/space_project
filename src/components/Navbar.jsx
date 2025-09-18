import React from 'react'
import logo1 from "../images/logo1.png";

const Navbar = () => {
  return (
    <header className="w-full py-4 bg-(--bg-color) border-b border-[var(--visionborder)] text-(--text-color) sticky top-0">
      <nav className="container mx-auto px-6 h-[65px] bg-(--header-color)">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 justify-between max-w-[690px] h-[65px] items-center">
            <div className="rounded-[15px]">
              <img
                src={logo1}
                alt="logo1"
                className="w-[145px] h-[65px]  border-[var(--visionborder)]  rounded-[15px] border-[1px]"
              />
            </div>
            <div className="  justify-between gap-4 font-[400] h-[65px]  text-[18px] text-center px-[22px] py-[17px] border-[var(--visionborder)]  bg-(--color2) border-[1px] rounded-[15px] hidden md:flex">
              <a href="" className="hover:text-orange-500">
                Home
              </a>
              <a href="" className="hover:text-orange-500">
                Projects
              </a>
              <a href="" className="hover:text-orange-500">
                Resources
              </a>
              <a href="" className="hover:text-orange-500">
                Blogs
              </a>
              <a href="" className="hover:text-orange-500">
                About
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="hover:text-orange-500 cursor-pointer w-[126px] h-[50px] rounded-[20px] bg-(--button-color) px-[29px] py-[10px] font-[500] text-[18px] text-(--button-text)"
            >
              Sign up
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar