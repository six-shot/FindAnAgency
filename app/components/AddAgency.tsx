"use client"
import Image from "next/image";
import { Button } from "./buttons/Button";
import city from "@/public/city-image.png";
import Link from "next/link";
import MyModal from "./Modal";

export default function AddAgency() {
  return (
    <div className=" my-28 px-4">
      <div className="flex justify-center flex-col items-center">
        <h5 className="font-bold text-lg text-[#302f2fc7] ">Add an Agency</h5>
        <h1 className="font-bold text-[36px] text-[#302f2fc7] pb-8 font-nunito ">
          Want To List Your Agency?
        </h1>

        <MyModal />
      </div>
    </div>
  );
}
