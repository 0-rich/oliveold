import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container_call}>
        <div className={styles.call_item}>
          <img
            src="/images/flaticon_call.png"
            className={styles.flaticon}
            alt=""
          />
          <span>온라인몰 콜센터</span>
        </div>
        <div className={`${styles.call_item} ${styles.with_separator}`}>
          <img
            src="/images/flaticon_call.png"
            className={styles.flaticon}
            alt=""
          />
          <span>매장 콜센터</span>
        </div>
        <div className={`${styles.call_item} ${styles.with_separator}`}>
          1:1문의
        </div>
        <div className={`${styles.call_item} ${styles.with_separator}`}>
          고객센터
        </div>
      </div>
      <div className={styles.footer_olive}>씨제이올리브영(주)</div>
      <div className={styles.container_flaticon}>
        <div className={styles.circle_wrapper}>
          <img
            src="/images/flaticon_insta.png"
            className={styles.flaticon_circle}
            alt="Instagram"
          />
        </div>
        <div className={styles.circle_wrapper}>
          <img
            src="/images/flaticon_facebook.png"
            className={styles.flaticon_circle}
            alt="Facebook"
          />
        </div>
        <div className={styles.circle_wrapper}>
          <img
            src="/images/flaticon_kakao.png"
            className={styles.flaticon_circle}
            alt="Facebook"
          />
        </div>
        <div className={styles.circle_wrapper}>
          <img
            src="/images/flaticon_youtube.png"
            className={styles.flaticon_circle}
            alt="Facebook"
          />
        </div>
      </div>
      <div className={styles.terms}>
        <span>이용약관</span>
        <span className={`${styles.term_item} ${styles.with_separator}`}>
          개인정보처리방침
        </span>
        <span className={`${styles.term_item} ${styles.with_separator}`}>
          위치기반서비스 이용약관
        </span>
      </div>
      <div className={styles.terms}>
        <span>청소년보호방침</span>
        <span className={`${styles.term_item} ${styles.with_separator}`}>
          법적고지
        </span>
      </div>
      <div className={styles.container_p}>
        <p>올리브영 홈페이지에서 판매되는 상품 중에는 올리브영에 입점한</p>
        <p>개별 판매자가 판매하는 상품이 포함되어 있습니다.</p>
        <p>개별 판매자의 판매 상품의 경우, 올리브영은 통신판매중개자로서</p>
        <p>통신판매의 당사자가 아니며 판매자가 등록한 상품정보 및</p>
        <p>거래 정보 등에 대하여 책임을 부담하지 않습니다.</p>
      </div>
    </div>
  );
};

export default Footer;
