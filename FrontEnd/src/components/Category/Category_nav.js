import React, { useState } from "react";
import styles from "./Category_nav.module.css";

const Category_nav = ({
  categories,
  setSelectedIndex,
  handleCategoryClick,
}) => {
  const [selectedIndex, setLocalSelectedIndex] = useState(0);

  const handleCategoryItemClick = (index) => {
    setLocalSelectedIndex(index);
    setSelectedIndex(index);
    handleCategoryClick(index);
  };

  return (
    <div className={styles.body}>
      {categories.map((category, index) => (
        <div
          key={index}
          className={`${styles.category} ${
            selectedIndex === index ? styles.selected : ""
          }`}
          onClick={() => handleCategoryItemClick(index)} // 수정된 클릭 핸들러 사용
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Category_nav;
