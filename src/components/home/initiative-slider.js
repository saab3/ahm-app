"use client";

import { IntiativesSliderData } from "@/constants/home";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const InitiativeSlider = () => {
  return (
    <Swiper
      breakpoints={{ 320: { spaceBetween: 10 }, 769: { spaceBetween: 20 } }}
      spaceBetween={10}
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      slidesPerView="auto"
      centeredSlides
      loop
    >
      {IntiativesSliderData.map((item, info) => (
        <SwiperSlide key={info} className="w-auto">
          <button className="py-2 px-4 bg-[#01AB9D] text-white rounded-full text-xs md:text-sm">
            {item}
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default InitiativeSlider;
