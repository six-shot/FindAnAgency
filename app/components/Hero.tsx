import Image from "next/image";
import bottom from "@/public/bottom.png";
import Search from "./Search";
import dynamic from "next/dynamic";
import MyTabs from "./Tab";
import Navbar from "./Navbar";
export default function Hero() {
  
  return (
    <div>
      <div
        className="relative bg-cover bg-top bg-no-repeat h-[80vh]  w-full  overflow-hidden flex items-center  "
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(2, 31, 53, 0.5) 0%, rgba(123, 163, 29, 0.5)), url("/hero.png")`,
        }}
      >
     
        <div className="flex flex-col gap-10 w-full justify-center items-center px-4 ">
          <h1 className=" flex justify-center items-center w-full font-playfair text-white xl:text-[60px] text-[30px]  text-center sm:leading-[63px] leading-[35px]">
            The most comprehensive listing of
            <br className="sm:flex hidden" /> marketing agencies in Nigeria
          </h1>
          <Search />
        </div>
      </div>
    
    </div>
  );
}
