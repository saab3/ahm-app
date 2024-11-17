"use client";

import ArrowDashIcon from "../icons/arrow-dash-icon";
import FaceBookIcon from "../icons/facebook-icon";
import InstagramIcon from "../icons/instagram-icon";
import LinkedInIcon from "../icons/linked-in-icon";
import TwitterIcon from "../icons/twitter-icon";
import YoutubeIcon from "../icons/youtube-icon";

const HomeContact = () => {
  return (
    <section
      className="grid w-11/12 grid-cols-12 gap-6 py-20 mx-auto max-md:py-10 max-sm:py-7 animate__animated animate__fadeInUp"
      id="section-contact-us"
    >
      <div className="flex flex-col col-span-7 gap-10 max-md:order-2 max-md:gap-5 max-sm:gap-3 max-md:col-span-full">
        <h2 className="text-2xl font-bold max-md:hidden">
          ابق علي تواصل معنا !
        </h2>
        <p className="text-lg max-md:text-base max-sm:text-sm text-[#717171]">
          نحن هنا لخدمة المجتمع وتقديم الدعم والمساعدة لمن هم في حاجة. يسعدنا أن
          نتواصل معكم لتقديم معلومات حول خدماتنا ومبادراتنا أو للإجابة على
          استفساراتكم. بإمكانكم الوصول إلينا عبر قنوات التواصل المتاحة، سواءً من
          خلال الهاتف، البريد الإلكتروني، أو وسائل التواصل الاجتماعي.
        </p>
        <div className="grid grid-cols-12 gap-10 max-md:gap-5 max-sm:mt-5">
          <div className="flex flex-col col-span-7 gap-5 max-md:col-span-full">
            <h4 className="text-lg font-bold max-md:text-base">العنوان</h4>
            <p className="text-lg leading-loose max-md:text-base max-sm:text-sm max-sm:-mt-1">
              الإدارة العامـة : جـدة - حي الروضـة - شارع الأمير محمد بن
              عبدالعزيز - ص.ب 14888 - جــــدة 21434
            </p>
          </div>
          <div className="flex flex-col col-span-5 gap-5 max-md:col-span-full">
            <h4 className="text-lg font-bold max-md:text-base">رقم الجوال</h4>
            <p className="flex flex-col gap-3 text-lg leading-loose max-md:text-base">
              <span className="block text-lg max-md:text-base max-sm:text-sm">
                +966 5056379
              </span>
              <span className="block text-lg max-md:text-base max-sm:text-sm">
                +966 5056379
              </span>
            </p>
          </div>
          <div className="flex flex-col col-span-7 gap-5 max-md:col-span-full">
            <h4 className="text-lg font-bold max-md:text-base">
              البريد الالكتروني
            </h4>
            <p className="text-lg max-md:text-base max-sm:text-sm max-sm:-mt-2">
              ceo@admin.com
            </p>
          </div>
          <div className="flex flex-col col-span-5 gap-5 max-md:col-span-full">
            <h4 className="text-lg font-bold max-md:text-base">
              السوشيال ميديا
            </h4>
            <div className="flex items-center gap-2 max-sm:-mt-1">
              <div className="flex items-center gap-3 max-md:flex-wrap">
                <div className="grid size-10 max-sm:size-8 bg-[#01AB9D] rounded-md place-items-center">
                  <FaceBookIcon />
                </div>
                <div className="grid size-10 max-sm:size-8 bg-[#01AB9D] rounded-md place-items-center">
                  <YoutubeIcon />
                </div>
                <div className="grid size-10 max-sm:size-8 bg-[#01AB9D] rounded-md place-items-center">
                  <TwitterIcon />
                </div>
                <div className="grid size-10 max-sm:size-8 bg-[#01AB9D] rounded-md place-items-center">
                  <LinkedInIcon />
                </div>
                <div className="grid size-10 max-sm:size-8 bg-[#01AB9D] rounded-md place-items-center">
                  <InstagramIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-5 max-md:order-1 max-md:col-span-full">
        <h2 className="hidden mb-5 font-bold max-md:block max-md:text-xl max-sm:text-lg">
          ابق علي تواصل معنا !
        </h2>
        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-3 max-sm:gap-1.5">
            <label
              htmlFor="name"
              className="text-[17px] text-[#4D5D5D] max-md:text-sm"
            >
              الإسم
            </label>
            <input
              id="name"
              className="outline-none bg-[#EDF1F5] p-2 w-full rounded-md max-sm:p-1.5 max-sm:placeholder:text-sm max-sm:text-sm"
            />
          </div>
          <div className="flex flex-col gap-3 max-sm:gap-1.5">
            <label
              htmlFor="email"
              className="text-[17px] text-[#4D5D5D] max-md:text-sm"
            >
              البريد
            </label>
            <input
              id="email"
              type="email"
              className="outline-none bg-[#EDF1F5] p-2 w-full rounded-md max-sm:p-1.5 max-sm:placeholder:text-sm max-sm:text-sm"
            />
          </div>
          <div className="flex flex-col gap-3 max-sm:gap-1.5">
            <label
              htmlFor="subject"
              className="text-[17px] text-[#4D5D5D] max-md:text-sm"
            >
              الموضوع
            </label>
            <input
              id="subject"
              className="outline-none bg-[#EDF1F5] p-2 w-full rounded-md max-sm:p-1.5 max-sm:placeholder:text-sm max-sm:text-sm"
            />
          </div>
          <div className="flex flex-col gap-3 max-sm:gap-1.5">
            <label
              htmlFor="message"
              className="text-[17px] text-[#4D5D5D] max-md:text-sm"
            >
              الرسالة
            </label>
            <textarea
              id="message"
              className="outline-none bg-[#EDF1F5] p-2 w-full rounded-md max-sm:p-1.5 max-sm:placeholder:text-sm max-sm:text-sm"
              rows="5"
            ></textarea>
          </div>
          <button className="bg-[#01AB9D] text-white flex items-center justify-between max-sm:justify-center max-sm:gap-3 max-sm:p-1.5 w-44 max-sm:w-full rounded-md p-3">
            <span className="text-lg font-bold max-sm:text-sm">إرسال</span>
            <ArrowDashIcon className="max-sm:size-4" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default HomeContact;
