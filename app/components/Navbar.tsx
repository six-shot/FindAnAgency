"use client";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { TbMenu } from "react-icons/tb";
import NavLinks from "./NavLinks";
import Link from "next/link";
import logo from "@/public/top-logo-for-find-an-agency-blackk.png";
import Image from "next/image";
function Navbar() {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="fixed top-[5%] w-full z-50">
      <div className="max-w-[1440px] mx-auto ">
        <div className=" px-[3%] 2xl:px-0">
          <div className="w-full h-[63px] bg-white rounded-[50px] flex justify-between items-center  text-black xl:px-10 px-6">
            {toggle ? (
              <div
                className={`${
                  toggle ? "flex w-full justify-between items-center" : "hidden"
                }   bottom`}
              >
                <div className="silka uppercase font-bold">
                  <Link href="/">
                    <Image
                      src={logo}
                      className="xl:w-[150px] w-[180px]"
                      alt="logo"
                    />
                  </Link>
                </div>
                <nav>
                  <ul className="sm:flex items-center hidden text-xs text-[#2F2F2F] font-silka gap-12  font-semibold">
                    <li>Home</li>
                    <NavLinks />
                    <li>Blog</li> <li>Contact </li>
                  </ul>
                </nav>
                <div className="flex items-center xl:gap-14 gap-5">
                  <button className="sm:flex hidden text-xs py-3.5 px-10 font-silka font-medium text-white bg-[#000] rounded-[50px]">
                    Add  Listing
                  </button>
                  <IconContext.Provider value={{ size: "25px" }}>
                    <FiSearch onClick={handleToggle} />
                  </IconContext.Provider>
                  <IconContext.Provider value={{ size: "25px" }}>
                    <TbMenu className="sm:hidden flex" />
                  </IconContext.Provider>
                </div>
              </div>
            ) : (
              <div
                className={`${
                  toggle ? "hidden" : "flex w-full justify-between items-center"
                }  sidebar`}
              >
                <div className="flex sm:gap-12 gap-2 items-center w-full h-full ">
                  <div className="w-[75vw]  border-[1px] border-[#F3F3F3] h-[45px] rounded-[50px] ">
                    <input
                      className="w-full h-full px-2 rounded-[50px]"
                      type="text"
                    />
                  </div>
                  <div className="flex items-center gap-3 sm:gap-14">
                    <button className="text-xs py-3.5 px-8 font-silka font-medium text-white bg-[#000] rounded-[50px]">
                      Search
                    </button>
                    <IconContext.Provider value={{ size: "25px" }}>
                      <AiOutlineClose onClick={handleToggle} />
                    </IconContext.Provider>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
