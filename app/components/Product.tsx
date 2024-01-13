
import React from "react";
import dynamic from "next/dynamic";

import Projects from "./category/projects";
import SmoothScroll from "./category/smoothscroll";



// const Earth = dynamic(() => import('@/components/earth'), {
//   ssr: false,
//   loading: () => <img src="/assets/placeholder.png"></img>
// })

export default function Product() {
  return (
    <SmoothScroll>
      <main className="h-[175vh]">
    <h3 className="uppercase font-silka font-bold text-[30px] text-center mb-10 mt-5">Services available</h3>
        <Projects />
        
      </main>
    </SmoothScroll>
  );
}
