import React from "react";
import styles from "./sponsor.module.css";
import Image from "next/image";

const RecentSponsor = () => {
  return (
    <div className={styles.recent_sponsor_card}>
      <div className={styles.recent_sponsor_details}>
        <p className={styles.recent_sponsor_title}>About Macbook</p>
        <p className={styles.recent_sponsor_description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, rem.
        </p>
      </div>
      <div className={styles.recent_sponsor_image_container}>
        <Image
          width={10}
          height={10}
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="Laptop"
          className={styles.recent_sponsor_image}
        />
      </div>
    </div>
  );
};

export default RecentSponsor;
