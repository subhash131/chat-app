import React from "react";
import styles from "./conversation.module.css";
import { Paperclip, SendHorizontal } from "lucide-react";

const Send = () => {
  return (
    <div className={styles.send}>
      <textarea placeholder="Your Message" className={styles.input} />
      <div className={styles.icon_container}>
        <Paperclip strokeWidth={1.5} size={18} />
      </div>
      <div className={styles.icon_container}>
        <SendHorizontal strokeWidth={1.5} size={18} />
      </div>
    </div>
  );
};

export default Send;
