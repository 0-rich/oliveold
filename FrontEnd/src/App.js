import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import debounce from "lodash/debounce";

import HomePage from "./components/Home/HomePage";
import MyPage from "./components/MyPage/MyPage";
import LoginPage from "./components/Auth/LoginPage";
import Category from "./components/Category/Category";
import Search from "./components/Search/Search";
import History from "./components/History/History";
import Quick_Payment from "./components/MyPage/Quick_Payment";
import Quick_Payment_Manage from "./components/MyPage/Quick_Payment_Manage";
import Cart from "./components/Cart/Cart";

import PrivateRoute from "./components/Auth/PrivateRoute";
import OAuth2RedirectHandler from "./components/Auth/OAuth2RedirectHandler";

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  const [isAuthenticated, setIsAuthenticated] = useState(false); // useEffect로 실행될 때마다 작동 되게 => 로그인 유무 관리

  useEffect(() => {
    setScreenSize(); // 초기 설정

    const handleResize = debounce(() => {
      setScreenSize(); // 화면 크기 변경 시 다시 설정
    }, 100);

    window.addEventListener("resize", handleResize); // 화면 크기 변경 시 이벤트 리스너 추가

    // 로그인 여부 확인 및 상태 업데이트
    const token = localStorage.getItem("token");
    setIsAuthenticated(token !== null);

    // 이미지 우클릭 방지
    const preventImageContextMenu = (event) => {
      if (event.target.tagName === "IMG") {
        event.preventDefault();
      }
    };
    window.addEventListener("contextmenu", preventImageContextMenu);

    // 클린업 함수 (컴포넌트 언마운트 시)
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("contextmenu", preventImageContextMenu);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/mypage"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <MyPage />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/search" element={<Search />} />
          <Route path="/history" element={<History />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/quickpayment" element={<Quick_Payment />} />
          <Route
            path="/quickpayment/manage"
            element={<Quick_Payment_Manage />}
          />
          <Route
            // path="/oauth/callback/kakao"
            path="/api/users/kakao/login"
            element={<OAuth2RedirectHandler />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
