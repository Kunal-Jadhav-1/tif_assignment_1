import React from "react";
import foodTruck from "../utils/images/foodTruck.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#f8f8f8] py-16 px-12 md:flex md:justify-evenly relative">
      <div className="flex justify-center mb-8 md:mb-0">
        <img src={foodTruck} alt="food truck" className="w-[25%]" />
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center content-start space-y-6 md:space-y-0 md:space-x-16">
        <div className="space-y-2 md:flex-1">
          <div className="text-[#0E2368] text-[16px] font-semibold mb-2">
            Contact Us
          </div>
          <div className="text-[#646874] text-[9px] font-normal space-y-2">
            <div>
              Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
              Market, XYZ-343434
            </div>
            <div>example2020@gmail.com</div>
            <div>(904) 443-0343</div>
          </div>
        </div>

        <div className="space-y-2 md:flex-1">
          <div className="text-[#0E2368] text-[16px] font-semibold mb-2">
            More
          </div>
          <div className="text-[#646874] text-[9px] font-normal space-y-2">
            <div>About Us</div>
            <div>Products</div>
            <div>Career</div>
            <div>Contact Us</div>
          </div>
        </div>

        <div className="md:flex-col content-start">
          {/* Hidden on small screens */}
          <div className="text-[#0E2368] text-[16px] font-semibold mb-2 hidden sm:block">
            Social Links
          </div>
          <div className="text-[#646874] text-[9px] flex font-normal space-x-3">
            <FaInstagram className="text-[#0E2368] text-[20px]" />
            <FaTwitter className="text-[#0E2368] text-[20px]" />
            <FaFacebook className="text-[#0E2368] text-[20px]" />
          </div>
          <div className="text-center text-[#0E2368] text-[9px] font-normal mt-4 md:mt-6">
            © 2022 Food Truck Example
          </div>
        </div>
      </div>

      {/* Copyright text always below everything */}
    </div>
  );
};

export default Footer;
