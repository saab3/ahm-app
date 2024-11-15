"use client";

import ArrowDashIcon from "../icons/arrow-dash-icon";
import FaceBookIcon from "../icons/facebook-icon";
import InstagramIcon from "../icons/instagram-icon";
import LinkedInIcon from "../icons/linked-in-icon";
import TwitterIcon from "../icons/twitter-icon";
import YoutubeIcon from "../icons/youtube-icon";

const HomeContact = () => {
  return (
    <section className="grid w-11/12 grid-cols-12 gap-6 py-20 mx-auto animate__animated animate__fadeInUp" id="section-contact-us">
      <div className="flex flex-col col-span-7 gap-10">
        <h2 className="text-2xl font-bold">ابق علي تواصل معنا !</h2>
        <p className="text-lg text-[#717171]">
          نحن هنا لخدمة المجتمع وتقديم الدعم والمساعدة لمن هم في حاجة. يسعدنا أن
          نتواصل معكم لتقديم معلومات حول خدماتنا ومبادراتنا أو للإجابة على
          استفساراتكم. بإمكانكم الوصول إلينا عبر قنوات التواصل المتاحة، سواءً من
          خلال الهاتف، البريد الإلكتروني، أو وسائل التواصل الاجتماعي.
        </p>
        <div className="grid grid-cols-12 gap-10">
          <div className="flex flex-col col-span-7 gap-5">
            <h4 className="text-lg font-bold">العنوان</h4>
            <p className="text-lg leading-loose">
              الإدارة العامـة : جـدة - حي الروضـة - شارع الأمير محمد بن
              عبدالعزيز - ص.ب 14888 - جــــدة 21434
            </p>
          </div>
          <div className="flex flex-col col-span-5 gap-5">
            <h4 className="text-lg font-bold">رقم الجوال</h4>
            <p className="flex flex-col gap-3 text-lg leading-loose">
              <span className="block text-lg">+966 5056379</span>
              <span className="block text-lg">+966 5056379</span>
            </p>
          </div>
          <div className="flex flex-col col-span-7 gap-5">
            <h4 className="text-lg font-bold">البريد الالكتروني</h4>
            <p className="text-lg">ceo@admin.com</p>
          </div>
          <div className="flex flex-col col-span-5 gap-5">
            <h4 className="text-lg font-bold">السوشيال ميديا</h4>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-3">
                <div className="grid size-10 bg-[#01AB9D] rounded-md place-items-center">
                  <FaceBookIcon />
                </div>
                <div className="grid size-10 bg-[#01AB9D] rounded-md place-items-center">
                  <YoutubeIcon />
                </div>
                <div className="grid size-10 bg-[#01AB9D] rounded-md place-items-center">
                  <TwitterIcon />
                </div>
                <div className="grid size-10 bg-[#01AB9D] rounded-md place-items-center">
                  <LinkedInIcon />
                </div>
                <div className="grid size-10 bg-[#01AB9D] rounded-md place-items-center">
                  <InstagramIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-5">
        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-3">
            <label htmlFor="name" className="text-[17px] text-[#4D5D5D]">
              الإسم
            </label>
            <input
              id="name"
              className="outline-none bg-[#EDF1F5] p-2 w-full rounded-md"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="email" className="text-[17px] text-[#4D5D5D]">
              البريد
            </label>
            <input
              id="email"
              type="email"
              className="outline-none bg-[#EDF1F5] p-2 w-full rounded-md"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="subject" className="text-[17px] text-[#4D5D5D]">
              الموضوع
            </label>
            <input
              id="subject"
              className="outline-none bg-[#EDF1F5] p-2 w-full rounded-md"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="message" className="text-[17px] text-[#4D5D5D]">
              الرسالة
            </label>
            <textarea
              id="message"
              className="outline-none bg-[#EDF1F5] p-2 w-full rounded-md"
              rows="5"
            ></textarea>
          </div>
          <button className="bg-[#01AB9D] text-white flex items-center justify-between w-44 rounded-md p-3">
            <span className="text-lg font-bold">إرسال</span>
            <ArrowDashIcon />
          </button>
        </form>
      </div>
    </section>
  );
};

export default HomeContact;
