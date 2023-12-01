import Image from "next/image";
import React from "react";
import acumen from "@/public/acumen.png";
import { Button } from "./buttons/Button";

export default function FeauturedAgencies() {
  return (
    <div className="bg-[#e1e4f7] py-20 mt-20">
      <div className="max-w-[1440px] mx-auto  ">
        <div className="flex justify-center items-center flex-col gap-10">
          <h2 className="text-[#444444c7] font-bold font-poppins text-[27px] text-center">
            Featured Agencies In Nigeria
          </h2>
          <div className="grid grid-cols-3 space-y-10 space-x-5">
            <div className="bg-[#e1e4f7] hover:bg-[#ffffff34] p-3 rounded-sm">
              <div className="w-[250px] h-[100px] bg-[#e1e4f7] shadow-2xl">
                <Image src={acumen} alt="acumen" />
              </div>
              <h4 className="text-[#302f2fc7] text-2xl mt-7 my-2 font-semibold">
                Acumen
              </h4>
              <p className="text-[#444444c7] ">
                We develop interactive strategies and experiences, implementing
                projects that provide extraordinary value for brands through
                beautifully crafted designs.
              </p>
            </div>
            <div className="bg-[#e1e4f7] hover:bg-[#ffffff34] p-3 rounded-sm">
              <div className="w-[250px] h-[100px] bg-[#e1e4f7] shadow-2xl">
                <Image src={acumen} alt="acumen" />
              </div>
              <h4 className="text-[#302f2fc7] text-2xl mt-7 my-2 font-semibold">
                Acumen
              </h4>
              <p className="text-[#444444c7] ">
                We develop interactive strategies and experiences, implementing
                projects that provide extraordinary value for brands through
                beautifully crafted designs.
              </p>
            </div>
            <div className="bg-[#e1e4f7] hover:bg-[#ffffff34] p-3 rounded-sm">
              <div className="w-[250px] h-[100px] bg-[#e1e4f7] shadow-2xl">
                <Image src={acumen} alt="acumen" />
              </div>
              <h4 className="text-[#302f2fc7] text-2xl mt-7 my-2 font-semibold">
                Acumen
              </h4>
              <p className="text-[#444444c7] ">
                We develop interactive strategies and experiences, implementing
                projects that provide extraordinary value for brands through
                beautifully crafted designs.
              </p>
            </div>
            <div className="bg-[#e1e4f7] hover:bg-[#ffffff34] p-3 rounded-sm">
              <div className="w-[250px] h-[100px] bg-[#e1e4f7] shadow-2xl">
                <Image src={acumen} alt="acumen" />
              </div>
              <h4 className="text-[#302f2fc7] text-2xl mt-7 my-2 font-semibold">
                Acumen
              </h4>
              <p className="text-[#444444c7] ">
                We develop interactive strategies and experiences, implementing
                projects that provide extraordinary value for brands through
                beautifully crafted designs.
              </p>
            </div>
            <div className="bg-[#e1e4f7] hover:bg-[#ffffff34] p-3 rounded-sm">
              <div className="w-[250px] h-[100px] bg-[#e1e4f7] shadow-2xl">
                <Image src={acumen} alt="acumen" />
              </div>
              <h4 className="text-[#302f2fc7] text-2xl mt-7 my-2 font-semibold">
                Acumen
              </h4>
              <p className="text-[#444444c7] ">
                We develop interactive strategies and experiences, implementing
                projects that provide extraordinary value for brands through
                beautifully crafted designs.
              </p>
            </div>
            <div className="bg-[#e1e4f7] hover:bg-[#ffffff34] p-3 rounded-sm">
              <div className="w-[250px] h-[100px] bg-[#e1e4f7] shadow-2xl">
                <Image src={acumen} alt="acumen" />
              </div>
              <h4 className="text-[#302f2fc7] text-2xl mt-7 my-2 font-semibold">
                Acumen
              </h4>
              <p className="text-[#444444c7] ">
                We develop interactive strategies and experiences, implementing
                projects that provide extraordinary value for brands through
                beautifully crafted designs.
              </p>
            </div>
          </div>
          <Button>See All Agencies</Button>
        </div>
      </div>
    </div>
  );
}
