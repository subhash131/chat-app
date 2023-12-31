import React from "react";
import styles from "./page.module.css";
import ChatList from "./components/UserList";
import Conversation from "./components/Conversation";

const page = () => {
  return (
    <div className={styles.container}>
      <ChatList />
      <Conversation />
      
    </div>
  );
};

export default page;
