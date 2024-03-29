import React from "react";
import styles from "./navbar.module.css";
import {
  Briefcase,
  CircleUserRound,
  LayoutDashboard,
  MessagesSquare,
} from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>CH</div>
      <div className={styles.nav_items}>
        {navItems.map(({ name, icon, link }, index) => {
          return (
            <Link href={link} key={`${index}:${name}`}>
              <Item name={name} icon={icon} />
            </Link>
          );
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

const navItems = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard strokeWidth={1.5} />,
    link: "/dashboard",
  },
  {
    name: "Sponsors",
    icon: <Briefcase strokeWidth={1.5} />,
    link: "/sponsors",
  },
  { name: "Chat", icon: <MessagesSquare strokeWidth={1.5} />, link: "/chat" },
  {
    name: "Profile",
    icon: <CircleUserRound strokeWidth={1.5} />,
    link: "/profile",
  },
];
