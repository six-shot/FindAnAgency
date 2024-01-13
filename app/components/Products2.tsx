import React from "react";
import dynamic from "next/dynamic";

import SmoothScroll from "./category/smoothscroll";
import Projects2 from "./Project2";

// const Earth = dynamic(() => import('@/components/earth'), {
//   ssr: false,
//   loading: () => <img src="/assets/placeholder.png"></img>
// })

export default function Products2() {
  return (
    <SmoothScroll>
      <main className="bg-[#e1e4f7] h-[55vh]">
        <Projects2 />
      </main>
    </SmoothScroll>
  );
}
