import React from "react";
import styles from "./Quick_Payment_header.module.css";

const Quick_Payment_header = () => {
  const handleBackClick = () => {
    window.history.back();
  };
  return (
    <div className={styles.header}>
      <img
        className={styles.flaticon}
        src="/images/flaticon_smaller.png"
        alt=""
        onClick={handleBackClick}
      />
    </div>
  );
};

export default Quick_Payment_header;
