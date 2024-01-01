import React from "react";
import styles from "./conversation.module.css";
import Topbar from "./Topbar";
import RecievedMessage from "./RecievedMessage";
import SentMessage from "./SentMessage";
import Send from "./Send";

const Conversation = () => {
  return (
    <div className={styles.container}>
      <Topbar />
      <div className={styles.conversation}>
        <RecievedMessage />
        <SentMessage />
        <RecievedMessage />
        <SentMessage />
        <SentMessage />
        <SentMessage />
        <RecievedMessage />
        <SentMessage />
        <RecievedMessage />
        <RecievedMessage />
      </div>
      <Send />
    </div>
  );
};

export default Conversation;
