import React from "react";
import styles from "./conversation.module.css";
import Image from "next/image";

const RecievedMessage = ({ message }: { message: string }) => {
  return (
    <div className={styles.received_msg_warpper}>
      <Image
        src="/assets/cat-profile.jpg"
        alt="profile image"
        width={20}
        height={20}
        className={styles.image}
        draggable={false}
      />
      <div className={styles.received_message}>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default RecievedMessage;
