import React, { useState, useEffect, useRef } from "react";
import styles from "./History.module.css";
import History_header from "./History_header";
import BottomNav from "../Common/BottomNav";
import Footer from "../Common/Footer";

const History = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [showBottomNav, setShowBottomNav] = useState(true);
  const lastScrollY = useRef(0); // 스크롤 위치 추적
  const isThrottled = useRef(false); // 쓰로틀링을 위한 변수

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
          } else if (direction === "up" && !showHeader) {
            setShowHeader(true); // 스크롤 올릴 때 헤더 보이기
            setShowBottomNav(true); // bottomNav 보이기
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

  const [recentOrLike, setRecentOrLike] = useState(true);

  const handleRecent = () => {
    setRecentOrLike(true);
  };

  const handleLike = () => {
    setRecentOrLike(false);
  };

  return (
    <div className={styles.main}>
      {showHeader && <History_header isVisible={showHeader} />}
      <div
        className={styles.history_topnav}
        style={{ top: showHeader ? "6vh" : "0" }}
      >
        <span
          className={recentOrLike ? styles.nav_span : styles.nav_span2}
          onClick={handleRecent}
        >
          최근 본
        </span>
        <span
          className={recentOrLike ? styles.nav_span2 : styles.nav_span}
          onClick={handleLike}
        >
          좋아요한
        </span>
      </div>
      <div className={styles.body}>
        {/* 최근 본 or 좋아요한 */}
        {recentOrLike ? (
          <div className={styles.recentDiv}>
            <div className={styles.recent}>
              <div>총 4개</div>
              <div>편집</div>
            </div>
            <div className={styles.container_history}>
              <div className={styles.history}>
                <img
                  className={styles.history_img}
                  src="/images/ranking_1.png"
                  alt=""
                />
                <div className={styles.history_contents}>
                  <div className={styles.history_textbox}>
                    <p className={styles.history_text}>
                      [11월 올영픽/1+1][흔적세럼] 마데카소사이드 흔적 리페어
                      세럼 더블 기획...
                    </p>
                    <p className={styles.history_price}>
                      <span className={styles.history_discount_rate}>46%</span>
                      <span className={styles.history_discount_price}>
                        19,900원
                      </span>
                      <span className={styles.history_discount_before}>
                        36,000원
                      </span>
                    </p>
                    <div className={styles.history_div}>
                      <div className={styles.history_div1}>03:17</div>
                      <div className={styles.history_div2}>오늘드림</div>
                      <div className={styles.history_div3}>BEST</div>
                    </div>
                  </div>
                </div>
                <div className={styles.history_flaticonbox}>
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
              <div className={styles.history}>
                <img
                  className={styles.history_img}
                  src="/images/ranking_1.png"
                  alt=""
                />
                <div className={styles.history_contents}>
                  <div className={styles.history_textbox}>
                    <p className={styles.history_text}>
                      [11월 올영픽/1+1][흔적세럼] 마데카소사이드 흔적 리페어
                      세럼 더블 기획...
                    </p>
                    <p className={styles.history_price}>
                      <span className={styles.history_discount_rate}>46%</span>
                      <span className={styles.history_discount_price}>
                        19,900원
                      </span>
                      <span className={styles.history_discount_before}>
                        36,000원
                      </span>
                    </p>
                    <div className={styles.history_div}>
                      <div className={styles.history_div1}>03:17</div>
                      <div className={styles.history_div2}>오늘드림</div>
                      <div className={styles.history_div3}>BEST</div>
                    </div>
                  </div>
                </div>
                <div className={styles.history_flaticonbox}>
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
              <div className={styles.history}>
                <img
                  className={styles.history_img}
                  src="/images/ranking_1.png"
                  alt=""
                />
                <div className={styles.history_contents}>
                  <div className={styles.history_textbox}>
                    <p className={styles.history_text}>
                      [11월 올영픽/1+1][흔적세럼] 마데카소사이드 흔적 리페어
                      세럼 더블 기획...
                    </p>
                    <p className={styles.history_price}>
                      <span className={styles.history_discount_rate}>46%</span>
                      <span className={styles.history_discount_price}>
                        19,900원
                      </span>
                      <span className={styles.history_discount_before}>
                        36,000원
                      </span>
                    </p>
                    <div className={styles.history_div}>
                      <div className={styles.history_div1}>03:17</div>
                      <div className={styles.history_div2}>오늘드림</div>
                      <div className={styles.history_div3}>BEST</div>
                    </div>
                  </div>
                </div>
                <div className={styles.history_flaticonbox}>
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
              <div className={styles.history}>
                <img
                  className={styles.history_img}
                  src="/images/ranking_1.png"
                  alt=""
                />
                <div className={styles.history_contents}>
                  <div className={styles.history_textbox}>
                    <p className={styles.history_text}>
                      [11월 올영픽/1+1][흔적세럼] 마데카소사이드 흔적 리페어
                      세럼 더블 기획...
                    </p>
                    <p className={styles.history_price}>
                      <span className={styles.history_discount_rate}>46%</span>
                      <span className={styles.history_discount_price}>
                        19,900원
                      </span>
                      <span className={styles.history_discount_before}>
                        36,000원
                      </span>
                    </p>
                    <div className={styles.history_div}>
                      <div className={styles.history_div1}>03:17</div>
                      <div className={styles.history_div2}>오늘드림</div>
                      <div className={styles.history_div3}>BEST</div>
                    </div>
                  </div>
                </div>
                <div className={styles.history_flaticonbox}>
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
            <div className={styles.contents_header}>
              <p>방금 찾으신</p>
              <p>이 상품과 함께 많이 본 상품</p>
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
                  <span className={styles.recommend_discount_price}>
                    15,400원
                  </span>
                </p>
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
                  <span className={styles.recommend_discount_price}>
                    15,400원
                  </span>
                </p>
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
                  <span className={styles.recommend_discount_price}>
                    15,400원
                  </span>
                </p>
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
                  <span className={styles.recommend_discount_price}>
                    15,400원
                  </span>
                </p>
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
                  <span className={styles.recommend_discount_price}>
                    15,400원
                  </span>
                </p>
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
                  <span className={styles.recommend_discount_price}>
                    15,400원
                  </span>
                </p>
              </div>
            </div>
          </div>
        ) : (
          // 좋아요 한
          <div className={styles.likeDiv}>
            <div className={styles.recent}>
              <div>총 1개</div>
              <div>전체삭제</div>
            </div>
            <div className={styles.history}>
              <img
                className={styles.history_img}
                src="/images/ranking_1.png"
                alt=""
              />
              <div className={styles.history_contents}>
                <div className={styles.history_textbox}>
                  <p className={styles.history_text}>
                    [11월 올영픽/1+1][흔적세럼] 마데카소사이드 흔적 리페어 세럼
                    더블 기획...
                  </p>
                  <p className={styles.history_price}>
                    <span className={styles.history_discount_rate}>46%</span>
                    <span className={styles.history_discount_price}>
                      19,900원
                    </span>
                    <span className={styles.history_discount_before}>
                      36,000원
                    </span>
                  </p>
                </div>
              </div>
              <div className={styles.history_flaticonbox}>
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
            <div className={styles.contents_header}>이 상품은 어때요?</div>
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
                  <span className={styles.recommend_discount_price}>
                    15,400원
                  </span>
                </p>
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
                  <span className={styles.recommend_discount_price}>
                    15,400원
                  </span>
                </p>
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
                  <span className={styles.recommend_discount_price}>
                    15,400원
                  </span>
                </p>
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
                  <span className={styles.recommend_discount_price}>
                    15,400원
                  </span>
                </p>
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
                  <span className={styles.recommend_discount_price}>
                    15,400원
                  </span>
                </p>
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
                  <span className={styles.recommend_discount_price}>
                    15,400원
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
        {/* dd */}
      </div>
      {showBottomNav && <BottomNav isVisible={showBottomNav} />}
      <Footer />
    </div>
  );
};

export default History;
