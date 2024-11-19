import React, { useState, useEffect, useRef } from "react";
import styles from "./HomePage.module.css";
import Header from "../Common/Header";
import TopNav from "../Common/TopNav";
import BottomNav from "../Common/BottomNav";
import Footer from "../Common/Footer";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("스킨케어");
  const [selectedCategoryPage, setSelectedCategoryPage] = useState(1);

  const categories = [
    "스킨케어",
    "마스크팩",
    "클렌징",
    "선케어",
    "메이크업",
    "뷰티소품",
    "더모코스메틱",
    "맨즈케어",
    "헤어케어",
    "바디케어",
    "향수/디퓨저",
    "네일",
  ];

  const handlePrevPage = () => {
    if (selectedCategoryPage > 1) {
      setSelectedCategoryPage(selectedCategoryPage - 1);
    }
  };

  const handleNextPage = () => {
    if (selectedCategoryPage < 20) {
      setSelectedCategoryPage(selectedCategoryPage + 1);
    }
  };

  const [showHeader, setShowHeader] = useState(true);
  const [showBottomNav, setShowBottomNav] = useState(true);
  const [showTopNav, setShowTopNav] = useState(false); // TopNav 보이기 여부
  const lastScrollY = useRef(0); // 스크롤 위치 추적
  const isThrottled = useRef(false); // 쓰로틀링을 위한 변수
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isThrottled.current) return;
      isThrottled.current = true;

      setTimeout(() => {
        const currentScrollY = window.scrollY;
        const direction = currentScrollY > lastScrollY.current ? "down" : "up";

        // 스크롤 변화가 30px 이상일 때만 상태 변경
        if (Math.abs(currentScrollY - lastScrollY.current) > 30) {
          if (direction === "down" && showHeader) {
            setShowHeader(false); // 스크롤 내릴 때 헤더 숨기기
            setShowBottomNav(false); // bottomNav 숨기기
            setShowTopNav(true); // 스크롤 내리면 바로 topnav 보여주기
          } else if (direction === "up" && !showHeader) {
            setShowHeader(true); // 스크롤 올릴 때 헤더 보이기
            setShowBottomNav(true); // bottomNav 보이기
            setShowTopNav(false); // 스크롤 올릴 때 topnav 숨기기
          }
        }

        lastScrollY.current = currentScrollY; // 마지막 스크롤 위치 업데이트
        isThrottled.current = false;
      }, 100); // 100ms 마다 업데이트
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showHeader, showBottomNav]);

  return (
    <div className={styles.main}>
      {showHeader && <Header isVisible={showHeader} />}
      <TopNav isVisible={showHeader} />
      <div className={styles.body}>
        <img
          className={styles.main_img}
          src="/images/Home/homepage_main_1.jpg"
          alt=""
        />
        {/* flaticon */}
        <div className={styles.container_imgs}>
          <img
            className={styles.container_img}
            src="/images/Home/home_icon_1.png"
            alt=""
          />
          <img
            className={styles.container_img}
            src="/images/Home/home_icon_2.png"
            alt=""
          />
          <img
            className={styles.container_img}
            src="/images/Home/home_icon_3.png"
            alt=""
          />
          <img
            className={styles.container_img}
            src="/images/Home/home_icon_4.png"
            alt=""
          />
          <img
            className={styles.container_img}
            src="/images/Home/home_icon_5.png"
            alt=""
          />
          <img
            className={styles.container_img}
            src="/images/Home/home_icon_6.png"
            alt=""
          />
          <img
            className={styles.container_img}
            src="/images/Home/home_icon_7.png"
            alt=""
          />
          <img
            className={styles.container_img}
            src="/images/Home/home_icon_8.png"
            alt=""
          />
          <img
            className={styles.container_img}
            src="/images/Home/home_icon_9.png"
            alt=""
          />
          <img
            className={styles.container_img}
            src="/images/Home/home_icon_10.png"
            alt=""
          />
        </div>
        {/* xxx님을 위한 인기상품 */}
        <p className={styles.contents_header}>김정훈님을 위한 인기상품</p>
        <div className={styles.container_recommend}>
          <div className={styles.recommend}>
            <img
              className={styles.recommend_img}
              src="/images/recommend_img1.png"
              alt=""
            />
            <p className={styles.recommend_name}>
              단시 프리미엄 비건 톤업 선크림 50ml 기획 (+착붙...
            </p>
            <p className={styles.recommend_discount_before}>34,000원</p>
            <p>
              <span className={styles.recommend_discount_rate}>54%</span>
              <span className={styles.recommend_discount_price}>15,400원</span>
            </p>
            <div className={styles.recommend_div}>
              <div className={styles.recommend_div1}>03:17</div>
              <div className={styles.recommend_div2}>오늘드림</div>
              <div className={styles.recommend_div3}>BEST</div>
            </div>
            <div className={styles.recommend_flaticon}>
              <img
                className={styles.flaticon}
                src="/images/flaticon_heart.png"
                alt=""
              />
              <img
                className={styles.flaticon}
                src="/images/flaticon_cart.png"
                alt=""
              />
            </div>
          </div>
          <div className={styles.recommend}>
            <img
              className={styles.recommend_img}
              src="/images/recommend_img1.png"
              alt=""
            />
            <p className={styles.recommend_name}>
              단시 프리미엄 비건 톤업 선크림 50ml 기획 (+착붙...
            </p>
            <p className={styles.recommend_discount_before}>34,000원</p>
            <p>
              <span className={styles.recommend_discount_rate}>54%</span>
              <span className={styles.recommend_discount_price}>15,400원</span>
            </p>
            <div className={styles.recommend_div}>
              <div className={styles.recommend_div1}>03:17</div>
              <div className={styles.recommend_div2}>오늘드림</div>
              <div className={styles.recommend_div3}>BEST</div>
            </div>
            <div className={styles.recommend_flaticon}>
              <img
                className={styles.flaticon}
                src="/images/flaticon_heart.png"
                alt=""
              />
              <img
                className={styles.flaticon}
                src="/images/flaticon_cart.png"
                alt=""
              />
            </div>
          </div>
          <div className={styles.recommend}>
            <img
              className={styles.recommend_img}
              src="/images/recommend_img1.png"
              alt=""
            />
            <p className={styles.recommend_name}>
              단시 프리미엄 비건 톤업 선크림 50ml 기획 (+착붙...
            </p>
            <p className={styles.recommend_discount_before}>34,000원</p>
            <p>
              <span className={styles.recommend_discount_rate}>54%</span>
              <span className={styles.recommend_discount_price}>15,400원</span>
            </p>
            <div className={styles.recommend_div}>
              <div className={styles.recommend_div1}>03:17</div>
              <div className={styles.recommend_div2}>오늘드림</div>
              <div className={styles.recommend_div3}>BEST</div>
            </div>
            <div className={styles.recommend_flaticon}>
              <img
                className={styles.flaticon}
                src="/images/flaticon_heart.png"
                alt=""
              />
              <img
                className={styles.flaticon}
                src="/images/flaticon_cart.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* 최근 본 연관 추천 상품 */}
        <p className={styles.contents_header}>최근 본 연관 추천 상품</p>
        <div className={styles.container_recommend}>
          <div className={styles.recommend}>
            <img
              className={styles.recommend_img}
              src="/images/recommend_img1.png"
              alt=""
            />
            <p className={styles.recommend_name}>
              단시 프리미엄 비건 톤업 선크림 50ml 기획 (+착붙...
            </p>
            <p className={styles.recommend_discount_before}>34,000원</p>
            <p>
              <span className={styles.recommend_discount_rate}>54%</span>
              <span className={styles.recommend_discount_price}>15,400원</span>
            </p>
            <div className={styles.recommend_div}>
              <div className={styles.recommend_div1}>03:17</div>
              <div className={styles.recommend_div2}>오늘드림</div>
              <div className={styles.recommend_div3}>BEST</div>
            </div>
            <div className={styles.recommend_flaticon}>
              <img
                className={styles.flaticon}
                src="/images/flaticon_heart.png"
                alt=""
              />
              <img
                className={styles.flaticon}
                src="/images/flaticon_cart.png"
                alt=""
              />
            </div>
          </div>
          <div className={styles.recommend}>
            <img
              className={styles.recommend_img}
              src="/images/recommend_img1.png"
              alt=""
            />
            <p className={styles.recommend_name}>
              단시 프리미엄 비건 톤업 선크림 50ml 기획 (+착붙...
            </p>
            <p className={styles.recommend_discount_before}>34,000원</p>
            <p>
              <span className={styles.recommend_discount_rate}>54%</span>
              <span className={styles.recommend_discount_price}>15,400원</span>
            </p>
            <div className={styles.recommend_div}>
              <div className={styles.recommend_div1}>03:17</div>
              <div className={styles.recommend_div2}>오늘드림</div>
              <div className={styles.recommend_div3}>BEST</div>
            </div>
            <div className={styles.recommend_flaticon}>
              <img
                className={styles.flaticon}
                src="/images/flaticon_heart.png"
                alt=""
              />
              <img
                className={styles.flaticon}
                src="/images/flaticon_cart.png"
                alt=""
              />
            </div>
          </div>
          <div className={styles.recommend}>
            <img
              className={styles.recommend_img}
              src="/images/recommend_img1.png"
              alt=""
            />
            <p className={styles.recommend_name}>
              단시 프리미엄 비건 톤업 선크림 50ml 기획 (+착붙...
            </p>
            <p className={styles.recommend_discount_before}>34,000원</p>
            <p>
              <span className={styles.recommend_discount_rate}>54%</span>
              <span className={styles.recommend_discount_price}>15,400원</span>
            </p>
            <div className={styles.recommend_div}>
              <div className={styles.recommend_div1}>03:17</div>
              <div className={styles.recommend_div2}>오늘드림</div>
              <div className={styles.recommend_div3}>BEST</div>
            </div>
            <div className={styles.recommend_flaticon}>
              <img
                className={styles.flaticon}
                src="/images/flaticon_heart.png"
                alt=""
              />
              <img
                className={styles.flaticon}
                src="/images/flaticon_cart.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* 카테고리 랭킹 */}
        <p className={styles.contents_header}>카테고리 랭킹</p>
        <div className={styles.category_header}>
          {categories.map((category) => (
            <div
              key={category}
              className={`${styles.category_name} ${
                selectedCategory === category
                  ? styles.selected
                  : styles.unselected
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>
        <div className={styles.container_category}>
          <div className={styles.category}>
            <img
              className={styles.category_img}
              src="/images/ranking_1.png"
              alt=""
            />
            <div className={styles.category_contents}>
              <div className={styles.category_textbox}>
                <p className={styles.category_text}>
                  [11월 올영픽/1+1][흔적세럼] 마데카소사이드 흔적 리페어 세럼
                  더블 기획...
                </p>
                <p className={styles.category_price}>
                  <span className={styles.category_discount_rate}>46%</span>
                  <span className={styles.category_discount_price}>
                    19,900원
                  </span>
                  <span className={styles.category_discount_before}>
                    36,000원
                  </span>
                </p>
                <div className={styles.category_div}>
                  <div className={styles.category_div1}>03:17</div>
                  <div className={styles.category_div2}>오늘드림</div>
                  <div className={styles.category_div3}>BEST</div>
                </div>
              </div>
            </div>
            <div className={styles.category_flaticonbox}>
              <img
                className={styles.flaticon}
                src="/images/flaticon_heart.png"
                alt=""
              />
              <img
                className={styles.flaticon}
                src="/images/flaticon_cart.png"
                alt=""
              />
            </div>
          </div>
          <div className={styles.category}>
            <img
              className={styles.category_img}
              src="/images/ranking_1.png"
              alt=""
            />
            <div className={styles.category_contents}>
              <div className={styles.category_textbox}>
                <p className={styles.category_text}>
                  [11월 올영픽/1+1][흔적세럼] 마데카소사이드 흔적 리페어 세럼
                  더블 기획...
                </p>
                <p className={styles.category_price}>
                  <span className={styles.category_discount_rate}>46%</span>
                  <span className={styles.category_discount_price}>
                    19,900원
                  </span>
                  <span className={styles.category_discount_before}>
                    36,000원
                  </span>
                </p>
                <div className={styles.category_div}>
                  <div className={styles.category_div1}>03:17</div>
                  <div className={styles.category_div2}>오늘드림</div>
                  <div className={styles.category_div3}>BEST</div>
                </div>
              </div>
            </div>
            <div className={styles.category_flaticonbox}>
              <img
                className={styles.flaticon}
                src="/images/flaticon_heart.png"
                alt=""
              />
              <img
                className={styles.flaticon}
                src="/images/flaticon_cart.png"
                alt=""
              />
            </div>
          </div>
          <div className={styles.category}>
            <img
              className={styles.category_img}
              src="/images/ranking_1.png"
              alt=""
            />
            <div className={styles.category_contents}>
              <div className={styles.category_textbox}>
                <p className={styles.category_text}>
                  [11월 올영픽/1+1][흔적세럼] 마데카소사이드 흔적 리페어 세럼
                  더블 기획...
                </p>
                <p className={styles.category_price}>
                  <span className={styles.category_discount_rate}>46%</span>
                  <span className={styles.category_discount_price}>
                    19,900원
                  </span>
                  <span className={styles.category_discount_before}>
                    36,000원
                  </span>
                </p>
                <div className={styles.category_div}>
                  <div className={styles.category_div1}>03:17</div>
                  <div className={styles.category_div2}>오늘드림</div>
                  <div className={styles.category_div3}>BEST</div>
                </div>
              </div>
            </div>
            <div className={styles.category_flaticonbox}>
              <img
                className={styles.flaticon}
                src="/images/flaticon_heart.png"
                alt=""
              />
              <img
                className={styles.flaticon}
                src="/images/flaticon_cart.png"
                alt=""
              />
            </div>
          </div>
          <div className={styles.category}>
            <img
              className={styles.category_img}
              src="/images/ranking_1.png"
              alt=""
            />
            <div className={styles.category_contents}>
              <div className={styles.category_textbox}>
                <p className={styles.category_text}>
                  [11월 올영픽/1+1][흔적세럼] 마데카소사이드 흔적 리페어 세럼
                  더블 기획...
                </p>
                <p className={styles.category_price}>
                  <span className={styles.category_discount_rate}>46%</span>
                  <span className={styles.category_discount_price}>
                    19,900원
                  </span>
                  <span className={styles.category_discount_before}>
                    36,000원
                  </span>
                </p>
                <div className={styles.category_div}>
                  <div className={styles.category_div1}>03:17</div>
                  <div className={styles.category_div2}>오늘드림</div>
                  <div className={styles.category_div3}>BEST</div>
                </div>
              </div>
            </div>
            <div className={styles.category_flaticonbox}>
              <img
                className={styles.flaticon}
                src="/images/flaticon_heart.png"
                alt=""
              />
              <img
                className={styles.flaticon}
                src="/images/flaticon_cart.png"
                alt=""
              />
            </div>
          </div>
          <div className={styles.category}>
            <img
              className={styles.category_img}
              src="/images/ranking_1.png"
              alt=""
            />
            <div className={styles.category_contents}>
              <div className={styles.category_textbox}>
                <p className={styles.category_text}>
                  [11월 올영픽/1+1][흔적세럼] 마데카소사이드 흔적 리페어 세럼
                  더블 기획...
                </p>
                <p className={styles.category_price}>
                  <span className={styles.category_discount_rate}>46%</span>
                  <span className={styles.category_discount_price}>
                    19,900원
                  </span>
                  <span className={styles.category_discount_before}>
                    36,000원
                  </span>
                </p>
                <div className={styles.category_div}>
                  <div className={styles.category_div1}>03:17</div>
                  <div className={styles.category_div2}>오늘드림</div>
                  <div className={styles.category_div3}>BEST</div>
                </div>
              </div>
            </div>
            <div className={styles.category_flaticonbox}>
              <img
                className={styles.flaticon}
                src="/images/flaticon_heart.png"
                alt=""
              />
              <img
                className={styles.flaticon}
                src="/images/flaticon_cart.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={styles.category_page}>
          <img
            className={styles.category_prevpage}
            onClick={handlePrevPage}
            src="/images/flaticon_smaller.png"
            alt=""
          />
          <span className={styles.category_selectedpage}>
            {selectedCategoryPage}
          </span>
          <span>&nbsp; | &nbsp;</span>
          <span>20</span>
          <img
            className={styles.category_nextpage}
            onClick={handleNextPage}
            src="/images/flaticon_larger.png"
            alt=""
          />
        </div>
        {/* 관심있을 만한 세일 상품 */}
        <p className={styles.contents_header}>관심있을 만한 세일 상품</p>
        <div className={styles.container_sale}>
          <div className={styles.sale}>
            <img
              className={styles.sale_img}
              src="/images/recommend_img1.png"
              alt=""
            />
            <p className={styles.sale_name}>
              단시 프리미엄 비건 톤업 선크림 50ml 기획 (+착붙...
            </p>
            <p className={styles.sale_discount_before}>34,000원</p>
            <p>
              <span className={styles.sale_discount_rate}>54%</span>
              <span className={styles.sale_discount_price}>15,400원</span>
            </p>
            <div className={styles.sale_div}>
              <div className={styles.sale_div1}>03:17</div>
              <div className={styles.sale_div2}>오늘드림</div>
              <div className={styles.sale_div3}>BEST</div>
            </div>
          </div>
          <div className={styles.sale}>
            <img
              className={styles.sale_img}
              src="/images/recommend_img1.png"
              alt=""
            />
            <p className={styles.sale_name}>
              단시 프리미엄 비건 톤업 선크림 50ml 기획 (+착붙...
            </p>
            <p className={styles.sale_discount_before}>34,000원</p>
            <p>
              <span className={styles.sale_discount_rate}>54%</span>
              <span className={styles.sale_discount_price}>15,400원</span>
            </p>
            <div className={styles.sale_div}>
              <div className={styles.sale_div1}>03:17</div>
              <div className={styles.sale_div2}>오늘드림</div>
              <div className={styles.sale_div3}>BEST</div>
            </div>
          </div>
          <div className={styles.sale}>
            <img
              className={styles.sale_img}
              src="/images/recommend_img1.png"
              alt=""
            />
            <p className={styles.sale_name}>
              단시 프리미엄 비건 톤업 선크림 50ml 기획 (+착붙...
            </p>
            <p className={styles.sale_discount_before}>34,000원</p>
            <p>
              <span className={styles.sale_discount_rate}>54%</span>
              <span className={styles.sale_discount_price}>15,400원</span>
            </p>
            <div className={styles.sale_div}>
              <div className={styles.sale_div1}>03:17</div>
              <div className={styles.sale_div2}>오늘드림</div>
              <div className={styles.sale_div3}>BEST</div>
            </div>
          </div>
          <div className={styles.sale}>
            <img
              className={styles.sale_img}
              src="/images/recommend_img1.png"
              alt=""
            />
            <p className={styles.sale_name}>
              단시 프리미엄 비건 톤업 선크림 50ml 기획 (+착붙...
            </p>
            <p className={styles.sale_discount_before}>34,000원</p>
            <p>
              <span className={styles.sale_discount_rate}>54%</span>
              <span className={styles.sale_discount_price}>15,400원</span>
            </p>
            <div className={styles.sale_div}>
              <div className={styles.sale_div1}>03:17</div>
              <div className={styles.sale_div2}>오늘드림</div>
              <div className={styles.sale_div3}>BEST</div>
            </div>
          </div>
          <div className={styles.sale}>
            <img
              className={styles.sale_img}
              src="/images/recommend_img1.png"
              alt=""
            />
            <p className={styles.sale_name}>
              단시 프리미엄 비건 톤업 선크림 50ml 기획 (+착붙...
            </p>
            <p className={styles.sale_discount_before}>34,000원</p>
            <p>
              <span className={styles.sale_discount_rate}>54%</span>
              <span className={styles.sale_discount_price}>15,400원</span>
            </p>
            <div className={styles.sale_div}>
              <div className={styles.sale_div1}>03:17</div>
              <div className={styles.sale_div2}>오늘드림</div>
              <div className={styles.sale_div3}>BEST</div>
            </div>
          </div>
          <div className={styles.sale}>
            <img
              className={styles.sale_img}
              src="/images/recommend_img1.png"
              alt=""
            />
            <p className={styles.sale_name}>
              단시 프리미엄 비건 톤업 선크림 50ml 기획 (+착붙...
            </p>
            <p className={styles.sale_discount_before}>34,000원</p>
            <p>
              <span className={styles.sale_discount_rate}>54%</span>
              <span className={styles.sale_discount_price}>15,400원</span>
            </p>
            <div className={styles.sale_div}>
              <div className={styles.sale_div1}>03:17</div>
              <div className={styles.sale_div2}>오늘드림</div>
              <div className={styles.sale_div3}>BEST</div>
            </div>
          </div>
        </div>
        {/* 방금 본 베이스메이크업에서 이 상품은 어때요? */}
        <p className={styles.contents_header}>
          방금 본 베이스메이크업에서 이 상품은 어때요?
        </p>
        <div className={styles.container_sale}>
          <div className={styles.sale}>
            <img
              className={styles.sale_img}
              src="/images/recommend_img1.png"
              alt=""
            />
            <p className={styles.sale_name}>
              단시 프리미엄 비건 톤업 선크림 50ml 기획 (+착붙...
            </p>
            <p className={styles.sale_discount_before}>34,000원</p>
            <p>
              <span className={styles.sale_discount_rate}>54%</span>
              <span className={styles.sale_discount_price}>15,400원</span>
            </p>
            <div className={styles.sale_div}>
              <div className={styles.sale_div1}>03:17</div>
              <div className={styles.sale_div2}>오늘드림</div>
              <div className={styles.sale_div3}>BEST</div>
            </div>
          </div>
          <div className={styles.sale}>
            <img
              className={styles.sale_img}
              src="/images/recommend_img1.png"
              alt=""
            />
            <p className={styles.sale_name}>
              단시 프리미엄 비건 톤업 선크림 50ml 기획 (+착붙...
            </p>
            <p className={styles.sale_discount_before}>34,000원</p>
            <p>
              <span className={styles.sale_discount_rate}>54%</span>
              <span className={styles.sale_discount_price}>15,400원</span>
            </p>
            <div className={styles.sale_div}>
              <div className={styles.sale_div1}>03:17</div>
              <div className={styles.sale_div2}>오늘드림</div>
              <div className={styles.sale_div3}>BEST</div>
            </div>
          </div>
          <div className={styles.sale}>
            <img
              className={styles.sale_img}
              src="/images/recommend_img1.png"
              alt=""
            />
            <p className={styles.sale_name}>
              단시 프리미엄 비건 톤업 선크림 50ml 기획 (+착붙...
            </p>
            <p className={styles.sale_discount_before}>34,000원</p>
            <p>
              <span className={styles.sale_discount_rate}>54%</span>
              <span className={styles.sale_discount_price}>15,400원</span>
            </p>
            <div className={styles.sale_div}>
              <div className={styles.sale_div1}>03:17</div>
              <div className={styles.sale_div2}>오늘드림</div>
              <div className={styles.sale_div3}>BEST</div>
            </div>
          </div>
          <div className={styles.sale}>
            <img
              className={styles.sale_img}
              src="/images/recommend_img1.png"
              alt=""
            />
            <p className={styles.sale_name}>
              단시 프리미엄 비건 톤업 선크림 50ml 기획 (+착붙...
            </p>
            <p className={styles.sale_discount_before}>34,000원</p>
            <p>
              <span className={styles.sale_discount_rate}>54%</span>
              <span className={styles.sale_discount_price}>15,400원</span>
            </p>
            <div className={styles.sale_div}>
              <div className={styles.sale_div1}>03:17</div>
              <div className={styles.sale_div2}>오늘드림</div>
              <div className={styles.sale_div3}>BEST</div>
            </div>
          </div>
          <div className={styles.sale}>
            <img
              className={styles.sale_img}
              src="/images/recommend_img1.png"
              alt=""
            />
            <p className={styles.sale_name}>
              단시 프리미엄 비건 톤업 선크림 50ml 기획 (+착붙...
            </p>
            <p className={styles.sale_discount_before}>34,000원</p>
            <p>
              <span className={styles.sale_discount_rate}>54%</span>
              <span className={styles.sale_discount_price}>15,400원</span>
            </p>
            <div className={styles.sale_div}>
              <div className={styles.sale_div1}>03:17</div>
              <div className={styles.sale_div2}>오늘드림</div>
              <div className={styles.sale_div3}>BEST</div>
            </div>
          </div>
          <div className={styles.sale}>
            <img
              className={styles.sale_img}
              src="/images/recommend_img1.png"
              alt=""
            />
            <p className={styles.sale_name}>
              단시 프리미엄 비건 톤업 선크림 50ml 기획 (+착붙...
            </p>
            <p className={styles.sale_discount_before}>34,000원</p>
            <p>
              <span className={styles.sale_discount_rate}>54%</span>
              <span className={styles.sale_discount_price}>15,400원</span>
            </p>
            <div className={styles.sale_div}>
              <div className={styles.sale_div1}>03:17</div>
              <div className={styles.sale_div2}>오늘드림</div>
              <div className={styles.sale_div3}>BEST</div>
            </div>
          </div>
        </div>
        {/* 올리브영 매거진 */}
        <p className={styles.contents_header}>올리브영 매거진</p>
        <div className={styles.container_magazine}>
          <div className={styles.magazine}>
            <img
              className={styles.magazine_img}
              src="/images/magazine_1.png"
              alt=""
            />
            <p>보송한 립 하나면</p>
            <p>느좋 지수 급상승</p>
          </div>
          <div className={styles.magazine}>
            <img
              className={styles.magazine_img}
              src="/images/magazine_2.png"
              alt=""
            />
            <p>가장 얇은 눈가</p>
            <p>맞춤 슬로우에이징</p>
          </div>
          <div className={styles.magazine}>
            <img
              className={styles.magazine_img}
              src="/images/magazine_3.png"
              alt=""
            />
            <p>장원영 헤어오일</p>
            <p>왜 좋을까?</p>
          </div>
          <div className={styles.magazine}>
            <img
              className={styles.magazine_img}
              src="/images/magazine_4.png"
              alt=""
            />
            <p>4세대 걸그룹 픽</p>
            <p>NEW 뷰티포인트?</p>
          </div>
        </div>
        <div className={styles.magazine_btn}>
          <span>매거진 더 보러가기</span>
          <img
            className={styles.flaticon2}
            src="/images/flaticon_larger.png"
            alt=""
          />
        </div>
        {/* 오늘의 특가 */}
        <div className={styles.today_header}>
          <span className={styles.contents_header}>오늘의 특가</span>
          <span className={styles.contents_header}>
            <img
              className={styles.flaticon2}
              src="/images/flaticon_watch.png"
              alt=""
            />
            03:16:52 남음
          </span>
        </div>
        <div className={styles.container_recommend}>
          <div className={styles.recommend}>
            <img
              className={styles.recommend_img}
              src="/images/recommend_img1.png"
              alt=""
            />
            <p className={styles.recommend_name}>
              단시 프리미엄 비건 톤업 선크림 50ml 기획 (+착붙...
            </p>
            <p className={styles.recommend_discount_before}>34,000원</p>
            <p>
              <span className={styles.recommend_discount_rate}>54%</span>
              <span className={styles.recommend_discount_price}>15,400원</span>
            </p>
            <div className={styles.recommend_div}>
              <div className={styles.recommend_div1}>03:17</div>
              <div className={styles.recommend_div2}>오늘드림</div>
              <div className={styles.recommend_div3}>BEST</div>
            </div>
            <div className={styles.recommend_flaticon}>
              <img
                className={styles.flaticon}
                src="/images/flaticon_heart.png"
                alt=""
              />
              <img
                className={styles.flaticon}
                src="/images/flaticon_cart.png"
                alt=""
              />
            </div>
          </div>
          <div className={styles.recommend}>
            <img
              className={styles.recommend_img}
              src="/images/recommend_img1.png"
              alt=""
            />
            <p className={styles.recommend_name}>
              단시 프리미엄 비건 톤업 선크림 50ml 기획 (+착붙...
            </p>
            <p className={styles.recommend_discount_before}>34,000원</p>
            <p>
              <span className={styles.recommend_discount_rate}>54%</span>
              <span className={styles.recommend_discount_price}>15,400원</span>
            </p>
            <div className={styles.recommend_div}>
              <div className={styles.recommend_div1}>03:17</div>
              <div className={styles.recommend_div2}>오늘드림</div>
              <div className={styles.recommend_div3}>BEST</div>
            </div>
            <div className={styles.recommend_flaticon}>
              <img
                className={styles.flaticon}
                src="/images/flaticon_heart.png"
                alt=""
              />
              <img
                className={styles.flaticon}
                src="/images/flaticon_cart.png"
                alt=""
              />
            </div>
          </div>
          <div className={styles.recommend}>
            <img
              className={styles.recommend_img}
              src="/images/recommend_img1.png"
              alt=""
            />
            <p className={styles.recommend_name}>
              단시 프리미엄 비건 톤업 선크림 50ml 기획 (+착붙...
            </p>
            <p className={styles.recommend_discount_before}>34,000원</p>
            <p>
              <span className={styles.recommend_discount_rate}>54%</span>
              <span className={styles.recommend_discount_price}>15,400원</span>
            </p>
            <div className={styles.recommend_div}>
              <div className={styles.recommend_div1}>03:17</div>
              <div className={styles.recommend_div2}>오늘드림</div>
              <div className={styles.recommend_div3}>BEST</div>
            </div>
            <div className={styles.recommend_flaticon}>
              <img
                className={styles.flaticon}
                src="/images/flaticon_heart.png"
                alt=""
              />
              <img
                className={styles.flaticon}
                src="/images/flaticon_cart.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* 조회 급상승, 인기템 */}
        <p className={styles.contents_header}>조회 급상승, 인기템</p>
        <div className={styles.category_header}>
          {categories.map((category) => (
            <div
              key={category}
              className={`${styles.category_name} ${
                selectedCategory === category
                  ? styles.selected
                  : styles.unselected
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>
        <div className={styles.container_category}>
          <div className={styles.category}>
            <img
              className={styles.category_img}
              src="/images/ranking_1.png"
              alt=""
            />
            <div className={styles.category_contents}>
              <div className={styles.category_textbox}>
                <p className={styles.category_text}>
                  [11월 올영픽/1+1][흔적세럼] 마데카소사이드 흔적 리페어 세럼
                  더블 기획...
                </p>
                <p className={styles.category_price}>
                  <span className={styles.category_discount_rate}>46%</span>
                  <span className={styles.category_discount_price}>
                    19,900원
                  </span>
                  <span className={styles.category_discount_before}>
                    36,000원
                  </span>
                </p>
                <div className={styles.category_div}>
                  <div className={styles.category_div1}>03:17</div>
                  <div className={styles.category_div2}>오늘드림</div>
                  <div className={styles.category_div3}>BEST</div>
                </div>
              </div>
            </div>
            <div className={styles.category_flaticonbox}>
              <img
                className={styles.flaticon}
                src="/images/flaticon_heart.png"
                alt=""
              />
              <img
                className={styles.flaticon}
                src="/images/flaticon_cart.png"
                alt=""
              />
            </div>
          </div>
          <div className={styles.category}>
            <img
              className={styles.category_img}
              src="/images/ranking_1.png"
              alt=""
            />
            <div className={styles.category_contents}>
              <div className={styles.category_textbox}>
                <p className={styles.category_text}>
                  [11월 올영픽/1+1][흔적세럼] 마데카소사이드 흔적 리페어 세럼
                  더블 기획...
                </p>
                <p className={styles.category_price}>
                  <span className={styles.category_discount_rate}>46%</span>
                  <span className={styles.category_discount_price}>
                    19,900원
                  </span>
                  <span className={styles.category_discount_before}>
                    36,000원
                  </span>
                </p>
                <div className={styles.category_div}>
                  <div className={styles.category_div1}>03:17</div>
                  <div className={styles.category_div2}>오늘드림</div>
                  <div className={styles.category_div3}>BEST</div>
                </div>
              </div>
            </div>
            <div className={styles.category_flaticonbox}>
              <img
                className={styles.flaticon}
                src="/images/flaticon_heart.png"
                alt=""
              />
              <img
                className={styles.flaticon}
                src="/images/flaticon_cart.png"
                alt=""
              />
            </div>
          </div>
          <div className={styles.category}>
            <img
              className={styles.category_img}
              src="/images/ranking_1.png"
              alt=""
            />
            <div className={styles.category_contents}>
              <div className={styles.category_textbox}>
                <p className={styles.category_text}>
                  [11월 올영픽/1+1][흔적세럼] 마데카소사이드 흔적 리페어 세럼
                  더블 기획...
                </p>
                <p className={styles.category_price}>
                  <span className={styles.category_discount_rate}>46%</span>
                  <span className={styles.category_discount_price}>
                    19,900원
                  </span>
                  <span className={styles.category_discount_before}>
                    36,000원
                  </span>
                </p>
                <div className={styles.category_div}>
                  <div className={styles.category_div1}>03:17</div>
                  <div className={styles.category_div2}>오늘드림</div>
                  <div className={styles.category_div3}>BEST</div>
                </div>
              </div>
            </div>
            <div className={styles.category_flaticonbox}>
              <img
                className={styles.flaticon}
                src="/images/flaticon_heart.png"
                alt=""
              />
              <img
                className={styles.flaticon}
                src="/images/flaticon_cart.png"
                alt=""
              />
            </div>
          </div>
          <div className={styles.category}>
            <img
              className={styles.category_img}
              src="/images/ranking_1.png"
              alt=""
            />
            <div className={styles.category_contents}>
              <div className={styles.category_textbox}>
                <p className={styles.category_text}>
                  [11월 올영픽/1+1][흔적세럼] 마데카소사이드 흔적 리페어 세럼
                  더블 기획...
                </p>
                <p className={styles.category_price}>
                  <span className={styles.category_discount_rate}>46%</span>
                  <span className={styles.category_discount_price}>
                    19,900원
                  </span>
                  <span className={styles.category_discount_before}>
                    36,000원
                  </span>
                </p>
                <div className={styles.category_div}>
                  <div className={styles.category_div1}>03:17</div>
                  <div className={styles.category_div2}>오늘드림</div>
                  <div className={styles.category_div3}>BEST</div>
                </div>
              </div>
            </div>
            <div className={styles.category_flaticonbox}>
              <img
                className={styles.flaticon}
                src="/images/flaticon_heart.png"
                alt=""
              />
              <img
                className={styles.flaticon}
                src="/images/flaticon_cart.png"
                alt=""
              />
            </div>
          </div>
          <div className={styles.category}>
            <img
              className={styles.category_img}
              src="/images/ranking_1.png"
              alt=""
            />
            <div className={styles.category_contents}>
              <div className={styles.category_textbox}>
                <p className={styles.category_text}>
                  [11월 올영픽/1+1][흔적세럼] 마데카소사이드 흔적 리페어 세럼
                  더블 기획...
                </p>
                <p className={styles.category_price}>
                  <span className={styles.category_discount_rate}>46%</span>
                  <span className={styles.category_discount_price}>
                    19,900원
                  </span>
                  <span className={styles.category_discount_before}>
                    36,000원
                  </span>
                </p>
                <div className={styles.category_div}>
                  <div className={styles.category_div1}>03:17</div>
                  <div className={styles.category_div2}>오늘드림</div>
                  <div className={styles.category_div3}>BEST</div>
                </div>
              </div>
            </div>
            <div className={styles.category_flaticonbox}>
              <img
                className={styles.flaticon}
                src="/images/flaticon_heart.png"
                alt=""
              />
              <img
                className={styles.flaticon}
                src="/images/flaticon_cart.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={styles.category_page}>
          <img
            className={styles.category_prevpage}
            onClick={handlePrevPage}
            src="/images/flaticon_smaller.png"
            alt=""
          />
          <span className={styles.category_selectedpage}>
            {selectedCategoryPage}
          </span>
          <span>&nbsp; | &nbsp;</span>
          <span>20</span>
          <img
            className={styles.category_nextpage}
            onClick={handleNextPage}
            src="/images/flaticon_larger.png"
            alt=""
          />
        </div>
        {/* 올영라이브 */}
        <p className={styles.contents_header}>올영라이브</p>
        <div className={styles.container_live}>
          <div className={styles.live}>
            <img
              className={styles.live_img}
              src="/images/live_1.png"
              alt=""
            ></img>
          </div>
          <div className={styles.live}>
            <img
              className={styles.live_img}
              src="/images/live_1.png"
              alt=""
            ></img>
          </div>
          <div className={styles.live}>
            <img
              className={styles.live_img}
              src="/images/live_1.png"
              alt=""
            ></img>
          </div>
        </div>
      </div>
      {showBottomNav && <BottomNav isVisible={showBottomNav} />}
      <Footer />
    </div>
  );
};

export default HomePage;
