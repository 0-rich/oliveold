import { authAxios } from "../api/customAxios";
import KAKAO_CONFIG from "../../config/OAuth";

const AuthenticationService = {
  // 로그인 요청 (Redirect 처리)
  loginSocialKakao: () => {
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CONFIG.JS_KEY}&redirect_uri=${KAKAO_CONFIG.REDIRECT_URI}`;
    window.location.href = kakaoAuthUrl;
  },

  // 백엔드로 전달할 로그인 코드 처리
  kakaoLogin: async (code) => {
    try {
      console.log(code);
      const response = await authAxios.get(`/users/kakao/login?code=${code}`);
      console.log("카카오 로그인 성공");
      console.log(response.data.token.accessToken);
      return response.data.token; // 백엔드에서 반환된 데이터를 처리
    } catch (error) {
      console.error("카카오 로그인 실패:", error.response || error);
      throw error;
    }
  },
};

export default AuthenticationService;
