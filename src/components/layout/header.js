import CallIcon from "../icons/call-icon";
import FaceBookIcon from "../icons/facebook-icon";
import InstagramIcon from "../icons/instagram-icon";
import LinkedInIcon from "../icons/linked-in-icon";
import SMSIcon from "../icons/sms-icon";
import TwitterIcon from "../icons/twitter-icon";
import YoutubeIcon from "../icons/youtube-icon";

const Header = () => {
  return (
    <header className="bg-[#01AB9D] text-white py-3 px-6 flex items-center justify-between w-11/12 mx-auto rounded-b-xl">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <SMSIcon className="size-[18px]" />
          <span>seo@admin.com</span>
        </div>
        <span className="text-[#D6D1D1]"> | </span>
        <div className="flex items-center gap-3">
          <CallIcon className="size-4" />
          <bdi>+9665056379</bdi>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <FaceBookIcon />
        <span className="text-[#D6D1D1]"> | </span>
        <YoutubeIcon />
        <span className="text-[#D6D1D1]"> | </span>
        <TwitterIcon />
        <span className="text-[#D6D1D1]"> | </span>
        <LinkedInIcon />
        <span className="text-[#D6D1D1]"> | </span>
        <InstagramIcon />
      </div>
    </header>
  );
};

export default Header;
