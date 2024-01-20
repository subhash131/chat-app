import React from "react";
import Image from "next/image";
import styles from "./chatdetails.module.css";

const ImageList = () => {
  return (
    <div className={styles.images_container}>
      <Image
        src="/assets/cat-profile.jpg"
        alt="image"
        width={150}
        height={100}
        className={styles.image}
        draggable={false}
      />
      <Image
        src="/assets/cat-profile-2.jpg"
        alt="image"
        width={150}
        height={100}
        className={styles.image}
        draggable={false}
      />
      <Image
        src="/assets/cat-profile-3.jpg"
        alt="image"
        width={150}
        height={100}
        className={styles.image}
        draggable={false}
      />
    </div>
  );
};

export default ImageList;
