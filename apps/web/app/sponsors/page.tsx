import React from "react";
import { Card } from "../../components/sponsors/Card";
import styles from "./sponsors.module.css";
import RecentSponsors from "../../components/sponsors/RecentSponsorsCard";
import Titlebar from "../../components/common/Titlebar";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sponsors_container}>
        <div className={styles.sponsors_search}>Search</div>
        <div className={styles.sponsors_list}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className={styles.recent_sponsors_container}>
        <Titlebar name="Recent Sponsors" component="" />
        <div className={styles.recent_sponsors_list}>
          <RecentSponsors />
          <RecentSponsors />
          <RecentSponsors />
          <RecentSponsors />
          <RecentSponsors />
          <RecentSponsors />
          <RecentSponsors />
          <RecentSponsors />
          <RecentSponsors />
          <RecentSponsors />
          <RecentSponsors />
          <RecentSponsors />
          <RecentSponsors />
          <RecentSponsors />
          <RecentSponsors />
          <RecentSponsors />
          <RecentSponsors />
          <RecentSponsors />
          <RecentSponsors />
          <RecentSponsors />
          <RecentSponsors />
          <RecentSponsors />
          <RecentSponsors />
          <RecentSponsors />
          <RecentSponsors />
          <RecentSponsors />
          <RecentSponsors />
          <RecentSponsors />
          <RecentSponsors />
          <RecentSponsors />
          <RecentSponsors />
        </div>
      </div>
    </div>
  );
};

export default page;
