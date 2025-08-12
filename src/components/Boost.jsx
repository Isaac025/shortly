import React from "react";

const Boost = () => {
  return (
    <div className="bg-gray-700 h-screen max-h-[255px] w-full ">
      <div className="boost h-screen max-h-[300px] w-full -translate-y-6 flex items-center justify-center">
        <div className="w-full mx-auto max-w-[500px] text-center">
          <h2 className="text-white font-[800] tracking-wider text-2xl md:text-4xl mb-4">
            Boost your links today
          </h2>
          <button className="bg-[#40b3a6] md:text-[18px] text-white font-[800] rounded-3xl w-[180px] h-[50px]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Boost;
