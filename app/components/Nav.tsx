"use client"
import React, { useState } from "react";
import Link from "next/link"
import NavLinks from "./NavLinks";
import logo from "@/public/top-logo-for-find-an-agency-blackk.png";
import Image from "next/image";
const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="flex items-center text-[18px] justify-between h-24 max-w-[1440px] mx-auto border-b border-gray-300 ">
        <Link href="/">
          <Image src={logo} className="xl:w-[200px] w-[180px]" alt="logo" />
        </Link>
        <ul className="md:flex hidden  items-center gap-3  text-[#999999]">
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Blog
            </Link>
          </li>{" "}
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500  ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
