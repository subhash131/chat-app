import React from "react";
import styles from "./chatdetails.module.css";
import { Link } from "lucide-react";
const data = [
  { name: "Lorem ipsum dolor sit amet.", icon: <Link strokeWidth={1.5} /> },
  { name: "Lorem ipsum dolor sit amet.", icon: <Link strokeWidth={1.5} /> },
  { name: "Lorem ipsum dolor sit amet.", icon: <Link strokeWidth={1.5} /> },
  { name: "Lorem ipsum dolor sit amet.", icon: <Link strokeWidth={1.5} /> },
  { name: "Lorem ipsum dolor sit amet.", icon: <Link strokeWidth={1.5} /> },
  { name: "Lorem ipsum dolor sit amet.", icon: <Link strokeWidth={1.5} /> },
];

const SharedLinks = () => {
  return (
    <div className={styles.list}>
      {data.map(({ name, icon }, index) => {
        return (
          <div className={styles.item_container} key={`${index}-${name}`}>
            <div className={styles.icon_container}>{icon}</div>
            <p className={styles.item_name}>{name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SharedLinks;
