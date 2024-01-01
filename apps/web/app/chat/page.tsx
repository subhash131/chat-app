import React from "react";
import styles from "./page.module.css";
import ChatList from "./components/UserList";
import Conversation from "./components/Conversation";
import ChatDetails from "./components/ChatDetails";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.chat_container}>
        <ChatList />
        <Conversation />
      </div>
      <div className={styles.chatdetails_container}>
        <ChatDetails />
      </div>
    </div>
  );
};

export default page;
