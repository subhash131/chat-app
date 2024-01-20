import React from "react";
import styles from "./chatdetails.module.css";
import { BarChartBig, Bell, CalendarDays, VolumeX } from "lucide-react";

const options = [
  {
    name: "notifications",
    icon: <Bell strokeWidth={1.5} />,
  },
  {
    name: "meetings",
    icon: <CalendarDays strokeWidth={1.5} />,
  },
  {
    name: "progress",
    icon: <BarChartBig strokeWidth={1.5} />,
  },
  {
    name: "mute",
    icon: <VolumeX strokeWidth={1.5} />,
  },
];

const Options = () => {
  return (
    <div className={styles.options_container}>
      {options.map(({ name, icon }, index) => {
        return (
          <div className={styles.options_icon} key={`${name}:${index}`}>
            {icon}
          </div>
        );
      })}
    </div>
  );
};

export default Options;
