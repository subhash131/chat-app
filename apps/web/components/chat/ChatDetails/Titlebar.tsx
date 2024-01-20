import React from "react";
import styles from "./chatdetails.module.css";


const Titlebar = ({
  name,
  component,
}: {
  name: string;
  component: React.ReactNode;
}) => {
  return (
    <div className={styles.title_bar}>
      <p>{name}</p>
      {component}
    </div>
  );
};

export default Titlebar;
