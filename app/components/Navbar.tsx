"use client";
import Image from "next/image";
import { useState } from "react";
import logo from "@/public/top-logo-for-find-an-agency-blackk.png";
import { RiMenu2Line } from "react-icons/ri";
import Link from "next/link";
import * as FiIcons from "react-icons/fi";
import * as PiIcons from "react-icons/pi";
import { TbMenu } from "react-icons/tb";
import { IconContext } from "react-icons";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [toggle, setToggle] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDrop, setIsOpenDrop] = useState(false);
  return (
    <div className="flex max-w-[1440px] mx-auto   ">
      <header className="flex w-full justify-between items-center sm:py-6 py-3 border-b px-5 border-gray-300  ">
        {" "}
        <Link href="/">
          <Image src={logo} className="xl:w-[200px] w-[180px]" alt="logo" />
        </Link>
        <nav className="sm:flex hidden">
          <ul className="flex gap-5  text-[#999999] ">
            <li className="font-nunito">Home</li>

            <div className="relative">
              <div
                className="flex items-center gap-1   "
                onClick={() => setIsOpenDrop((prev) => !prev)}
              >
                <h6 className="cursor-pointer">Search By Industry</h6>
                {!isOpenDrop ? (
                  <PiIcons.PiCaretDownBold />
                ) : (
                  <PiIcons.PiCaretUpBold />
                )}
              </div>
              {isOpenDrop && (
                <div className="absolute bg-white shadow-[0_4px_6px_-2px_rgba(0,0,0,0.3)] rounded-[4px] top-10 z-10 flex col items-start p-5  ">
                  <div className="flex flex-col w-[200px] ">
                    <div
                      className="flex  flex-col "
                      onClick={() => setIsOpen((prev) => !prev)}
                    >
                      <h6 className="  hover:bg-blue-400 hover:text-white cursor-pointer border-l-transparent hover:border-l-white border-l-4 p-[1px]  w-[200px]">
                        Digital Agencies
                      </h6>
                      <h6 className="hover:bg-blue-400 cursor-pointer hover:text-white border-l-transparent hover:border-l-white border-l-4 p-[1px]  w-[200px]">
                        Traditional Agencies
                      </h6>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <div
                className="flex items-center gap-1   "
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <h6 className="cursor-pointer">Search By Location</h6>
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
                      <Link href="/agency/location/lagos-mainland">
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
        <div className="flex items-end justify-end py-5 px-4 sm:hidden">
          {" "}
          <div className=" " onClick={() => setToggle(!toggle)}>
            <IconContext.Provider value={{ size: "25px", color: "black" }}>
              {" "}
              {toggle ? (
                <IoClose className="text-[25px] " />
              ) : (
                <RiMenu2Line className="text-[25px]" />
              )}{" "}
            </IconContext.Provider>
          </div>
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } sidebar absolute left-0  top-0 z-[999]  w-full  rounded-xl bg-[#1354F0] px-2 shadow-2xl `}
          >
            <div
              className="absolute left-0 top-0 h-screen w-full "
              onClick={() => setToggle(!toggle)}
            >
              <div className="relative z-[999] flex h-screen w-full  flex-col bg-[#1354F0] px-4  py-5">
                <div className="flex items-end justify-end">
                  {" "}
                  <div >
                    <IconContext.Provider
                      value={{ size: "25px", color: "white" }}
                    >
                      <IoClose className="text-[25px] text-black" />
                    </IconContext.Provider>
                  </div>
                </div>
                <div className="px-7">
                  <nav className="">
                    <ul className="flex flex-col gap-5  text-[#999999] ">
                      <li className="font-nunito">Home</li>

                      <div className="relative">
                        <div
                          className="flex items-center gap-1   "
                          onClick={() => setIsOpenDrop((prev) => !prev)}
                        >
                          <h6 className="cursor-pointer">Search By Industry</h6>
                          {!isOpenDrop ? (
                            <PiIcons.PiCaretDownBold />
                          ) : (
                            <PiIcons.PiCaretUpBold />
                          )}
                        </div>
                        {isOpenDrop && (
                          <div className="absolute bg-white shadow-[0_4px_6px_-2px_rgba(0,0,0,0.3)] rounded-[4px] top-10 z-10 flex col items-start p-5  ">
                            <div className="flex flex-col w-[200px] ">
                              <div
                                className="flex  flex-col "
                                onClick={() => setIsOpen((prev) => !prev)}
                              >
                                <h6 className="  hover:bg-blue-400 hover:text-white cursor-pointer border-l-transparent hover:border-l-white border-l-4 p-[1px]  w-[200px]">
                                  Digital Agencies
                                </h6>
                                <h6 className="hover:bg-blue-400 cursor-pointer hover:text-white border-l-transparent hover:border-l-white border-l-4 p-[1px]  w-[200px]">
                                  Traditional Agencies
                                </h6>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="relative">
                        <div
                          className="flex items-center gap-1   "
                          onClick={() => setIsOpen((prev) => !prev)}
                        >
                          <h6 className="cursor-pointer">Search By Location</h6>
                          {!isOpen ? (
                            <PiIcons.PiCaretDownBold />
                          ) : (
                            <PiIcons.PiCaretUpBold />
                          )}
                        </div>
                        {isOpen && (
                          <div className="absolute bg-white shadow-[0_4px_6px_-2px_rgba(0,0,0,0.3)] rounded-[4px] top-10 z-10 flex col items-start p-5  ">
                            <div className="flex flex-col sm:w-[200px] w-full ">
                              <div
                                className="flex  flex-col "
                                onClick={() => setIsOpen((prev) => !prev)}
                              >
                                <h6 className="  hover:bg-blue-400 hover:text-white cursor-pointer border-l-transparent hover:border-l-white border-l-4 p-[1px] w-full sm:w-[200px]">
                                  Abuja
                                </h6>
                                <h6 className="hover:bg-blue-400 cursor-pointer hover:text-white border-l-transparent hover:border-l-white border-l-4 p-[1px]  w-[200px]">
                                  Anambra
                                </h6>
                                <Link href="/agency/location/lagos-mainland">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <header className="bg-white w-full flex justify-between items-center fixed top-0 xl:px-14 z-[999]  px-5 2xl:px-0 h-[60px] sm:h-[80px]">
       
      </header> */}
    </div>
  );
}
