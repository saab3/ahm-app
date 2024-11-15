import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <Image
        src="/imgs/layout/wave-img.png"
        className="object-contain w-full h-auto"
        height={20}
        width={1920}
        alt=""
      />
      <div className="bg-[#EDF1F5] py-20">
        <div className="w-11/12 mx-auto">
          <h4 className="text-xl mb-8 font-bold text-center text-[#005750]">
            بعض من الجهات شاركت في إنجاح عملنا
          </h4>
          <div className="grid grid-cols-6 gap-5">
            {[
              "justice",
              "human",
              "education",
              "municipal",
              "commerce",
              "information",
            ].map((info) => (
              <Image
                key={info}
                loading="lazy"
                src={`/imgs/layout/ministry-${info}.png`}
                className="object-contain w-48 h-20 p-2"
                height={20}
                width={1920}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#02413C] py-3">
        <p className="text-center text-white">
          جميع الحقوق محفوظه لدي مؤسسه الوليد بن حمد آل مبارك لعام 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
