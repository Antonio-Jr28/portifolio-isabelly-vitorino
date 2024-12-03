import React from "react";
import { useSwiper } from "swiper/react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

export const SwiperNavButton = () => {
  const swiper = useSwiper();

  return (
    <div className="flex flex-row justify-between mt-3 ">
      <button
        className="text-white bg-[#A66329] rounded-lg px-3 py-3"
        onClick={() => swiper.slidePrev()}
      >
        <GoArrowLeft />
      </button>
      <button
        className="text-white bg-[#A66329] rounded-lg px-3 py-3"
        onClick={() => swiper.slideNext()}
      >
        <GoArrowRight />
      </button>
    </div>
  );
};
