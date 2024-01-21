import React from "react";
import styles from "./search.module.css";
import { Search } from "lucide-react";

const SearchComp = () => {
  return (
    <div className={styles.input_container}>
      <Search strokeWidth={1.5} width={18} />
      <input className={styles.input} placeholder="Search" />
    </div>
  );
};

export default SearchComp;
