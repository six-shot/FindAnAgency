import Image from "next/image";
import Navbar from "../components/Navbar";
import hero from "@/public/hero.png";
import Search from "./Search";
import dynamic from "next/dynamic";
export default function Hero() {
  const DynamicHeader = dynamic(() => import("../components/Navbar"), {
    ssr: false,
  });
  return (
    <div
      className="relative bg-cover bg-top bg-no-repeat h-[80vh]  w-full  overflow-hidden flex items-center "
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(2, 31, 53, 0.5) 0%, rgba(123, 163, 29, 0.5)), url("/hero.png")`,
      }}
    >
      <DynamicHeader />
      <div className="flex flex-col gap-10 w-full justify-center items-center">
        <h1 className="z-[999] flex justify-center items-center w-full font-play_fair text-white text-[60px] text-center leading-[63px]">
          The most comprehensive listing of
          <br /> marketing agencies in Nigeria
        </h1>
        <Search />
      </div>
    </div>
  );
}
