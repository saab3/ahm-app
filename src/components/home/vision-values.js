import Image from "next/image";

const VisionValues = () => {
  return (
    <>
      <Image
        src="/imgs/layout/wave-img.png"
        className="object-contain w-full h-auto"
        height={20}
        width={1920}
        alt=""
      />
      <section
        className="bg-[#EDF1F5] py-20 max-sm:py-3 relative overflow-hidden animate__animated animate__fadeInUp"
        id="section-vision"
      >
        <div className="relative z-50 grid w-11/12 grid-cols-12 gap-6 mx-auto ">
          <div className="flex flex-col col-span-6 gap-6 max-md:col-span-full">
            <div className="flex flex-col gap-8 max-md:gap-4">
              <h3 className="text-2xl font-bold max-md:text-xl max-sm:text-lg">
                الرؤية
              </h3>
              <ul className="flex flex-col gap-5 list-disc list-inside max-sm:gap-3">
                <li className="text-lg max-md:text-base max-sm:text-xs text-[#717171]">
                  تحقيق التنمية المستدامة وتعزيز الرفاه الاجتماعي من خلال دعم
                  المبادرات الاجتماعية المبتكرة.
                </li>
              </ul>
            </div>
            <div className="flex flex-col col-span-6 gap-8 max-md:gap-4 max-md:col-span-full">
              <h3 className="text-2xl font-bold max-md:text-xl max-sm:text-lg">
                الرسالة
              </h3>
              <ul className="flex flex-col gap-5 list-disc list-inside max-sm:gap-3">
                <li className="text-lg max-md:text-base max-sm:text-xs text-[#717171]">
                  العمل على تعزيز ودعم الابتكار والاستدامة لتحقيق تأثير إيجابي
                  ودائم على حياة الأفراد والمجتمعات.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col col-span-6 gap-8 max-md:gap-4 max-md:col-span-full">
            <h3 className="text-2xl font-bold max-md:text-xl max-sm:text-lg">
              قيم العمل
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
                بنزاهة وشفافية في جميع الأنشطة لضمان ثقة الشركاء.
              </li>
              <li className="text-lg max-md:text-base max-sm:text-xs text-[#717171]">
                <span className="font-bold">الاستدامة:</span>التركيز على
                المشاريع التي تحقق تأثيرًا مستدامًا وطويل الأمد.
              </li>
              <li className="text-lg max-md:text-base max-sm:text-xs text-[#717171]">
                <span className="font-bold">بناء الشراكات:</span> تعزيز التعاون
                مع الشركاء لتحقيق أهداف مشتركة وتنفيذ مشاريع ناجحة.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-8 col-span-full max-md:gap-4 max-md:col-span-full">
            <h3 className="text-2xl font-bold max-md:text-xl max-sm:text-lg">
              الأهداف
            </h3>
            <ul className="flex flex-col gap-3 max-sm:gap-2">
              <li className="text-lg max-md:text-base max-sm:text-xs text-[#717171]">
                قبل استعراض الأهداف الاستراتيجية تم اعتماد معايير SMART في صياغة
                هذه الأهداف لضمان تحقيقها بفعالية وكفاءة.{" "}
              </li>
              <li className="text-lg max-md:text-base max-sm:text-xs text-[#717171]">
                معايير SMART تعني أن الأهداف محددة Specific قابلة للقياس
                Measurable قابلة للتحقيق Achievable ذات صلة برؤية المؤسسة
                Relevant ومحددة بإطار زمنيTime-bound .
              </li>
              <li className="text-lg max-md:text-base max-sm:text-xs text-[#717171]">
                إستخدام هذه المعايير يضمن أن الأهداف تكون واضحة وقابلة للتنفيذ
                وتساهم بشكل مباشر في تحقيق رؤية ورسالة المؤسسة بطريقة ملموسة
                ومستدامة.
              </li>
              <li>
                <Image
                  loading="lazy"
                  src="/imgs/home/-_.pptx.jpg"
                  className="object-contain w-full h-auto lg:w-1/2"
                  height={500}
                  width={500}
                  alt="circle Img"
                />
              </li>
              <li className="text-lg max-md:text-base max-sm:text-xs text-[#717171]">
                لقد تم اتباع مجموعة من المعايير والأسس التي تعكس التزام المؤسسة
                بتحقيق تأثير إيجابي ومستدام على المجتمع.
              </li>
              <li className="text-lg max-md:text-base max-sm:text-xs text-[#717171]">
                أولى هذه المعايير هو الاستدامة حيث تم التركيز على تبني مشاريع
                ومبادرات تهدف إلى تحقيق نتائج طويلة الأمد وتعزيز التنمية
                المجتمعية لضمان وصول الخدمات والدعم إلى الفئات الأكثر احتياجًا
                في المجتمع مع مراعاة تحقيق الشمولية وتلبية احتياجات مختلف
                الفئات.{" "}
              </li>
              <li className="text-lg max-md:text-base max-sm:text-xs text-[#717171]">
                بالإضافة إلى ذلك تم إعطاء أولوية خاصة للابتكار في الحلول
                الاجتماعية والتكنولوجية كوسيلة فعالة للتغلب على التحديات
                المجتمعية. كما تؤمن المؤسسة بأهمية الشراكات والتعاون مع مختلف
                الجهات لتعظيم الأثر والوصول إلى الأهداف المنشودة. وأخيرًا تم
                التأكيد على مبدأ الشفافية والمصداقية، لضمان تنفيذ الأنشطة
                والمشاريع بأسلوب يحقق الثقة مع المجتمع والشركاء.
              </li>
              <li className="text-lg max-md:text-base max-sm:text-xs text-[#717171]">
                هذه الأسس مجتمعة هي التي بنيت عليها رؤية المؤسسة ورسالتها
                وقيمها، لتعكس التزامنا المستمر نحو مستقبل أكثر استدامة.
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
