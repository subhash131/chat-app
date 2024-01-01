import React from "react";
import styles from "./chatdetails.module.css";
import { Link } from "lucide-react";

const SharedLinks = () => {
  return (
    <div className={styles.files_list}>
      <div className={styles.file_container}>
        <div className={styles.file_icon_container}>
          <Link strokeWidth={1.5} />
        </div>
        <p className={styles.file_name}>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={styles.file_container}>
        <div className={styles.file_icon_container}>
          <Link strokeWidth={1.5} />
        </div>
        <p className={styles.file_name}>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={styles.file_container}>
        <div className={styles.file_icon_container}>
          <Link strokeWidth={1.5} />
        </div>
        <p className={styles.file_name}>Lorem ipsum dolor sit amet.</p>
      </div>{" "}
      <div className={styles.file_container}>
        <div className={styles.file_icon_container}>
          <Link strokeWidth={1.5} />
        </div>
        <p className={styles.file_name}>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export default SharedLinks;
