import React from "react";
import styles from "./style.module.scss";

interface Project {
  title: string;
  description: string;
}

interface DescriptionsProps {
  data: any[];
  selectedProject: number | null;
}

export default function Descriptions({
  data,
  selectedProject,
}: DescriptionsProps) {
  const crop = (string: string, maxLength: number) => {
    return string.substring(0, maxLength);
  };

  return (
    <div className={styles.descriptions}>
      {data.map((project, i) => {
        const { title, description } = project;
        return (
          <div
            key={i}
            className={styles.description}
            style={{
              clipPath:
                selectedProject === i ? "inset(0 0 0)" : "inset(50% 0 50%",
            }}
          >
            <p>{crop(title, 20)}</p>
         
          </div>
        );
      })}
    </div>
  );
}
