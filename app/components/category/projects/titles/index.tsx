import React, { useRef } from "react";
import styles from "./style.module.scss";
import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

interface TitleProps {
  data: {
    title: string;
    speed: number;
    i: number;
  };
  setSelectedProject: (index: number | null) => void;
}

export default function Titles({
  data,
  setSelectedProject,
}: {
  data: any[];
  setSelectedProject: (index: number | null) => void;
}) {
  return (
    <div className={styles.titles}>
      {data.map((project, i) => {
        return (
          <Title
            key={i}
            data={{ ...project, i }}
            setSelectedProject={setSelectedProject}
          />
        );
      })}
    </div>
  );
}

function Title({ data, setSelectedProject }: TitleProps) {
  const { title, speed, i } = data;
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", `${25 / speed}vw end`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div ref={container} className={styles.title}>
      <div
        className={styles.wrapper}
        onMouseOver={() => {
          setSelectedProject(i);
        }}
        onMouseLeave={() => {
          setSelectedProject(null);
        }}
      >
        <motion.p style={{ clipPath: clip }}>{title}</motion.p>
        <p className="inline-bl">{title}</p>
      </div>
    </div>
  );
}
