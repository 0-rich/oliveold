import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Search_header.module.css";

const Search_header = () => {
  const handleBackClick = () => {
    window.history.back();
  };

  const navigate = useNavigate();

  const goCart = () => {
    navigate("/cart");
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
        상품 검색
        <img
          src="/images/flaticon_cart.png"
          className={styles.flaticon}
          alt=""
          onClick={goCart}
        />
      </div>
    </div>
  );
};

export default Search_header;
