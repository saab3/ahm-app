import Link from "next/link";

const Lists = ({ isResponsive = false, setSide }) => {
  return (
    <ul
      className={`flex ${
        isResponsive ? "flex-col gap-5" : "items-center gap-14 max-md:hidden"
      }`}
    >
      <li className="cursor-pointer text-[#01AB9D] hover:text-[#01AB9D] transition-all duration-500">
        <Link href="#" onClick={() => (isResponsive ? setSide(false) : null)}>
          الرئيسية
        </Link>
      </li>
      <li className="cursor-pointer hover:text-[#01AB9D] transition-all duration-500">
        <Link
          href="#section-why-us"
          onClick={() => (isResponsive ? setSide(false) : null)}
        >
          لماذا نحن
        </Link>
      </li>
      <li className="cursor-pointer hover:text-[#01AB9D] transition-all duration-500">
        <Link
          href="#section-initiatives"
          onClick={() => (isResponsive ? setSide(false) : null)}
        >
          المبادرات
        </Link>
      </li>
      <li className="cursor-pointer hover:text-[#01AB9D] transition-all duration-500">
        <Link
          href="#section-vision"
          onClick={() => (isResponsive ? setSide(false) : null)}
        >
          الرؤية والقيم
        </Link>
      </li>
      <li className="cursor-pointer hover:text-[#01AB9D] transition-all duration-500">
        <Link
          href="#section-contact-us"
          onClick={() => (isResponsive ? setSide(false) : null)}
        >
          اتصل بنا
        </Link>
      </li>
    </ul>
  );
};

export default Lists;
