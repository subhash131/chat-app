import React from "react";
import styles from "./chatdetails.module.css";
import Link from "next/link";
import ImageList from "./ImageList";
import Options from "./Options";
import FilesList from "./FilesList";
import SharedLinks from "./SharedLinks";
import Titlebar from "./Titlebar";

const ChatDetails = () => {
  return (
    <div className={styles.container}>
      {data.map(({ titlebar, details }, index) => {
        return (
          <div key={`${index}:${titlebar.name}`}>
            <Titlebar name={titlebar.name} component={titlebar.component} />
            {details}
          </div>
        );
      })}
    </div>
  );
};

export default ChatDetails;

const data = [
  {
    titlebar: {
      name: "Chat Details",
      component: "",
    },
    details: <Options />,
  },
  {
    titlebar: {
      name: "Photos and Videos",
      component: (
        <Link href="#" className={styles.link}>
          See all
        </Link>
      ),
    },
    details: <ImageList />,
  },
  {
    titlebar: {
      name: "Shared Files",
      component: (
        <Link href="#" className={styles.link}>
          See all
        </Link>
      ),
    },
    details: <FilesList />,
  },
  {
    titlebar: {
      name: "Shared Links",
      component: (
        <Link href="#" className={styles.link}>
          See all
        </Link>
      ),
    },
    details: <SharedLinks />,
  },
];
