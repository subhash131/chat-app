import React from "react";
import styles from "./chatdetails.module.css";
import Link from "next/link";
import ImageList from "./ImageList";
import Options from "./Options";
import { X } from "lucide-react";
import FilesList from "./FilesList";
import SharedLinks from "./SharedLinks";

const ChatDetails = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.title_bar}>
          <p>Chat Details</p>
          <X strokeWidth={1.5} width={20} />
        </div>
        <Options />
      </div>
      <div>
        <div className={styles.title_bar}>
          <p>Photos and Videos</p>
          <Link href="#" className={styles.link}>
            See all
          </Link>
        </div>
        <ImageList />
      </div>
      <div>
        <div className={styles.title_bar}>
          <p>Shared Files</p>
          <Link href="#" className={styles.link}>
            See all
          </Link>
        </div>
        <FilesList />
      </div>
      <div>
        <div className={styles.title_bar}>
          <p>Shared Links</p>
          <Link href="#" className={styles.link}>
            See all
          </Link>
        </div>
        <SharedLinks />
      </div>
    </div>
  );
};

export default ChatDetails;
