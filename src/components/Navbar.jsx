import React, { useState } from "react";
import logo from "../assets/logo.svg"; // Assuming you have a logo image in assets folder
import { CiMenuBurger } from "react-icons/ci";
import { MdClear } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="component flex justify-between items-center ">
      <div className="flex items-center gap-4 text-[#bfbfbf] font-[700]">
        <img src={logo} alt="logo" />
        <a href="#" className="hover:text-black hidden md:block">
          Features{" "}
        </a>
        <a href="#" className="hover:text-black hidden md:block">
          Pricing
        </a>
        <a href="#" className="hover:text-black hidden md:block">
          Resources
        </a>
      </div>
      <div className="flex items-center gap-3 ">
        <button className="text-[#bfbfbf] cursor-pointer hidden md:block">
          Login
        </button>
        <button className="bg-[#40b3a6] text-white rounded-3xl w-[100px] h-[40px] cursor-pointer hidden md:block hover:bg-[#a1e6de]">
          Sign Up
        </button>
      </div>

      {!isOpen ? (
        <CiMenuBurger
          size={30}
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />
      ) : (
        <MdClear
          size={30}
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
      {isOpen && (
        <div className="  absolute top-16 right-5 bg-[#3b3054ff] font-[700] text-gray-300 text-center shadow-lg px-4 py-5 w-[90%] rounded-xl md:hidden">
          <a href="#" className="block py-3 hover:text-black">
            Features
          </a>
          <a href="#" className="block py-3 hover:text-black">
            Pricing
          </a>
          <a href="#" className="block py-3 mb-3 hover:text-black">
            Resources
          </a>
          <hr className="text-gray-500 py-3" />
          <div className="flex justify-center">
            <button className="block py-2 text-[#bfbfbf] ">Login</button>
          </div>
          <button className="bg-[#40b3a6] text-white rounded-3xl w-[70%] h-[40px] mt-2">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
