"use client";
import React, { useState, Dispatch, SetStateAction } from "react";
import styles from "./style.module.scss";
import Titles from "../projects/titles/index";




const data = [
  {
    title: "digital marketing agencies",
    link: "/media",
    speed: 0.5,
  },
  {
    title: "Content Marketing",
    link: "/media",
    speed: 0.5,
  },
  {
    title: "Design",
    link: "/media",
    speed: 0.67,
  },
  {
    title: "Digital Marketing",
    link: "/media",
    speed: 0.8,
  },
  {
    title: "email marketing",
    link: "/media",
    speed: 0.8,
  },
  {
    title: "mobile devlopment",
    link: "/media",
    speed: 0.97,
  },
  {
    title: "mobile marketing",
    link: "/media",
    speed: 0.8,
  },
  {
    title: "Online reputation marketing",
    link: "/media",
    speed: 0.8,
  },
  {
    title: "pay per click marketing",
    link: "/media",
    speed: 0.8,
  },
  {
    title: "Search Engine Optimization",
    link: "/media",
    speed: 0.8,
  },
  {
    title: "website development",
    link: "/media",
    speed: 0.8,
  },
  {
    title: "traditional services",
    link: "/media",
    speed: 0.8,
  },
  {
    title: "boutique",
    link: "/media",
    speed: 0.8,
  },
  {
    title: "experiential",
    link: "/media",
    speed: 0.8,
  },
  {
    title: "media",
    link: "/media",
    speed: 0.8,
  },
  {
    title: "public relation(pr)",
    link: "/media",
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