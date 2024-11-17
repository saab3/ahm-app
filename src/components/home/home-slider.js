"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
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
          {[...Array(3).keys()].map((i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col gap-10 max-md:gap-4">
                <h2 className="text-3xl font-semibold text-white max-md:text-xl max-sm:text-lg">
                  مؤسسه الوليد بن حمد آل مبارك الاهليه
                </h2>
                <p className="text-xl leading-loose text-white sm:w-3/4 max-md:text-lg max-sm:text-sm">
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
