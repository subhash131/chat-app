import React from "react";
import styles from "./chatdetails.module.css";
import { File } from "lucide-react";

const FilesList = () => {
  return (
    <div className={styles.list}>
      <div className={styles.item_container}>
        <div className={styles.icon_container}>
          <File strokeWidth={1.5} />
        </div>
        <p className={styles.item_name}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, modi
        </p>
      </div>
      <div className={styles.item_container}>
        <div className={styles.icon_container}>
          <File strokeWidth={1.5} />
        </div>
        <p className={styles.item_name}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, modi
        </p>
      </div>
      <div className={styles.item_container}>
        <div className={styles.icon_container}>
          <File strokeWidth={1.5} />
        </div>
        <p className={styles.item_name}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, modi
        </p>
      </div>{" "}
      <div className={styles.item_container}>
        <div className={styles.icon_container}>
          <File strokeWidth={1.5} />
        </div>
        <p className={styles.item_name}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, modi
        </p>
      </div>
    </div>
  );
};

export default FilesList;
