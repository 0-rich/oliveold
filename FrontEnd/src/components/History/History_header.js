import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./History_header.module.css";

const History_header = ({ isVisible }) => {
  const navigate = useNavigate();

  const goSearch = () => {
    navigate("/search");
    window.scrollTo(0, 0);
  };
  const goCart = () => {
    navigate("/cart");
    window.scrollTo(0, 0);
  };

  return (
    <div
      className={`${styles.header} ${
        isVisible ? styles.visible : styles.hidden
      }`}
    >
      <div className={styles.container_header}>
        <div className={styles.container_logo}>
          <span>히스토리</span>
        </div>
        <div className={styles.container_flaticon}>
          <img
            src="/images/flaticon_search.png"
            className={styles.flaticon}
            alt=""
            onClick={goSearch}
          />
          <img
            src="/images/flaticon_cart.png"
            className={styles.flaticon}
            alt=""
            onClick={goCart}
          />
        </div>
      </div>
    </div>
  );
};

export default History_header;
