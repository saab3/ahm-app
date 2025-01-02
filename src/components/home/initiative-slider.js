"use client";

import { IntiativesSliderData } from "@/constants/home";
import Image from "next/image";
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
      dir="rtl"
      key="ar"
      loop
    >
      {IntiativesSliderData.map((item, info) => (
        <SwiperSlide
          key={info}
          className="h-full p-2 md:p-4 md:pb-2.5 border-2 bg-[#01AB9D] border-[#01AB9D] text-white rounded-md w-44 md:w-60"
        >
          <div className="flex flex-col gap-2">
            <Image
              loading="lazy"
              src={item.img}
              className="object-contain mx-auto max-md:size-16 md:size-20"
              height={150}
              width={150}
              alt="Img!"
            />
            <h3 className="flex items-center justify-center text-xs font-bold text-center min-h-12 md:min-h-[75px] md:text-base">
              {item.title}
            </h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default InitiativeSlider;
