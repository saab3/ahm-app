import Image from "next/image";

const WhyUs = () => {
  return (
    <section
      id="section-why-us"
      className="animate__animated animate__fadeInUp"
    >
      <Image
        src="/imgs/layout/wave-img.png"
        className="object-contain w-full h-auto"
        height={20}
        width={1920}
        alt=""
      />
      <div className="bg-[#EDF1F5] relative py-20 max-md:py-5 overflow-x-hidden">
        <div className="grid w-11/12 grid-cols-12 gap-6 mx-auto max-md:gap-4">
          <div className="flex flex-col col-span-8 gap-8 max-md:gap-4 max-md:col-span-full">
            <h3 className="text-2xl font-bold max-md:text-xl max-sm:text-lg">
              لماذا نحن
            </h3>
            <p className="text-lg max-md:text-base max-sm:text-sm leading-loose text-[#717171]">
              نحن نستشرف آفاق المستقبل محملين بتعاليم ديننا الإسلامي الحنيف،
              وبالقيم الإنسانية النبيلة للشعب السعودي، متزودين بموروثنا
              الاجتماعي الأصيل، فديننا يُعَدّ منهجًا شاملاً للإيثار والعطاء،
              والقيم الأخلاقية التي تهدف إلى بناء مجتمع متكافل متماسك ومترابط،
              والذي يمد أفراده يد العون للفئات المحتاجة بلا مَنّ ولا أذى،
              والمجتمع السعودي قيادة وشعباً غني عن التعريف لو تحدثنا عن كرمه
              وعطائه الممتد بلا حدود، تعزيزاً لروح المحبة والأخوة .{" "}
              <span className="block font-bold text-center">
                نؤمن في (أهم) بأن علينا مسؤولية لخدمة الوطن والمجتمع ونضع ذلك
                نصب أعيننا.
              </span>
            </p>
          </div>
          <div className="col-span-4 overflow-hidden max-md:col-span-full">
            <Image
              src="/imgs/home/uae-family.jpg"
              className="relative z-20 object-cover w-full h-auto"
              height={370}
              width={530}
              alt=""
            />
          </div>
        </div>
        <div className="w-44 max-md:hidden h-[80%] bg-[#01AB9D] rounded-md absolute -end-8 top-1/2 -translate-y-1/2"></div>
      </div>
    </section>
  );
};

export default WhyUs;
