import React from "react";
import styles from "./Search.module.css";
import Search_header from "./Search_header";

const Search = () => {
  return (
    <div className={styles.body}>
      <Search_header />
      <div className={styles.search_container}>
        <div className={styles.search_box}>
          <input
            type="text"
            className={styles.input_search}
            placeholder="오늘드림 상품을 찾아보세요"
          ></input>
          <img
            src="/images/flaticon_search.png"
            className={styles.flaticon}
            alt=""
          />
        </div>
        <img
          src="/images/flaticon_barcode.png"
          className={styles.flaticon2}
          alt=""
        />
      </div>
      <div className={styles.line}></div>
      <div className={styles.search_header}>추천키워드</div>
      <div className={styles.recommended_keywords}>
        <div className={styles.recommended_keyword}>말랑밀착에어퍼프</div>
        <div className={styles.recommended_keyword}>딸기코 피지제거</div>
        <div className={styles.recommended_keyword}>수수진하트키링</div>
        <div className={styles.recommended_keyword}>홀리데이배쓰밤</div>
      </div>
      <div className={styles.search_header}>급상승 검색어</div>
    </div>
  );
};

export default Search;
