import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Category_header.module.css";

const Category_header = () => {
  const handleBackClick = () => {
    window.history.back();
  };

  const navigate = useNavigate();

  const goSearch = () => {
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
        카테고리
        <img
          src="/images/flaticon_search.png"
          className={styles.flaticon}
          alt=""
          onClick={goSearch}
        />
      </div>
    </div>
  );
};

export default Category_header;
