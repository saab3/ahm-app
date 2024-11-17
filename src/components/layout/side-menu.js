import useOnClickOutside from "@/hooks/useOnClickOutside";
import { useRef } from "react";
import Lists from "./lists";

const SideMenu = ({ setSide }) => {
  const sideRef = useRef(null);
  useOnClickOutside(sideRef, () => setSide(false));
  return (
    <div className="fixed top-0 w-screen h-screen bg-black start-0 bg-opacity-60 z-[500]">
      <div ref={sideRef} className="h-full p-4 bg-white w-80">
        <Lists isResponsive setSide={setSide} />
      </div>
    </div>
  );
};

export default SideMenu;
