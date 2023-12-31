import React from "react";
import styles from "./navbar.module.css";
import { Briefcase, CalendarDays, MessagesSquare } from "lucide-react";

const navItems = [
  { name: "Work", icon: <Briefcase strokeWidth={1.5} /> },
  { name: "Chat", icon: <MessagesSquare strokeWidth={1.5} /> },
  { name: "Calendar", icon: <CalendarDays strokeWidth={1.5} /> },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>CH</div>
      <div className={styles.nav_items}>
        {navItems.map(({ name, icon }, index) => {
          return <Item name={name} icon={icon} key={`${index}:${name}`} />;
        })}
      </div>
    </div>
  );
};

export default Navbar;

const Item = ({ name, icon }: { name: string; icon: React.ReactNode }) => {
  return (
    <div className={styles.item}>
      {icon}
      <p>{name}</p>
    </div>
  );
};
