"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { HomeSliderData } from "@/constants/home";
const HomeSlider = () => {
  return (
    <section className="bg-[url('/imgs/home/slider-img.png')] bg-cover animate__animated animate__fadeInUp">
      <div className="w-11/12 py-20 mx-auto max-md:py-10">
        <Swiper
          direction="horizontal"
          spaceBetween={20}
          breakpoints={{ 641: { direction: "vertical", spaceBetween: 0 } }}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="w-full min-h-60 sm:h-80 banner-swiper"
        >
          {HomeSliderData.map((info, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col gap-10 max-md:gap-4">
                <h2 className="text-3xl font-semibold text-white max-md:text-xl max-sm:text-lg">
                  مؤسسة الوليد بن حمد آل مبارك الأهلية (أهم)
                </h2>
                <p className="text-xl leading-loose text-white sm:w-3/4 max-md:text-lg max-sm:text-sm">
                  {info}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeSlider;
