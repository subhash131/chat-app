"use client";
import React, { useState } from "react";
import styles from "./chatlist.module.css";
import { Search } from "lucide-react";
import Item from "./ListItem";

const ChatList = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className={styles.container}>
      <div className={styles.input_container}>
        <Search strokeWidth={1.5} width={18} />
        <input className={styles.input} placeholder="Search" />
      </div>
      <div className={styles.userlist_container}>
        {defaultUsers.map(({ image, name, latestMessage }, index) => {
          return (
            <Item
              isSelected={index == selectedIndex}
              image={image}
              name={name}
              latestMessage={latestMessage}
              key={`${index}:${name}`}
              onClick={() => {
                setSelectedIndex(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChatList;

const defaultUsers = [
  {
    image: "/assets/cat-profile.jpg",
    name: "Subhash",
    latestMessage: "Hi, I am subhash",
  },
  {
    image: "/assets/cat-profile-2.jpg",
    name: "Office Chat",
    latestMessage: "Wassup",
  },
  {
    image: "/assets/cat-profile-3.jpg",
    name: "Karthi",
    latestMessage: "🤦‍♂️",
  },
];
