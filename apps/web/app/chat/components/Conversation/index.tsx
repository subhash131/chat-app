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
        <RecievedMessage
          message="dipisicing elit. 
          Nobis
        reiciendis vel volupta"
        />
        <SentMessage
          message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
        reiciendis vel voluptas voluptates architecto recusandae fugit quod illo
        esse tenetur blanditiis natus neque excepturi impedit cupiditate sit,
        iste, obcaecati illum?"
        />
        <RecievedMessage
          message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
        reiciendis vel volupta"
        />
        <SentMessage
          message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
        reiciendis vel volupta"
        />
        <SentMessage message="Lorem ipsum" />
        <SentMessage
          message=" voluptates architecto recusandae fugit quod illo
        esse tenetur blanditiis natus neque excepturi impedit cupiditate sit,
        iste, obcaecati illum?"
        />
        <RecievedMessage
          message="dolor sit amet consectetur adipisicing elit. Nobis
        reiciendis vel volupta"
        />
        <SentMessage
          message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
        reiciendis vel voluptas"
        />
        <RecievedMessage message="volupta" />
        <RecievedMessage
          message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
        reiciendis vel volupta"
        />
      </div>
      <Send />
    </div>
  );
};

export default Conversation;
