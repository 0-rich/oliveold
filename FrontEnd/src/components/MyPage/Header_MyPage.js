import React from "react";
import styles from "./Header_MyPage.module.css";

const Header_MyPage = ({ isVisible }) => {
  return (
    <div
      className={`${styles.header} ${
        isVisible ? styles.visible : styles.hidden
      }`}
    >
      <div className={styles.container_header}>
        <div className={styles.container_logo}>
          <span>마이페이지</span>
        </div>
        <div className={styles.container_flaticon}>
          <img
            src="/images/flaticon_setting.png"
            className={styles.flaticon}
            alt=""
          />
          <img
            src="/images/flaticon_alram.png"
            className={styles.flaticon2}
            alt=""
          />
          <img
            src="/images/flaticon_cart.png"
            className={styles.flaticon}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header_MyPage;
