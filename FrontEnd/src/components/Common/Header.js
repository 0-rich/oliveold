import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container_logo}>
        <img src="/images/logo.png" className={styles.logo} />
        <span>올리브영</span>
      </div>
      <div className={styles.container_flaticon}>
        <img src="/images/flaticon_search.png" className={styles.flaticon} />
        <img src="/images/flaticon_cart.png" className={styles.flaticon} />
      </div>
      <div></div>
    </div>
  );
};

export default Header;
