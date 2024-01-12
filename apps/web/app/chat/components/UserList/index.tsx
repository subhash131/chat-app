"use client";
import React, { useId, useState } from "react";
import styles from "./chatlist.module.css";
import { Plus, Search } from "lucide-react";
import Item from "./ListItem";

const ChatList = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const key = useId();
  return (
    <div className={styles.container}>
      <div className={styles.topbar}>
        <div className={styles.input_container}>
          <Search strokeWidth={1.5} width={18} />
          <input className={styles.input} placeholder="Search" />
        </div>
        <div className={styles.icon}>
          <Plus strokeWidth={1.5} width={18} />
        </div>
      </div>
      <div className={styles.userlist_container}>
        {defaultUsers.map(({ image, name, latestMessage }, index) => {
          return (
            <Item
              isSelected={index == selectedIndex}
              image={image}
              name={name}
              latestMessage={latestMessage}
              key={`${key}-${name}`}
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
