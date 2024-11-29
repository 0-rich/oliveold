import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthenticationService from "./AuthenticationService";

const OAuth2RedirectHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // URL에서 'code' 파라미터 추출
    const params = new URLSearchParams(location.search);
    const code = params.get("code");

    if (code) {
      // Authorization Code를 백엔드에 전달
      AuthenticationService.kakaoLogin(code)
        .then((data) => {
          console.log("로그인 성공:", data);
          // 백엔드에서 받은 액세스 토큰을 로컬 스토리지에 저장
          localStorage.setItem("token", data.accessToken);

          // 로그인 성공 후 mypage로 리디렉션
          navigate("/mypage");
        })
        .catch((error) => {
          console.error("카카오 로그인 처리 중 오류:", error);
          // 오류 처리 로직 추가 가능
        });
    } else {
      console.error("카카오 인증 코드가 누락되었습니다.");
    }
  }, [location.search, navigate]);

  return (
    <div>
      <h1>로그인 처리 중...</h1>
    </div>
  );
};

export default OAuth2RedirectHandler;
