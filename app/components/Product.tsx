
import React from "react";
import dynamic from "next/dynamic";

import Projects from "./category/projects";
import SmoothScroll from "./category/smoothscroll";
import Projects2 from "./Project2";


// const Earth = dynamic(() => import('@/components/earth'), {
//   ssr: false,
//   loading: () => <img src="/assets/placeholder.png"></img>
// })

export default function Product() {
  return (
    <SmoothScroll>
      <main className="h-[55vh] bg-[#e1e4f7]">
    <h3 className="uppercase font-silka font-bold text-[30px] text-center mb-5">Services available</h3>
        <Projects />
        <Projects2/>
      </main>
    </SmoothScroll>
  );
}
