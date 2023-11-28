"use client";
import Image from "next/image";
import { useState } from "react";
import logo from "@/public/top-logo-for-find-an-agency-blackk.png";
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
            ? "bg-white w-full flex justify-between items-center fixed top-0 px-14 h-[80px]"
            : "bg-white w-full flex justify-between items-center fixed top-0 px-14 h-[80px]"
        }
      >
        <Image src={logo} className="xl:w-[200px]" alt="logo" />
        <nav>
          <ul className="flex gap-5 font-nunito text-[#999999] ">
            <li>Home</li>
            <li>Search By Industry</li>
            <li>Search By Location</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
