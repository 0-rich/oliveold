import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.body}>
      <img
        src="/images/flaticon_x.png"
        className={styles.xbtn}
        alt=""
        onClick={goHome}
      />
      <img src="/images/logo2.png" className={styles.logo} alt="" />
      <div className={styles.inputdiv}>
        <input type="text" className={styles.input} />
        <br />
        <input type="password" className={styles.input} />
      </div>
      <div className={styles.check}>
        <div className={styles.autoLogin}>
          <input type="checkbox" name="" id="" />
          <span>자동 로그인</span>
        </div>
        <div className={styles.autoId}>
          <input type="checkbox" name="" id="" />
          <span>아이디 저장</span>
        </div>
      </div>
      <div className={styles.loginbtn}>로그인</div>
      <div className={styles.findidpw}>
        <div>아이디 찾기</div>
        <div>비밀번호 찾기</div>
      </div>
      <div className={styles.kakaobtn}>
        <img
          src="/images/flaticon_kakaoblack.png"
          className={styles.flaticon}
          alt=""
        />
        카카오로 로그인
      </div>
      <div className={styles.applebtn}>
        <img
          src="/images/flaticon_apple.png"
          className={styles.flaticon2}
          alt=""
        />
        Apple로 로그인
      </div>
      <div className={styles.signupbtn}>회원가입</div>
      <div className={styles.flexdiv}>
        <div>ver 3.19.0 최신 버전</div>
        <div>캐시 데이터 삭제</div>
        <div>오픈 라이선스</div>
      </div>
      <div className={styles.flexdiv}>
        <div>고객센터ㆍ공지사항</div>
      </div>
    </div>
  );
};

export default LoginPage;
