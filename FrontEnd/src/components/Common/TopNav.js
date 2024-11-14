import React from "react";
import styles from "./TopNav.module.css";

const TopNav = () => {
  return (
    <div className={styles.topnav}>
      <span className={styles.nav_span}>홈</span>
      <span className={styles.nav_span}>오특</span>
      <span className={styles.nav_span}>랭킹</span>
      <span className={styles.nav_span}>매거진</span>
    </div>
  );
};

export default TopNav;
