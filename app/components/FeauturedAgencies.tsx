"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import { Button } from "./buttons/Button";
import Link from "next/link";



export default function FeaturedAgencies() {
  const [agency, setAgency] = useState<Task[]>([]);

  useEffect(() => {
    const fetchAgencies = async () => {
      const res = await fetch("https://gind-agencies.onrender.com/api/agency");
      const responseData = await res.json();

      const data = responseData.data;
      setAgency(data);
    };
    fetchAgencies();
  });

  return (
    <div className="bg-[#e1e4f7] py-20 mt-20">
      <div className="max-w-[1440px] mx-auto  ">
        <div className="flex justify-center items-center flex-col gap-10">
          <h2 className="text-[#444444c7] font-bold font-poppins text-[27px] text-center px-4">
            Featured Agencies In Nigeria
          </h2>

          {/* <div className="">
            {agency.length > 0 && (
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
          <Button>See All Agencies</Button>
        </div>
      </div>
    </div>
  );
}
