"use client";
import Image from "next/image";
import { useState } from "react";
import logo from "@/public/top-logo-for-find-an-agency-blackk.png";
import { RiMenu2Line } from "react-icons/ri";
import Link from "next/link";
import * as FiIcons from "react-icons/fi";
import * as PiIcons from "react-icons/pi";
export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex max-w-[1440px] mx-auto   ">
      <header className="flex w-full justify-between items-center py-6 border-b px-5 border-gray-300  ">
        {" "}
        <Link href="/">
          <Image src={logo} className="xl:w-[200px] w-[180px]" alt="logo" />
        </Link>
        <nav className="sm:flex hidden">
          <ul className="flex gap-5  text-[#999999] ">
            <li className="font-nunito">Home</li>
            <li className="font-nunito">Search By Industry</li>

            <div className="relative">
              <div
                className="flex items-center gap-1   "
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <h6 className="cursor-pointer">Resources</h6>
                {!isOpen ? (
                  <PiIcons.PiCaretDownBold />
                ) : (
                  <PiIcons.PiCaretUpBold />
                )}
              </div>
              {isOpen && (
                <div className="absolute bg-white shadow-[0_4px_6px_-2px_rgba(0,0,0,0.3)] rounded-[4px] top-10 z-10 flex col items-start p-5  ">
                  <div className="flex flex-col w-[200px] ">
                    <div
                      className="flex  flex-col "
                      onClick={() => setIsOpen((prev) => !prev)}
                    >
                      <h6 className="  hover:bg-blue-400 hover:text-white cursor-pointer border-l-transparent hover:border-l-white border-l-4 p-[1px]  w-[200px]">
                        Abuja
                      </h6>
                      <h6 className="hover:bg-blue-400 cursor-pointer hover:text-white border-l-transparent hover:border-l-white border-l-4 p-[1px]  w-[200px]">
                        Anambra
                      </h6>
                      <Link href="/agency/location/lagos-island">
                        <h6 className="hover:bg-blue-400 cursor-pointer hover:text-white border-l-transparent hover:border-l-white border-l-4 p-[1px]  w-[200px]">
                          Lagos Island
                        </h6>
                      </Link>
                      <h6 className="hover:bg-blue-400 cursor-pointer hover:text-white border-l-transparent hover:border-l-white border-l-4 p-[1px]  w-[200px]">
                        Lagos Mainland
                      </h6>
                    </div>
                  </div>
                </div>
              )}
            </div>
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
