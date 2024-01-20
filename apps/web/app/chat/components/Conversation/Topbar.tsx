import React from "react";
import { Phone, Search } from "lucide-react";

import styles from "./conversation.module.css";

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <div>
        <p>Subhash</p>
        <p className={styles.smallfont}>Online</p>
      </div>
      <div className={styles.icons_container}>
        <div className={styles.icon_container}>
          <Search strokeWidth={1.5} size={18} />
        </div>
        <div className={styles.icon_container}>
          <Phone strokeWidth={1.5} size={18} />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
