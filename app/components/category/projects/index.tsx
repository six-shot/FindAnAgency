"use client";
import React, { useState, Dispatch, SetStateAction } from "react";
import styles from "./style.module.scss";
import Titles from "../projects/titles/index";




const data = [
  {
    title: "digital marketing agencies",
    link: "/Digital Marketing Agencies",
    speed: 0.5,
  },
  {
    title: "Content Marketing",
    link: "/Content Marketing",
    speed: 0.5,
  },
  {
    title: "Design",
    link: "/Design",
    speed: 0.67,
  },
  {
    title: "Digital Marketing",
    link: "/Digital Marketing",
    speed: 0.8,
  },
  {
    title: "email marketing",
    link: "/Email Marketing",
    speed: 0.8,
  },
  {
    title: "mobile devlopment",
    link: "/media",
    speed: 0.97,
  },
  {
    title: "mobile marketing",
    link: "/Mobile Development",
    speed: 0.8,
  },
  {
    title: "Online reputation marketing",
    link: "/Online Reputation Management",
    speed: 0.8,
  },
  {
    title: "pay per click marketing",
    link: "/Pay per Click Marketing",
    speed: 0.8,
  },
  {
    title: "Search Engine Optimization",
    link: "/Search Engine Optimization",
    speed: 0.8,
  },
  {
    title: "website development",
    link: "/Website Development",
    speed: 0.8,
  },
  {
    title: "traditional services",
    link: "/Traditional Services",
    speed: 0.8,
  },
  {
    title: "boutique",
    link: "/Boutique",
    speed: 0.8,
  },
  {
    title: "experiential",
    link: "/Experiential",
    speed: 0.8,
  },
  {
    title: "media",
    link: "/Media",
    speed: 0.8,
  },
  {
    title: "public relation(pr)",
    link: "/Public Relations(PR)",
    speed: 0.8,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className='container'>
      <Titles data={data} setSelectedProject={setSelectedProject} />
     
    </div>
  );
}