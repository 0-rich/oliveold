import React from "react";
import styles from "./Header.module.css";

const Header = ({ isVisible }) => {
  console.log(isVisible);
  return (
    <div
      className={`${styles.header} ${
        isVisible ? styles.visible : styles.hidden
      }`}
    >
      <div className={styles.container_header}>
        <div className={styles.container_logo}>
          <img src="/images/logo.png" className={styles.logo} alt="" />
          <span>올리브영</span>
        </div>
        <div className={styles.container_flaticon}>
          <img
            src="/images/flaticon_search.png"
            className={styles.flaticon}
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

export default Header;
