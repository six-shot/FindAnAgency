import Image from "next/image";
import React from "react";
import working from "../../public/working.webp";

export default function Working() {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto mt-48">
        <div className="grid grid-cols-7 justify-end items-end">
          <div className="col-span-5 ">
            <Image src={working} className="rounded-[20px]" alt="working" />
          </div>
          <div className="col-span-2 flex justify-end items-start pl-20 flex-col">
            <h4 className="font-silka sm:text-[30px] text-[20px] font-bold xl:leading-[36px] leading-[28px]">
              Top 10 Digital Marketing Agencies In Nigeria (2020)
            </h4>
            <p className="text-black  font-silka my-6 xl:my-10">
              Digital Marketing is fast becoming the preferred marketing option
              for companies in Nigeria. This is unsurprising given the
              increasing number…
            </p>
            <button className=" text-[13px] py-3.5 px-10 font-silka font-medium text-white bg-[#192dad] rounded-[50px]">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
