"use client";
import Image from "next/image";
import { useState } from "react";
import logo from "@/public/top-logo-for-find-an-agency-blackk.png";
import { RiMenu2Line } from "react-icons/ri";
export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);
  return (
    <div className="flex ">
      <header
        className={
          navbar
            ? "bg-white w-full flex justify-between items-center fixed top-0 xl:px-14 z-[999]  px-5 h-[60px] sm:h-[80px]  "
            : "bg-white w-full flex justify-between items-center fixed top-0 xl:px-14 z-[999]   px-5 h-[60px] sm:h-[80px]  "
        }
      >
        <Image src={logo} className="xl:w-[200px] w-[180px]" alt="logo" />

        <nav className="sm:flex hidden">
          <ul className="flex gap-5  text-[#999999] ">
            <li className="font-nunito">Home</li>
            <li className="font-nunito">Search By Industry</li>
            <li>Search By Location</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="sm:hidden flex">
          <RiMenu2Line className="text-[25px]" />
        </div>
      </header>
    </div>
  );
}
