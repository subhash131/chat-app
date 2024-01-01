import React from "react";
import styles from "./conversation.module.css";
import { Paperclip, SendHorizontal } from "lucide-react";

const Send = () => {
  return (
    <div className={styles.send}>
      <Paperclip />
      <textarea placeholder="Your Message" className={styles.input} />
      <SendHorizontal />
    </div>
  );
};

export default Send;
