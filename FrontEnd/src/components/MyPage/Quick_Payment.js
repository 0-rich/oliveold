import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Quick_Payment.module.css";
import Quick_Payment_header from "./Quick_Payment_header";

const Quick_Payment = () => {
  const navigate = useNavigate();

  const goManage = () => {
    navigate("/quickpayment/manage");
    window.location.reload();
  };

  return (
    <div className={styles.body}>
      <Quick_Payment_header />
      <div className={styles.quickTitle}>결제 관리</div>
      <div className={styles.quickContainer}>
        <div className={styles.quickDiv} onClick={goManage}>
          <span>결제수단 관리</span>
          <img
            className={styles.flaticon}
            src="/images/flaticon_larger.png"
            alt=""
          />
        </div>
        <div className={styles.quickDiv}>
          <span>결제 비밀번호 설정</span>
          <img
            className={styles.flaticon}
            src="/images/flaticon_larger.png"
            alt=""
          />
        </div>
        <div className={styles.quickDiv}>
          <span>원터치결제 설정</span>
          <img
            className={styles.flaticon}
            src="/images/flaticon_larger.png"
            alt=""
          />
        </div>
        <div className={styles.quickDiv2}>
          <span>이메일 관리</span>
          <img
            className={styles.flaticon}
            src="/images/flaticon_larger.png"
            alt=""
          />
        </div>
      </div>
      <div>
        <div className={styles.quickDiv2}>
          <span>해지하기</span>
          <img
            className={styles.flaticon}
            src="/images/flaticon_larger.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Quick_Payment;
