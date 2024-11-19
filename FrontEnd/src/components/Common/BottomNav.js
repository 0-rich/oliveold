import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./BottomNav.module.css";

const BottomNav = ({ isVisible }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const goHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };
  const goHistory = () => {
    navigate("/history");
    window.scrollTo(0, 0);
  };
  const goShutter = () => {
    navigate("/shutter");
    window.scrollTo(0, 0);
  };
  const goCategory = () => {
    navigate("/category");
    window.scrollTo(0, 0);
  };
  const goMypage = () => {
    navigate("/mypage");
    window.scrollTo(0, 0);
  };

  const getIconClass = (path, defaultIcon, activeIcon) => {
    return location.pathname === path ? activeIcon : defaultIcon;
  };

  return (
    <div
      className={`${styles.bottomnav} ${
        isVisible ? styles.visible : styles.hidden
      }`}
    >
      <div className={styles.container_bottomnav}>
        <div onClick={goCategory}>
          <img
            className={styles.flaticon}
            src="/images/flaticon_menu.png"
            alt=""
          />
          <p className={styles.nav_span}>카테고리</p>
        </div>
        <div onClick={goShutter}>
          <img
            className={styles.flaticon}
            src="/images/flaticon_shutter.png"
            alt=""
          />
          <p className={styles.nav_span}>셔터</p>
        </div>
        <div onClick={goHome}>
          <img
            className={styles.flaticon}
            src={`/images/${getIconClass(
              "/",
              "flaticon_home.png",
              "flaticon_home2.png"
            )}`}
            alt=""
          />
          <p className={styles.nav_span}>홈</p>
        </div>
        <div onClick={goHistory}>
          <img
            className={styles.flaticon}
            src={`/images/${getIconClass(
              "/history",
              "flaticon_history.png",
              "flaticon_history2.png"
            )}`}
            alt=""
          />
          <p className={styles.nav_span}>히스토리</p>
        </div>
        <div onClick={goMypage}>
          <img
            className={styles.flaticon}
            src={`/images/${getIconClass(
              "/mypage",
              "flaticon_profile.png",
              "flaticon_profile2.png"
            )}`}
            alt=""
          />
          <p className={styles.nav_span}>마이</p>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
