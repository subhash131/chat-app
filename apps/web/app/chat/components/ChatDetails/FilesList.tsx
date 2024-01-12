import React, { useId } from "react";
import styles from "./chatdetails.module.css";
import { File } from "lucide-react";

const FilesList = () => {
  const id = useId();
  return (
    <div className={styles.list}>
      {data.map(({ icon, name }, index) => {
        return (
          <div className={styles.item_container} key={`${id}-${index}`}>
            <div className={styles.icon_container}>{icon}</div>
            <p className={styles.item_name}>{name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FilesList;

const data = [
  {
    icon: <File strokeWidth={1.5} />,
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, modi",
  },
  {
    icon: <File strokeWidth={1.5} />,
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, modi",
  },
  {
    icon: <File strokeWidth={1.5} />,
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, modi",
  },
  {
    icon: <File strokeWidth={1.5} />,
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, modi",
  },
  {
    icon: <File strokeWidth={1.5} />,
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, modi",
  },
];
