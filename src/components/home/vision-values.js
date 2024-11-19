import Image from "next/image";

const VisionValues = () => {
  return (
    <>
      <section
        className="bg-[#EDF1F5] pb-20 max-sm:py-3 relative overflow-hidden animate__animated animate__fadeInUp"
        id="section-vision"
      >
        <div className="relative z-50 grid w-11/12 grid-cols-12 gap-6 mx-auto ">
          <div className="flex flex-col col-span-5 gap-8 max-md:gap-4 max-md:col-span-full">
            <h3 className="text-2xl font-bold max-md:text-xl max-sm:text-lg">
              الرؤية
            </h3>
            <ul className="flex flex-col gap-5 list-disc list-inside max-sm:gap-3">
              <li className="text-lg max-md:text-base max-sm:text-xs text-[#717171]">
                تحقيق التنمية المستدامة وتعزيز الرفاه الاجتماعي من خلال دعم
                المبادرات الخيرية المبتكرة والمستدامة.
              </li>
              <li className="text-lg max-md:text-base max-sm:text-xs text-[#717171]">
                العمل على تعزيز العدالة الاجتماعية ودعم الابتكار والاستدامة
                لتحقيق تأثير إيجابي ودائم على حياة الأفراد والمجتمعات.
              </li>
            </ul>
          </div>
          <div className="flex flex-col col-span-7 gap-8 max-md:gap-4 max-md:col-span-full">
            <h3 className="text-2xl font-bold max-md:text-xl max-sm:text-lg">
              القيم
            </h3>
            <ul className="flex flex-col gap-3 max-sm:gap-2">
              <li className="text-lg max-md:text-base max-sm:text-xs text-[#717171]">
                <span className="font-bold">المسؤولية الاجتماعية:</span>{" "}
                الالتزام بتعزيز رفاهية المجتمع من خلال مبادرات تستهدف الفئات
                الأكثر حاجة.
              </li>
              <li className="text-lg max-md:text-base max-sm:text-xs text-[#717171]">
                <span className="font-bold">التميز والابتكار:</span> السعي نحو
                التميز في جميع البرامج والابتكار في تقديم الحلول.
              </li>
              <li className="text-lg max-md:text-base max-sm:text-xs text-[#717171]">
                <span className="font-bold">الشفافية والنزاهة:</span> العمل
                بنزاهة وشفافية في جميع الأنشطة لضمان ثقة الشركاء والمستفيدين.
              </li>
              <li className="text-lg max-md:text-base max-sm:text-xs text-[#717171]">
                <span className="font-bold">الاستدامة:</span> التركيز على
                المشاريع التي تحقق تأثيرًا مستدامًا وطويل الأمد.
              </li>
              <li className="text-lg max-md:text-base max-sm:text-xs text-[#717171]">
                <span className="font-bold">بناء الشراكات:</span> تعزيز التعاون
                مع الشركاء لتحقيق أهداف مشتركة وتنفيذ مشاريع ناجحة.
              </li>
            </ul>
          </div>
        </div>
        <Image
          loading="lazy"
          src="/imgs/home/circle-bg.png"
          className="absolute z-30 object-contain w-auto h-auto -translate-y-1/2 top-1/2 end-0"
          height={500}
          width={500}
          alt="circle Img"
        />
      </section>
      <Image
        src="/imgs/layout/wave-img.png"
        className="object-contain w-full h-auto rotate-180"
        height={20}
        width={1920}
        alt=""
      />
    </>
  );
};

export default VisionValues;
