import React from "react";
import logo from "../assets/logo.svg";
import twitter from "../assets/icon-twitter.svg";
import facebook from "../assets/icon-facebook.svg";
import pinterest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="bg-gray-900 w-full  p-15 h-full">
      {" "}
      <div class="component flex flex-col gap-[20px]  md:flex-row justify-between">
        <h1 className="text-gray-300 font-bold text-[34px] text-center ">
          Shortly
        </h1>
        <div class="flex flex-col gap-[10px] text-gray-500 font-bold items-center md:items-start">
          {" "}
          <h1 class="text-white font-[500]">Feature </h1>
          <a
            href="#"
            className="hover:text-green-500 transition-colors duration-300"
          >
            Link Shortening{" "}
          </a>
          <a
            href="#"
            className="hover:text-green-500 transition-colors duration-300"
          >
            Branded Links
          </a>
          <a
            href="#"
            className="hover:text-green-500 transition-colors duration-300"
          >
            Analytics
          </a>
        </div>
        <div class="flex flex-col items-center md:items-start gap-[10px]  text-gray-500 font-bold">
          <h1 class="text-white font-[500]">Resources</h1>
          <a
            href="#"
            className="hover:text-green-500 transition-colors duration-300"
          >
            Blog{" "}
          </a>
          <a
            href="#"
            className="hover:text-green-500 transition-colors duration-300"
          >
            Developers
          </a>
          <a
            href="#"
            className="hover:text-green-500 transition-colors duration-300"
          >
            Support
          </a>
        </div>
        <div class="flex flex-col  gap-[10px] items-center md:items-start text-gray-500 font-bold">
          <h1 class="text-white font-[500]">Find out more</h1>
          <a
            href="#"
            className="hover:text-green-500 transition-colors duration-300"
          >
            About{" "}
          </a>
          <a
            href="#"
            className="hover:text-green-500 transition-colors duration-300"
          >
            Our Team
          </a>
          <a
            href="#"
            className="hover:text-green-500 transition-colors duration-300"
          >
            Careers
          </a>
          <a
            href="#"
            className="hover:text-green-500 transition-colors duration-300"
          >
            Contact
          </a>
        </div>
        <div>
          <div
            className="flex justify-center gap-6 mt-8 md:mt-0 text-gray-500  "
            color="#bfbfbf"
          >
            <a
              href="#"
              className="hover:bg-green-500 transition-colors duration-300 rounded-full"
            >
              <img src={facebook} alt="Facebook" className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="hover:bg-green-500 transition-colors duration-300 rounded-full"
            >
              <img src={twitter} alt="Twitter" className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="hover:bg-green-500 transition-colors duration-300 rounded-full"
            >
              <img src={pinterest} alt="Pinterest" className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="hover:bg-green-500 transition-colors duration-300 rounded-full"
            >
              <img src={instagram} alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Footer;
