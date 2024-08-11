import React, { useState } from "react";
import grilledTomatoesImg from "../utils/images/grilled-tomatoes-1-846x846.jpg";
import mealPrepImg from "../utils/images/meal-prep-ideas-846x846.jpg";
import peachSalsaImg from "../utils/images/peach-salsa-1-846x846.jpg";
import BroccoliCheeseSoup from "../utils/images/bro.jpg";
import CrunchwrapSupreme from "../utils/images/crunch.jpg";
import howToGrillCorn from "../utils/images/Corn.jpg";

const carouselItems = [
  {
    imgSrc: grilledTomatoesImg,
    title: "Grilled Tomatoes at Home",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
  },
  {
    imgSrc: mealPrepImg,
    title: "Snacks for Travel",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
  },
  {
    imgSrc: peachSalsaImg,
    title: "Post-workout Recipes",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
  },
  {
    imgSrc: howToGrillCorn,
    title: "How To Grill Corn",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
  },
  {
    imgSrc: CrunchwrapSupreme,
    title: "Crunchwrap Supreme",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
  },
  {
    imgSrc: BroccoliCheeseSoup,
    title: "Broccoli Cheese Soup",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [page, setPage] = useState(1);

  const handlePrevClick = () => {
    if (page === 2) {
      const newIndex =
        (currentIndex - 1 + Math.ceil(carouselItems.length / 3)) %
        Math.ceil(carouselItems.length / 3);
      setCurrentIndex(newIndex);

      setPage(1);
    }
  };

  const handleNextClick = () => {
    if (page === 1) {
      const newIndex = (currentIndex + 1) % Math.ceil(carouselItems.length / 3);
      setCurrentIndex(newIndex);

      setPage(2);
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden py-20">
      <h2 className="font-poppin text-[32px] font-[600] text-[#0E2368] text-center lg:text-start my-2">
        Latest Articles
      </h2>
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {Array.from({ length: Math.ceil(carouselItems.length / 3) }).map(
          (_, pageIndex) => (
            <div
              key={pageIndex}
              className="flex flex-col lg:flex-row justify-center items-center w-full flex-shrink-0 space-x-4"
            >
              {carouselItems
                .slice(pageIndex * 3, pageIndex * 3 + 3)
                .map((item, index) => (
                  <div
                    key={index}
                    className="w-[66.66%] bg-white border border-[#e5e9f4] rounded-2xl py-6 space-y-4 text-center md:text-start px-5 my-3"
                  >
                    <img
                      src={item.imgSrc}
                      alt={item.title}
                      className="w-[75%] md:w-[70%] h-[38%] md:h-[50%] rounded-2xl mx-auto mb-6"
                    />
                    <div className="text-[#0E2368] text-[16px] font-[700]">
                      {item.title}
                    </div>
                    <div className="text-[#444957] text-[10px] font-[400] px-4 md:px-0">
                      {item.description}
                    </div>
                    <div className="flex justify-center md:justify-start">
                      <button className="text-[#424961] text-[10px] font-semibold border border-[#424961] rounded-2xl py-1 px-4">
                        Read More
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          )
        )}
      </div>

      {/* Pagination */}
      <div className="inset-0 flex items-center justify-center px-4 my-2">
        <button
          onClick={handlePrevClick}
          className="text-[#424961] bg-white rounded-md px-2 border border-[#424961]"
        >
          ‹
        </button>
        <span className="text-[#424961]  px-2 ">{page}/2</span>
        <button
          onClick={handleNextClick}
          className="text-[#424961] bg-white rounded-md px-2 border border-[#424961]"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default Carousel;
