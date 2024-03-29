// import Image from "next/image";
// import bottom from "@/public/bottom.png";
// import Search from "./Search";
// import dynamic from "next/dynamic";
// import MyTabs from "./Tab";
// import Navbar from "./Navbar";
// import Nav from "./Nav";
// export default function Hero() {
  
//   return (
//     <div>
//       <Nav />
//       yyyy
//       <div
//         className="relative bg-cover bg-top bg-no-repeat h-[80vh]  w-full  overflow-hidden flex items-center  "
//         style={{
//           backgroundImage: `linear-gradient(90deg, rgba(2, 31, 53, 0.5) 0%, rgba(123, 163, 29, 0.5)), url("/hero.png")`,
//         }}
//       >
//         <div className="flex flex-col gap-10 w-full justify-center items-center px-4 ">
//           <h1 className=" flex justify-center items-center w-full font-playfair text-white xl:text-[60px] text-[30px]  text-center sm:leading-[63px] leading-[35px]">
//             The most comprehensive listing of
//             <br className="sm:flex hidden" /> marketing agencies in Nigeria
//           </h1>
//           <Search />
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import React from "react";


function Hero() {
  return (
    <div className="h-screen ">
      <div className="h-[100vh] relative w-full  bg-black text-white  ">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-black">
          <video
            className="min-h-full min-w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] object-cover"
            autoPlay
            loop
            muted
          >
            <source src="bg1.mp4" type="video/mp4"></source>
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        </div>
        <div className=""></div>
        <div className="  flex w-full h-full justify-center flex-col items-center ">
          <h1 className="font-silka font-bold xl:text-[56px] capitalize text-[26px] px-[5%]   text-center xl:leading-[56px] mt-[10%] leading-[32px] z-10">
            The most comprehensive listing of <br className="sm:flex hidden" />{" "}
            marketing agencies in Nigeria
          </h1>
          <p className="text-white silka sm:w-[700px] xl:text-base text-sm px-[5%]  font-medium text-center xl:my-10 my-5  z-10">
            This comprehensive resource serves as a valuable directory for
            businesses seeking specialized marketing services, offering a broad
            spectrum of agencies with varying expertise, ensuring a one-stop
            reference for navigating the dynamic marketing landscape in Nigeria.
          </p>
          <button className="text-xs py-3.5 px-8 font-silka font-medium text-white bg-[#192dad] rounded-[50px] z-10">
            Find Agency
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;