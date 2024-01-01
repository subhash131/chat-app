import React from "react";
import styles from "./chatdetails.module.css";
import { File } from "lucide-react";

const FilesList = () => {
  return (
    <div className={styles.files_list}>
      <div className={styles.file_container}>
        <div className={styles.file_icon_container}>
          <File strokeWidth={1.5} />
        </div>
        <p className={styles.file_name}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, modi
        </p>
      </div>
      <div className={styles.file_container}>
        <div className={styles.file_icon_container}>
          <File strokeWidth={1.5} />
        </div>
        <p className={styles.file_name}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, modi
        </p>
      </div>
      <div className={styles.file_container}>
        <div className={styles.file_icon_container}>
          <File strokeWidth={1.5} />
        </div>
        <p className={styles.file_name}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, modi
        </p>
      </div>{" "}
      <div className={styles.file_container}>
        <div className={styles.file_icon_container}>
          <File strokeWidth={1.5} />
        </div>
        <p className={styles.file_name}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, modi
        </p>
      </div>
    </div>
  );
};

export default FilesList;
