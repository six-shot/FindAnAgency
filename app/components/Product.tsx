
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
      <main className="h-screen bg-black">
        {/* <Earth /> */}
        <Projects />
      </main>
    </SmoothScroll>
  );
}
