import React from "react";
import styles from "./conversation.module.css";

const SentMessage = ({ message }: { message: string }) => {
  return (
    <div className={styles.sent_message}>
      <p>{message}</p>
    </div>
  );
};

export default SentMessage;
