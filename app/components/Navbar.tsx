"use client";
import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { TbMenu } from "react-icons/tb";
import NavLinks from "./NavLinks";
import Link from "next/link";
import logo from "@/public/top-logo-for-find-an-agency-blackk.png";
import Image from "next/image";
import Search from "@/app/components/Search";
import MyModal from "./Modal";
import axios from "axios";
import SearchResultItem from "./SearchResults";

function Navbar() {
  const [toggle, setToggle] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const [navbar, setNavbar] = useState(false);
 useEffect(() => {
   const fetchData = async () => {
     try {
       setLoading(true); // Set loading to true before making the request
       const res = await axios.get(
         `https://gind-agencies.onrender.com/api/search?q=${searchTerm}`
       );
       setData(res?.data?.data);
     } catch (error) {
       console.error("Error fetching data:", error);
     } finally {
       setLoading(false); // Set loading to false after the request is completed
     }
   };

   if (searchTerm) {
     fetchData();
   }
 }, [searchTerm]);
  const handleSearchResultClick = () => {
    setSearchTerm(""); // Reset searchTerm when a result item is clicked
    setToggle(true); // Close the search results (if desired)
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
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <NavLinks />
                    <li>Blog</li> <li>Contact </li>
                  </ul>
                </nav>
                <div className="flex items-center xl:gap-14 gap-5">
                  <MyModal />
                  <IconContext.Provider
                    value={{ size: "25px", color: "#192dad" }}
                  >
                    <FiSearch onClick={handleToggle} />
                  </IconContext.Provider>

                  <div
                    className="sm:hidden flex"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <TbMenu className="text-black text-[25px]" />
                    ) : (
                      <TbMenu className="text-black text-[25px]" />
                    )}
                  </div>

                  <div
                    className={`${
                      navbar ? "flex" : "hidden"
                    } p-6 bg-white absolute top-12 right-0  my-2  rounded-xl sm:hidden flex sidebar z-10`}
                  >
                    <ul className="list-none flex flex-col ">
                      <li>Home</li>
                      <NavLinks />
                      <li>Blog</li> <li>Contact </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className={`${
                  toggle ? "hidden" : "flex w-full justify-between items-center"
                }  sidebar`}
              >
                <div className="flex justify-between items-center w-full h-full ">
                  {/* <div className="w-[75vw]   outline-none h-[45px] rounded-[50px] ">
                    <input
                      className="w-full h-full px-2 rounded-[50px] font-silka placeholder:text-[#192dad] placeholder:text-xs pl-5"
                      type="text"
                      placeholder="Search a listing"
                    />
                  </div> */}
                  <div className="border-[1px] border-[#192dad] rounded-[50px]  w-full flex items-center h-[45px]">
                    <input
                      id="searchInput"
                      className="bg-transparent pl-3 w-full h-full outline-none"
                      type="text"
                      placeholder="Search here..."
                      onChange={(event) => {
                        setSearchTerm(event.target.value);
                      }}
                    />
                    {loading && <span className="loader pr-5"></span>}
                  </div>
                  <div className="flex items-center gap-3 sm:gap-14">
                    {/* <button className="text-xs py-3.5 px-8 font-silka font-medium text-white bg-[#192dad] rounded-[50px]">
                      Search
                    </button> */}
                    <IconContext.Provider
                      value={{ size: "25px", color: "#192dad" }}
                    >
                      <AiOutlineClose onClick={handleToggle} />
                    </IconContext.Provider>
                  </div>
                </div>
              </div>
            )}
          </div>

          {searchTerm && (
            <div className="template_Container">
              {data
                .filter((val) => {
                  if (searchTerm === "") {
                    return true;
                  } else if (
                    val.name.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return true;
                  }
                  return false;
                })
                .map((val) => {
                  return (
                    <SearchResultItem
                      key={val.id}
                      name={val.name}
                      about={val.about}
                      logoURL={val.logoURL}
                      id={val.id}
                      onClick={handleSearchResultClick} // Pass the callback function
                    />
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
