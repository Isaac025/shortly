import React from "react";
import person from "../assets/illustration-working.svg"; // Assuming you have an illustration image in assets folder

const Hero = () => {
  return (
    <div className="component flex flex-col-reverse md:flex-row items-center gap-5 md:justify-between md:my-10 my-20">
      <div>
        <h2 className="text-center md:text-start text-[40px] lg:text-[45px] font-[700] mb-[5px] lg:mb-[10px] text-[#262226] leading-9 md:leading-12">
          More than just <br /> shorter links
        </h2>
        <p className="text-[#a6a1b0] md:w-[70%] w-full text-[16px] md:text-[18px] text-center md:text-start mb-5 md:mb-10">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="bg-[#40b3a6] text-white rounded-3xl w-[150px] h-[50px]">
            Get Started
          </button>
        </div>
      </div>
      <img src={person} alt="illustration" className="md:w-[50%] w-full" />
    </div>
  );
};

export default Hero;
