import React from "react";
import { Phone, Search } from "lucide-react";

import styles from "./conversation.module.css";

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <div>
        <p>Office Chat</p>
        <p className={styles.smallfont}>45 members, 24 online</p>
      </div>
      <div className={styles.icons_container}>
        <Search
          strokeWidth={1.5}
          className={styles.icon}
          width={20}
          height={20}
        />
        <Phone
          strokeWidth={1.5}
          fill="white"
          className={styles.icon}
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default Topbar;
