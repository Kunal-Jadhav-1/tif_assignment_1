import React from "react";
import about from "../utils/images/About.jpg"

const About = () => {
  return (
    <div className="w-full bg-[#F0F1F7] pt-32 pb-24 px-8 md:flex md:justify-stretch md:px-32 md:pt-0 md:pb-0 md:my-10">
      {/* Image Container - Hidden on small screens */}
      <div className="relative w-[60%] hidden sm:block">
        <img
          src={about}
          alt="about"
          className="w-[90%] h-[450px]"
        />
      </div>
      
      {/* Text Content */}
      <div className="w-full flex flex-col items-center md:items-start md:w-[75%] md:content-center mt-8 md:mt-0 md:ml-12">
        <h1 className="text-center md:text-start text-[#0E2368] font-[600] text-[26px] mb-8 font-poppins">
          About Us
        </h1>
        <div className="text-center md:text-start text-[#444957] font-normal text-[11px] my-8 font-open-sans md:w-[60%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </div>
        <div className="text-center md:text-start text-[#FFFFFF] my-20 md:my-4">
          <button className="bg-[#E23744] rounded-3xl text-white px-5 text-[10px] py-2">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
