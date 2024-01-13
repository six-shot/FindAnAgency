import React from "react";

import Image from "next/image";

function Explore() {
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center text-center my-[5%] px-6 ">
        <h3 className="sm:text-[40px] text-[30px] sm:leading-[45px] leading-[40px] font-bold silka">
          Trusted and Comprehensive <br /> Agencies
        </h3>
        <p className="text-black silka sm:w-[700px]  font-medium text-center mt-10">
          The ultimate compilation of advertising agencies in Nigeria offers an
          extensive and diverse directory of top-notch firms throughout the
          country. This comprehensive resource serves as a valuable guide for
          businesses in search of specialized advertising services, presenting a
          wide array of agencies with diverse expertise. It serves as a go-to
          reference for navigating the dynamic advertising landscape in Nigeria.
        </p>
        <button className=" mt-10 text-[13px] py-3.5 px-10 silka font-medium text-white bg-[#192dad] rounded-[50px]">
          Explore Now
        </button>
      </div>
    </div>
  );
}

export default Explore;
