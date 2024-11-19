import React from "react";
import styles from "./Category_header.module.css";

const Category_header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container_header}>
        <img
          src="/images/flaticon_backarrow.png"
          className={styles.flaticon}
          alt=""
        />
        카테고리
        <img
          src="/images/flaticon_search.png"
          className={styles.flaticon}
          alt=""
        />
      </div>
    </div>
  );
};

export default Category_header;
