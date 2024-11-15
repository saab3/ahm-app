"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
const HomeSlider = () => {
  return (
    <section className="bg-[url('/imgs/home/slider-img.png')] bg-cover animate__animated animate__fadeInUp">
      <div className="w-11/12 py-20 mx-auto">
        <Swiper
          direction="vertical"
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="w-full h-80 banner-swiper"
        >
          {[...Array(3).keys()].map((i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col gap-10">
                <h2 className="text-3xl font-semibold text-white">
                  مؤسسه الوليد بن حمد آل مبارك الاهليه
                </h2>
                <p className="w-3/4 text-xl leading-loose text-white">
                  تعمل مؤسسة الوليد بن حمد آل مبارك الخيرية على إحداث تأثير
                  إيجابي ومستدام في المجتمع من خلال التزامها بتحقيق العدالة
                  الاجتماعية وتعزيز التنمية المستدامة. تتمثل رؤية المؤسسة في
                  تحقيق الرفاهية الاجتماعية ودعم المبادرات التي تساهم في تحسين
                  جودة الحياة للفئات الأكثر احتياجًا مع التركيز على تعزيز
                  الابتكار والتميز في تقديم الخدمات والمشاريع الخيرية.
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
