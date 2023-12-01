import React from 'react'
import Image from 'next/image';
import top from "@/public/Top-10-Digital-Marketing-Agencies-In-Nigeria-1.png"
import { Button } from './buttons/Button';

export default function Ranking() {
  return (
    <div className="max-w-[1440px] mx-auto my-28 ">
      <div className="flex xl:justify-center items-center 2xl:px-0 xl:px-10 px-6">
        <div className="h-[70vh] relative xl:w-[80vw]  p-2 rounded-3xl flex justify-center items-center   bg-black text-white  ">
          <div className="absolute top-0 left-0 w-full h-full rounded-3xl overflow-hidden bg-black">
            <Image
              src={top}
              alt="top"
              className="min-h-full min-w-full absolute top-[50%] rounded-3xl left-[50%] translate-x-[-50%] translate-y-[-50%] object-cover"
            />

            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          </div>

          <div className="  flex w-full h-full justify-center flex-col items-start px-20 z-50 ">
            <h5 className=" font-bold  z-50">Agency Ranking</h5>
            <h3 className="text-[34px] z-50 leading-[34px] font-bold mt-5">
              Top 10 Digital Marketing <br /> Agencies In Nigeria (2020)
            </h3>
            <p className="text-white xl:w-[500px] text-base  font-medium  xl:mt-10 mb-10 mt-5 z-50">
              Digital Marketing is fast becoming the preferred marketing option
              for companies in Nigeria. This is unsurprising given the
              increasing number…
            </p>
            <Button>Read More &#8594;</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
