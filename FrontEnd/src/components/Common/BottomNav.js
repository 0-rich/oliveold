import React from "react";
import styles from "./BottomNav.module.css";

const BottomNav = ({ isVisible }) => {
  return (
    <div
      className={`${styles.bottomnav} ${
        isVisible ? styles.visible : styles.hidden
      }`}
    >
      <div className={styles.container_bottomnav}>
        <div>
          <img
            className={styles.flaticon}
            src="/images/flaticon_menu.png"
            alt=""
          />
          <p className={styles.nav_span}>카테고리</p>
        </div>
        <div>
          <img
            className={styles.flaticon}
            src="/images/flaticon_shutter.png"
            alt=""
          />
          <p className={styles.nav_span}>셔터</p>
        </div>
        <div>
          <img
            className={styles.flaticon}
            src="/images/flaticon_home.png"
            alt=""
          />
          <p className={styles.nav_span}>홈</p>
        </div>
        <div>
          <img
            className={styles.flaticon}
            src="/images/flaticon_history.png"
            alt=""
          />
          <p className={styles.nav_span}>히스토리</p>
        </div>
        <div>
          <img
            className={styles.flaticon}
            src="/images/flaticon_profile.png"
            alt=""
          />
          <p className={styles.nav_span}>마이</p>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
