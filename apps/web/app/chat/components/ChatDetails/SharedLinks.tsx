import React from "react";
import styles from "./chatdetails.module.css";
import { Link } from "lucide-react";

const SharedLinks = () => {
  return (
    <div className={styles.list}>
      <div className={styles.item_container}>
        <div className={styles.icon_container}>
          <Link strokeWidth={1.5} />
        </div>
        <p className={styles.item_name}>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={styles.item_container}>
        <div className={styles.icon_container}>
          <Link strokeWidth={1.5} />
        </div>
        <p className={styles.item_name}>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={styles.item_container}>
        <div className={styles.icon_container}>
          <Link strokeWidth={1.5} />
        </div>
        <p className={styles.item_name}>Lorem ipsum dolor sit amet.</p>
      </div>{" "}
      <div className={styles.item_container}>
        <div className={styles.icon_container}>
          <Link strokeWidth={1.5} />
        </div>
        <p className={styles.item_name}>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export default SharedLinks;
