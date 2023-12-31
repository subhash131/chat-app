"use client";
import React from "react";
import styles from "./chatlist.module.css";
import Image from "next/image";

const Item = ({
  image,
  name,
  latestMessage,
  onClick,
  isSelected,
}: {
  image: string;
  name: string;
  latestMessage: string;
  onClick: () => void;
  isSelected: boolean;
}) => {
  return (
    <div
      className={`${styles.item} ${isSelected && styles.selectedItem}`}
      onClick={onClick}
    >
      <Image
        src={image}
        alt="profile image"
        width={20}
        height={20}
        className={styles.image}
      />
      <div className={styles.item_content}>
        <p className={styles.username}>{name}</p>
        <p className={styles.message}>{latestMessage}</p>
      </div>
    </div>
  );
};
export default Item;
