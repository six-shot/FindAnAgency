"use client";
import React, { FC, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import wow from "../../public/woweffect.jpg";
import Image from "next/image";

interface Card {
  url: string;
  title: string;
  id: number;
  name:string;
  about:string
}

const Example: FC = () => {
  return (
    <div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel: FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

interface CardProps {
  card: Card;
}

const Card: FC<CardProps> = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden "
    >
      {/* <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div> */}
      <div className="bg-[#e1e4f7] hover:bg-[#ffffff34]  py-12  rounded-sm px-6 ">
        <div className="w-[250px] h-[100px] bg-[#e1e4f7] shadow-2xl ">
          <Image
            src={card.url}
            width={600}
            height={600}
            alt="logo"
            className="object-cover w-full h-full"
          />
        </div>
        <h4 className="text-[#302f2fc7] text-[20px] mt-7 my-2 font-semibold font-nunito">
          {card.name}
        </h4>
        <p className="text-[#444444c7] line-clamp-3 font-nunito">{card.about}</p>
      </div>
    </div>
  );
};

const cards: Card[] = [
  {
    url: "/woweffect.jpg",
    title: "Title 1",
    id: 1,
    name: "Wow Effect Communications",
    about:
      "Wow Effect Communications is a full service Nigerian digital marketing agency with a strong performance-led ethos.",
  
  },
  {
    url: "/anakle.png",
    title: "Title 1",
    id: 1,
    name: "Wow Effect Communications",
    about:
      "Wow Effect Communications is a full service Nigerian digital marketing agency with a strong performance-led ethos.",
  
  },
  {
    url: "/woweffect.jpg",
    title: "Title 1",
    id: 1,
    name: "Wow Effect Communications",
    about:
      "Wow Effect Communications is a full service Nigerian digital marketing agency with a strong performance-led ethos.",
  
  },
  {
    url: "/woweffect.jpg",
    title: "Title 1",
    id: 1,
    name: "Wow Effect Communications",
    about:
      "Wow Effect Communications is a full service Nigerian digital marketing agency with a strong performance-led ethos.",
  
  },
  {
    url: "/woweffect.jpg",
    title: "Title 1",
    id: 1,
    name: "Wow Effect Communications",
    about:
      "Wow Effect Communications is a full service Nigerian digital marketing agency with a strong performance-led ethos.",
  
  },
  {
    url: "/woweffect.jpg",
    title: "Title 1",
    id: 1,
    name: "Wow Effect Communications",
    about:
      "Wow Effect Communications is a full service Nigerian digital marketing agency with a strong performance-led ethos.",
  
  },
 

];

export default Example;
