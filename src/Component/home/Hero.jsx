import React from "react";
import Background from "../../assets/background.png";

const Hero = () => {
  return (
   
      <div className="bg-cover md:min-h-screen max-h-130 flex items-center pb-10 h-screen relative"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="container mx-auto px-4 space-y-7 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-[58px] font-bold leading-tight md:max-w-3xl mx-auto md:mx-0">
            EMPOWER YOUR BUSINESS
          </h2>
          <p className="text-base sm:text-lg md:text-lg md:max-w-3xl mx-auto md:mx-0">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start items-center sm:items-start">
            <button className="cursor-pointer py-2 px-4 bg-[#FFA62B] text-white text-lg rounded-full w-[185px] h-[48px]">
              Get Quote Now
            </button>
            <button className="cursor-pointer py-2 px-4 border border-gray-700 text-lg rounded-full w-[185px] h-[48px]">
              Learn More
            </button>
          </div>
        </div>
      </div>
   
  );
};

export default Hero;
