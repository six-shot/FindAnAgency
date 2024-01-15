"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import { Button } from "./buttons/Button";
import Link from "next/link";
import { navLinks } from "../api/Data";
import { staggerContainer, textVariant, fadeIn } from "@/app/api/Motion";
import { motion } from "framer-motion";
export default function FeaturedAgencies() {
  // const [agency, setAgency] = useState<Task[]>([]);

  // useEffect(() => {
  //   const fetchAgencies = async () => {
  //     const res = await fetch("https://gind-agencies.onrender.com/api/agency");
  //     const responseData = await res.json();

  //     const data = responseData.data;
  //     setAgency(data);
  //   };
  //   fetchAgencies();
  // });

  return (
    <motion.div
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="bg-[#e1e4f7] py-20 mt-20"
    >
      <div className="max-w-[1440px] mx-auto  px-[5%] 2xl:px-0">
        <div className="flex justify-center items-center flex-col gap-10">
          <h2 className="text-[#000000] font-medium uppercase  font-silka text-[36px] text-center px-4 ">
            Featured Agencies In Nigeria
          </h2>
          <div className="grid sm:grid-cols-3 grid-cols-1 w-full space-y-10 space-x-5">
            {navLinks.map((navLink) => {
              return (
                <Link href={`/agency/${navLink.id}`} key={navLink.id}>
                  <motion.div
                    variants={fadeIn("up", "tween", 0.2, 1)}
                    className="bg-[#e1e4f7] p-3  rounded-sm"
                  >
                    <div className="w-[250px] h-[100px] bg-[#e1e4f7] ">
                      <Image
                        src={navLink.logo}
                        width={600}
                        height={600}
                        alt="logo"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h4 className="text-[#302f2fc7] text-[20px] mt-7 my-2 font-semibold font-silka">
                      {navLink.name}
                    </h4>
                    <p className="text-[#444444c7] line-clamp-3 font-silka">
                      {navLink.about}
                    </p>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* <div className="">
            {
              agency.length > 0 && (
              <div className="grid grid-cols-3 space-y-10 space-x-5">
                {agency.map((task) => (
                  <Link href={`/agency/${task.id}`} key={task.id}>
                    <div
                      className="bg-[#e1e4f7] hover:bg-[#ffffff34] p-3  rounded-sm"
              
                    >
                      <div className="w-[250px] h-[100px] bg-[#e1e4f7] shadow-2xl">
                        <Image
                          src={task.data.logoURL}
                          width={600}
                          height={600}
                          alt="logo"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <h4 className="text-[#302f2fc7] text-2xl mt-7 my-2 font-semibold">
                        {task.data.name}
                      </h4>
                      <p className="text-[#444444c7] line-clamp-3 ">
                        {task.data.about}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div> */}
          <Link href="/business-directory">
            <Button>See All Agencies</Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
