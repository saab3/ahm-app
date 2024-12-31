import Image from "next/image";
import InitiativeSlider from "./initiative-slider";

const Initiatives = () => {
  return (
    <section
      className="relative py-20 max-md:py-10 max-sm:py-7 animate__animated animate__fadeInUp"
      id="section-initiatives"
    >
      <Image
        loading="lazy"
        src="/imgs/home/circle-gray-bg.png"
        className="absolute z-30 object-contain w-auto h-auto -translate-y-1/2 top-1/2 start-0"
        height={471}
        width={471}
        alt="circle Img"
      />
      <div className="relative z-50 w-11/12 mx-auto overflow-hidden">
        <div className="flex flex-col col-span-12 gap-16 max-md:col-span-full max-md:gap-8">
          <div className="flex flex-col gap-8 max-md:gap-4">
            <h3 className="text-2xl font-bold max-md:text-xl">مبادراتنا </h3>
            <p className="text-lg max-md:text-base max-sm:text-sm leading-loose text-[#717171]">
              دعمت (أهم) البرنامج التدريبي (تطوير كفاءات ومهارات الصحفيين
              والإعلاميين) الذي عملت من خلاله على تحقيق أحد أهم أهداف المؤسسة
              المتمثل في إحداث تأثير إيجابي ومستدام في المجتمع، وتعزيز التنمية
              المستدامة لأفراده، من خلال دعم المبادرات التي تساهم في تحسين جودة
              الحياة والتركيز على تعزيز الابتكار والتميز.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:gap-8">
            <h3 className="font-bold text-center max-md:text-xs">
              قامت (أهم) خلال العام 2024م بدعم عدد من الجمعيات الخيرية بالتعاون
              والتنسيق مع منصة احسان، والجهات هي:
            </h3>
            <InitiativeSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
