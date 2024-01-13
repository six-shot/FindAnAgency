"use client";
import React, { useState, Dispatch, SetStateAction } from "react";
import styles from "./style.module.scss";
import Titles from "../projects/titles/index";
import Descriptions from "../projects/description/index";



const data = [
  {
    title: "digital marketing agencies",
    description:
      "Working on the Next-Generation HMI Experience without no driving experience.",
    speed: 0.5,
  },
  {
    title: "Content Marketing",
    description:
      "Developed the Future of UFC Sports Ecosystem despite not being a sports fan.",
    speed: 0.5,
  },
  {
    title: "Design",
    description:
      "Defined the visual concept and design language for the Lincoln Zephyr 2022 but never seen it in real life.",
    speed: 0.67,
  },
  {
    title: "Digital Marketing",
    description:
      "I was just one person on a massive team that created an entire Royal Caribbean eco-system.",
    speed: 0.8,
  },
  {
    title: "email marketing",
    description:
      "Designed a 1M+ users product utilizing my best personal experience: sleeping.",
    speed: 0.8,
  }
  // {
  //   title: "mobile devlopment",
  //   description:
  //     "Explored the Future of Fantasy Football while being in a country where football means a total different sport.",
  //   speed: 0.8,
  // },
  // {
  //   title: "mobile marketing",
  //   description:
  //     "Explored the Future of Fantasy Football while being in a country where football means a total different sport.",
  //   speed: 0.8,
  // },
  // {
  //   title: "Online reputation marketing",
  //   description:
  //     "Explored the Future of Fantasy Football while being in a country where football means a total different sport.",
  //   speed: 0.8,
  // },
  // {
  //   title: "pay per click marketing",
  //   description:
  //     "Explored the Future of Fantasy Football while being in a country where football means a total different sport.",
  //   speed: 0.8,
  // },
  // {
  //   title: "Serach Engine Optimization",
  //   description:
  //     "Explored the Future of Fantasy Football while being in a country where football means a total different sport.",
  //   speed: 0.8,
  // },
  // {
  //   title: "website developement",
  //   description:
  //     "Explored the Future of Fantasy Football while being in a country where football means a total different sport.",
  //   speed: 0.8,
  // },
  // {
  //   title: "traditional services",
  //   description:
  //     "Explored the Future of Fantasy Football while being in a country where football means a total different sport.",
  //   speed: 0.8,
  // },
  // {
  //   title: "boutique",
  //   description:
  //     "Explored the Future of Fantasy Football while being in a country where football means a total different sport.",
  //   speed: 0.8,
  // },
  // {
  //   title: "expiential",
  //   description:
  //     "Explored the Future of Fantasy Football while being in a country where football means a total different sport.",
  //   speed: 0.8,
  // },
  // {
  //   title: "media",
  //   description:
  //     "Explored the Future of Fantasy Football while being in a country where football means a total different sport.",
  //   speed: 0.8,
  // },
  // {
  //   title: "public relation(pr)",
  //   description:
  //     "Explored the Future of Fantasy Football while being in a country where football means a total different sport.",
  //   speed: 0.8,
  // },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className={styles.container}>
      <Titles data={data} setSelectedProject={setSelectedProject} />
      <Descriptions data={data} selectedProject={selectedProject} />
    </div>
  );
}