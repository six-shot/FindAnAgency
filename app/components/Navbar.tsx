"use client";
import Image from "next/image";
import { useState } from "react";
import logo from "@/public/top-logo-for-find-an-agency-blackk.png";
import { RiMenu2Line } from "react-icons/ri";
import Link from "next/link";
export default function Navbar() {
  const [navbar, setNavbar] = useState(false);


  return (
    <div className="flex max-w-[1440px] mx-auto   ">
      <header className="flex w-full justify-between items-center py-6 border-b border-gray-300  ">
        {" "}
        <Link href="/">
          <Image src={logo} className="xl:w-[200px] w-[180px]" alt="logo" />
        </Link>
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
      {/* <header className="bg-white w-full flex justify-between items-center fixed top-0 xl:px-14 z-[999]  px-5 2xl:px-0 h-[60px] sm:h-[80px]">
       
      </header> */}
    </div>
  );
}
