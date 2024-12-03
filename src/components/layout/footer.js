import Image from "next/image";
import Link from "next/link";

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
      <div className="bg-[#EDF1F5] py-20 max-md:py-10 max-sm:py-7">
        <div className="w-11/12 mx-auto">
          <h4 className="text-xl max-md:text-lg max-sm:text-base mb-8 max-md:mb-6 font-bold text-center text-[#005750]">
            بعض من الجهات شاركت في إنجاح عملنا
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-5">
            {[
              { name: "alyoum-1", link: "https://www.alyaum.com/" },
              { name: "alyoum-2", link: "https://www.alyaumtraining.com/" },
              { name: "alyoum-3", link: "https://www.sju.org.sa/" },
            ].map((info, index) => (
              <Link key={index} href={info?.link} target="_blank">
                <Image
                  loading="lazy"
                  src={`/imgs/layout/${info?.name}.png`}
                  className="object-contain w-48 h-20 p-2 border max-md:w-36 max-md:h-14 max-md:mx-auto"
                  height={20}
                  width={1920}
                  alt=""
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#02413C] py-3">
        <p className="w-11/12 mx-auto text-center text-white max-sm:text-xs max-md:text-sm">
          جميع الحقوق محفوظه لدي مؤسسه الوليد بن حمد آل مبارك لعام 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
