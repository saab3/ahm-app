import Image from "next/image";

const WhyUs = () => {
  return (
    <section id="section-why-us" className="animate__animated animate__fadeInUp">
      <Image
        src="/imgs/layout/wave-img.png"
        className="object-contain w-full h-auto"
        height={20}
        width={1920}
        alt=""
      />
      <div className="bg-[#EDF1F5] relative py-20 overflow-x-hidden">
        <div className="grid w-11/12 grid-cols-12 gap-6 mx-auto">
          <div className="flex flex-col col-span-8 gap-8">
            <h3 className="text-2xl font-bold">لماذا نحن ؟</h3>
            <p className="text-lg leading-loose text-[#717171]">
              تعمل مؤسسة الوليد بن حمد آل مبارك الخيرية على إحداث تأثير إيجابي
              ومستدام في المجتمع من خلال التزامها بتحقيق العدالة الاجتماعية
              وتعزيز التنمية المستدامة.
            </p>
            <p className="text-lg leading-loose text-[#717171]">
              تتمثل رؤية المؤسسة في تحقيق الرفاهية الاجتماعية ودعم المبادرات
              التي تساهم في تحسين جودة الحياة للفئات الأكثر احتياجًا مع التركيز
              على تعزيز الابتكار والتميز في تقديم الخدمات والمشاريع الخيرية.
            </p>
          </div>
          <div className="col-span-4 overflow-hidden">
            <Image
              src="/imgs/home/family.png"
              className="relative z-20 object-cover w-full h-auto"
              height={370}
              width={530}
              alt=""
            />
          </div>
        </div>
        <div className="w-44 h-[80%] bg-[#01AB9D] rounded-md absolute -end-8 top-1/2 -translate-y-1/2"></div>
      </div>
      <Image
        src="/imgs/layout/wave-img.png"
        className="object-contain w-full h-auto rotate-180"
        height={20}
        width={1920}
        alt=""
      />
    </section>
  );
};

export default WhyUs;
