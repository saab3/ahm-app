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
          className="p-2 md:p-4 md:pb-2.5 border-2 bg-[#01AB9D] border-[#01AB9D] text-white rounded-md size-44 md:size-64"
        >
          <div className="flex flex-col justify-between h-full gap-2">
            <Image
              loading="lazy"
              src={item.img}
              className="object-contain w-full m-auto h-1/2"
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
