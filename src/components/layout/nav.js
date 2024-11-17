import Link from "next/link";
import LogoIcon from "../icons/logo-icon";
import BurgerMenu from "../icons/burger-menu";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between w-11/12 py-6 mx-auto max-md:py-3">
      <Link href="/">
        <LogoIcon className="max-md:w-24 max-md:h-12" />
      </Link>
      <ul className="flex items-center gap-14 max-md:hidden">
        <li className="cursor-pointer text-[#01AB9D] hover:text-[#01AB9D] transition-all duration-500">
          <Link href="#">الرئيسية</Link>
        </li>
        <li className="cursor-pointer hover:text-[#01AB9D] transition-all duration-500">
          <Link href="#section-why-us">لماذا نحن</Link>
        </li>
        <li className="cursor-pointer hover:text-[#01AB9D] transition-all duration-500">
          <Link href="#section-initiatives">المبادرات</Link>
        </li>
        <li className="cursor-pointer hover:text-[#01AB9D] transition-all duration-500">
          <Link href="#section-vision">الرؤية والقيم</Link>
        </li>
        <li className="cursor-pointer hover:text-[#01AB9D] transition-all duration-500">
          <Link href="#section-contact-us">اتصل بنا</Link>
        </li>
      </ul>
      <button className="hidden max-md:block" aria-label="Burger Menu">
        <BurgerMenu />
      </button>
    </nav>
  );
};

export default Nav;
