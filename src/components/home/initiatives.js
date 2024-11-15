"use client";

import { InnovationData } from "@/constants/home";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

const Initiatives = () => {
  return (
    <section className="relative py-20 animate__animated animate__fadeInUp" id="section-initiatives">
      <Image
        loading="lazy"
        src="/imgs/home/circle-gray-bg.png"
        className="absolute z-30 object-contain w-auto h-auto -translate-y-1/2 top-1/2 start-0"
        height={471}
        width={471}
        alt="circle Img"
      />
      <div className="relative z-50 grid w-11/12 grid-cols-12 gap-6 mx-auto">
        <div className="flex flex-col col-span-5 gap-8">
          <h3 className="text-2xl font-bold">المبادرات</h3>
          <p className="text-lg leading-loose text-[#717171]">
            نقدم في جمعيتنا الدعم للمجتمع السعودي عبر مجالات متعددة تشمل
            الإغاثة، والتعليم، والرعاية الصحية، والإسكان، لنساهم في تحسين جودة
            الحياة وتعزيز التنمية المستدامة.
          </p>
        </div>
        <div className="col-span-7">
          <Swiper spaceBetween={25} slidesPerView="auto">
            {InnovationData.map((info, index) => (
              <SwiperSlide key={index} className="w-[373px] h-80">
                <div className="relative overflow-hidden size-full">
                  <div className="absolute top-0 z-50 flex flex-col items-center justify-center gap-3 px-8 bg-black rounded-md start-0 size-full bg-opacity-60">
                    <h5 className="text-lg font-bold text-center text-white">
                      {info?.title}
                    </h5>
                    <p className="text-center text-white">
                      {info?.description}
                    </p>
                  </div>
                  <Image
                    src={info?.image}
                    className="rounded-md size-full"
                    height={320}
                    width={373}
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
