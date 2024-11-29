import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Cart_header.module.css";

const Cart_header = () => {
  const handleBackClick = () => {
    window.history.back();
  };

  const navigate = useNavigate();

  const goSearch = () => {
    navigate("/search");
    window.scrollTo(0, 0);
  };

  const goHome = () => {
    navigate("/search");
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.header}>
      <div className={styles.container_header}>
        <img
          src="/images/flaticon_backarrow.png"
          className={styles.flaticon}
          alt=""
          onClick={handleBackClick}
        />
        장바구니
        <div className={styles.left_flaticon}>
          <img
            src="/images/flaticon_search.png"
            className={styles.flaticon}
            alt=""
            onClick={goSearch}
          />
          <img
            src="/images/flaticon_home.png"
            className={styles.flaticon}
            alt=""
            onClick={goHome}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart_header;
