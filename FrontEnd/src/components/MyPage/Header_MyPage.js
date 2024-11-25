import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header_MyPage.module.css";

const Header_MyPage = ({ isVisible }) => {
  const navigate = useNavigate();

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
            onClick={goCart}
          />
        </div>
      </div>
    </div>
  );
};

export default Header_MyPage;
