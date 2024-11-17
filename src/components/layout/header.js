import CallIcon from "../icons/call-icon";
import FaceBookIcon from "../icons/facebook-icon";
import InstagramIcon from "../icons/instagram-icon";
import LinkedInIcon from "../icons/linked-in-icon";
import SMSIcon from "../icons/sms-icon";
import TwitterIcon from "../icons/twitter-icon";
import YoutubeIcon from "../icons/youtube-icon";

const Header = () => {
  return (
    <header className="bg-[#01AB9D] text-white py-3 max-md:py-1.5 px-6 max-md:px-2 flex items-center justify-between md:w-11/12 mx-auto md:rounded-b-xl">
      <div className="flex items-center gap-4 max-md:gap-1">
        <div className="flex items-center gap-3 max-md:gap-1">
          <SMSIcon className="size-[18px] max-md:size-3.5" />
          <span className="max-md:text-sm max-sm:text-xs">seo@admin.com</span>
        </div>
        <span className="text-[#D6D1D1]"> | </span>
        <div className="flex items-center gap-3 max-md:gap-1">
          <CallIcon className="size-4 max-md:size-2.5" />
          <bdi className="max-md:text-sm max-sm:text-xs">+9665056379</bdi>
        </div>
      </div>
      <div className="flex items-center gap-3 max-md:gap-2">
        <FaceBookIcon className="max-md:size-3.5 max-sm:size-3" />
        <span className="text-[#D6D1D1] max-sm:hidden"> | </span>
        <YoutubeIcon className="max-md:size-3.5 max-sm:size-3" />
        <span className="text-[#D6D1D1] max-sm:hidden"> | </span>
        <TwitterIcon className="max-md:size-3.5 max-sm:size-3" />
        <span className="text-[#D6D1D1] max-sm:hidden"> | </span>
        <LinkedInIcon className="max-md:size-3.5 max-sm:size-3" />
        <span className="text-[#D6D1D1] max-sm:hidden"> | </span>
        <InstagramIcon className="max-md:size-3.5 max-sm:size-3" />
      </div>
    </header>
  );
};

export default Header;
