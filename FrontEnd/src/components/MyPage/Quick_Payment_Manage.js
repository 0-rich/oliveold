import React from "react";
import styles from "./Quick_Payment_Manage.module.css";
import Quick_Payment_header from "./Quick_Payment_header";

const Quick_Payment_Manage = () => {
  return (
    <div className={styles.body}>
      <Quick_Payment_header />
      <div className={styles.quickTitle}>결제 관리</div>
      <div className={styles.quickDiv}>
        <img
          className={styles.flaticon}
          src="/images/MyPage/Quick_Payment/flaticon_card.png"
          alt=""
        />
        <span>계좌 등록하기</span>
      </div>
      <div className={styles.quickDiv}>
        <img
          className={styles.bankImg}
          src="/images/MyPage/Bank/logo_bank_8.png"
          alt=""
        />
        <div className={styles.cardDiv}>
          <div className={styles.bankName}>기업 계좌</div>
          <div className={styles.bankName2}>IBK기업은행 1014</div>
        </div>
        <div className={styles.deleteBtn}>삭제</div>
      </div>
    </div>
  );
};

export default Quick_Payment_Manage;
