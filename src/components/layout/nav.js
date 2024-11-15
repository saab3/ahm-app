import Link from "next/link";
import LogoIcon from "../icons/logo-icon";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between w-11/12 py-6 mx-auto">
      <Link href="/">
        <LogoIcon />
      </Link>
      <ul className="flex items-center gap-14">
        <li className="cursor-pointer text-[#01AB9D] hover:text-[#01AB9D] transition-all duration-500">
          <a href="#">الرئيسية</a>
        </li>
        <li className="cursor-pointer hover:text-[#01AB9D] transition-all duration-500">
          <a href="#section-why-us">لماذا نحن</a>
        </li>
        <li className="cursor-pointer hover:text-[#01AB9D] transition-all duration-500">
          <a href="#section-initiatives">المبادرات</a>
        </li>
        <li className="cursor-pointer hover:text-[#01AB9D] transition-all duration-500">
          <a href="#section-vision">الرؤية والقيم</a>
        </li>
        <li className="cursor-pointer hover:text-[#01AB9D] transition-all duration-500">
          <a href="#section-contact-us">اتصل بنا</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
