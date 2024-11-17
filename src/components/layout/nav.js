"use client";

import Link from "next/link";
import LogoIcon from "../icons/logo-icon";
import BurgerMenu from "../icons/burger-menu";
import Lists from "./lists";
import SideMenu from "./side-menu";
import { useState } from "react";

const Nav = () => {
  const [side, setSide] = useState(false);
  return (
    <nav className="flex items-center justify-between w-11/12 py-6 mx-auto max-md:py-3">
      <Link href="/">
        <LogoIcon className="max-md:w-24 max-md:h-12" />
      </Link>
      <Lists />
      <button
        onClick={() => setSide(true)}
        className="hidden max-md:block"
        aria-label="Burger Menu"
      >
        <BurgerMenu />
      </button>
      {side && <SideMenu setSide={setSide} />}
    </nav>
  );
};

export default Nav;
