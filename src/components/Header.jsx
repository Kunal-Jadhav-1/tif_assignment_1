import React from "react";
import header_img from "../utils/images/header_img.png";
import red_block from "../utils/images/red_block.png";
import foodTruck from "../utils/images/foodTruck.png";

const Header = () => {
  return (
    <div className="w-full md:flex md:flex-row-reverse">
      <div className="relative w-full h-[426px] md:h-[625px] mb-10 px-4">
        {/* Background Image */}
        <div className="absolute inset-0 rounded-bl-[102.35px] overflow-hidden">
          <img
            src={header_img}
            alt="Header"
            className="w-full h-[97%] object-cover"
          />
        </div>

        <div className="absolute top-0 right-0 w-full h-full">
          <img
            src={red_block}
            alt="Red Block"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute flex flex-row justify-center items-center gap-[13px] w-[87.89px] h-[31px] right-5 top-3 border border-white rounded-[27px]">
          <span className="text-[10px] text-white font-semibold flex items-center">
            Get In Touch
          </span>
        </div>
      </div>

      <div className="relative w-full h-auto my-24 md:my-10 space-y-10 px-20">
        <img src={foodTruck} className="hidden md:block md:w-[15%] md:top-3 md:left-6" alt="Food Truck" />

        <div className="text-center md:text-start text-[#0E2368] font-[700] text-[34px] font-sans">
          Discover the <span className="text-[#e23744]">Best</span> Food and
          Drinks
        </div>

        <div className="text-center md:text-start text-[#444957] font-normal text-[10px] font-sans">
          Naturally made Healthcare Products for the better care & support of
          your body.
        </div>

        <div className="flex flex-row justify-center items-center md:justify-start">
          <button className="bg-[#E23744] rounded-3xl text-white px-3 py-2">
            Explore Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
