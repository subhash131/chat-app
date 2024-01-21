import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import styles from "./sponsor.module.css";

export function Card() {
  return (
    <div className={styles.container}>
      <Image
        width={10}
        height={10}
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="Laptop"
        className={styles.img}
      />
      <div className={styles.details_container}>
        <h1 className={styles.title}>
          About Macbook &nbsp; <ArrowUpRight className={styles.icon} />
        </h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <div className={styles.tags_container}>
          <span className={styles.tags}>#Macbook</span>
          <span className={styles.tags}>#Apple</span>
          <span className={styles.tags}>#Laptop</span>
        </div>
        <div className={styles.button}>view</div>
      </div>
    </div>
  );
}
