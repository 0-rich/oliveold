import React, { useState } from "react";
import styles from "./HomePage.module.css";
import Header from "../Common/Header";
import TopNav from "../Common/TopNav";

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

  return (
    <div className={styles.main}>
      <Header />
      <TopNav />
      <div className={styles.body}>
        <img
          className={styles.main_img}
          src="/images/Home/homepage_main_1.jpg"
        />
        <div className={styles.container_imgs}>
          <img
            className={styles.container_img}
            src="/images/Home/home_icon_1.png"
          />
          <img
            className={styles.container_img}
            src="/images/Home/home_icon_2.png"
          />
          <img
            className={styles.container_img}
            src="/images/Home/home_icon_3.png"
          />
          <img
            className={styles.container_img}
            src="/images/Home/home_icon_4.png"
          />
          <img
            className={styles.container_img}
            src="/images/Home/home_icon_5.png"
          />
          <img
            className={styles.container_img}
            src="/images/Home/home_icon_6.png"
          />
          <img
            className={styles.container_img}
            src="/images/Home/home_icon_7.png"
          />
          <img
            className={styles.container_img}
            src="/images/Home/home_icon_8.png"
          />
          <img
            className={styles.container_img}
            src="/images/Home/home_icon_9.png"
          />
          <img
            className={styles.container_img}
            src="/images/Home/home_icon_10.png"
          />
        </div>
        <p className={styles.contents_header}>김정훈님을 위한 인기상품</p>
        <div className={styles.container_recommend}>
          <div className={styles.recommend}>
            <img
              className={styles.recommend_img}
              src="/images/recommend_img1.png"
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
                src="/images/flaticon_heart.png"
                className={styles.flaticon}
              />
              <img
                src="/images/flaticon_cart.png"
                className={styles.flaticon}
              />
            </div>
          </div>
          <div className={styles.recommend}>
            <img
              className={styles.recommend_img}
              src="/images/recommend_img1.png"
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
                src="/images/flaticon_heart.png"
                className={styles.flaticon}
              />
              <img
                src="/images/flaticon_cart.png"
                className={styles.flaticon}
              />
            </div>
          </div>
          <div className={styles.recommend}>
            <img
              className={styles.recommend_img}
              src="/images/recommend_img1.png"
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
                src="/images/flaticon_heart.png"
                className={styles.flaticon}
              />
              <img
                src="/images/flaticon_cart.png"
                className={styles.flaticon}
              />
            </div>
          </div>
        </div>
        <p className={styles.contents_header}>최근 본 연관 추천 상품</p>
        <div className={styles.container_recommend}>
          <div className={styles.recommend}>
            <img
              className={styles.recommend_img}
              src="/images/recommend_img1.png"
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
                src="/images/flaticon_heart.png"
                className={styles.flaticon}
              />
              <img
                src="/images/flaticon_cart.png"
                className={styles.flaticon}
              />
            </div>
          </div>
          <div className={styles.recommend}>
            <img
              className={styles.recommend_img}
              src="/images/recommend_img1.png"
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
                src="/images/flaticon_heart.png"
                className={styles.flaticon}
              />
              <img
                src="/images/flaticon_cart.png"
                className={styles.flaticon}
              />
            </div>
          </div>
          <div className={styles.recommend}>
            <img
              className={styles.recommend_img}
              src="/images/recommend_img1.png"
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
                src="/images/flaticon_heart.png"
                className={styles.flaticon}
              />
              <img
                src="/images/flaticon_cart.png"
                className={styles.flaticon}
              />
            </div>
          </div>
        </div>
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
            <img className={styles.category_img} src="/images/ranking_1.png" />
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
                src="/images/flaticon_heart.png"
                className={styles.flaticon}
              />
              <img
                src="/images/flaticon_cart.png"
                className={styles.flaticon}
              />
            </div>
          </div>
          <div className={styles.category}>
            <img className={styles.category_img} src="/images/ranking_1.png" />
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
                src="/images/flaticon_heart.png"
                className={styles.flaticon}
              />
              <img
                src="/images/flaticon_cart.png"
                className={styles.flaticon}
              />
            </div>
          </div>
          <div className={styles.category}>
            <img className={styles.category_img} src="/images/ranking_1.png" />
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
                src="/images/flaticon_heart.png"
                className={styles.flaticon}
              />
              <img
                src="/images/flaticon_cart.png"
                className={styles.flaticon}
              />
            </div>
          </div>
          <div className={styles.category}>
            <img className={styles.category_img} src="/images/ranking_1.png" />
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
                src="/images/flaticon_heart.png"
                className={styles.flaticon}
              />
              <img
                src="/images/flaticon_cart.png"
                className={styles.flaticon}
              />
            </div>
          </div>
          <div className={styles.category}>
            <img className={styles.category_img} src="/images/ranking_1.png" />
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
                src="/images/flaticon_heart.png"
                className={styles.flaticon}
              />
              <img
                src="/images/flaticon_cart.png"
                className={styles.flaticon}
              />
            </div>
          </div>
        </div>
        <div className={styles.category_page}>
          <img
            src="/images/flaticon_smaller.png"
            className={styles.category_prevpage}
            onClick={handlePrevPage}
          />
          <span className={styles.category_selectedpage}>
            {selectedCategoryPage}
          </span>
          <span>&nbsp; | &nbsp;</span>
          <span>20</span>
          <img
            src="/images/flaticon_larger.png"
            className={styles.category_nextpage}
            onClick={handleNextPage}
          />
        </div>
        <p className={styles.contents_header}>관심있을 만한 세일 상품</p>
        <div className={styles.container_sale}>
          <div className={styles.sale}>
            <img className={styles.sale_img} src="/images/recommend_img1.png" />
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
            <img className={styles.sale_img} src="/images/recommend_img1.png" />
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
            <img className={styles.sale_img} src="/images/recommend_img1.png" />
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
            <img className={styles.sale_img} src="/images/recommend_img1.png" />
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
            <img className={styles.sale_img} src="/images/recommend_img1.png" />
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
            <img className={styles.sale_img} src="/images/recommend_img1.png" />
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
        <p className={styles.contents_header}>
          방금 본 베이스메이크업에서 이 상품은 어때요?
        </p>
        <div className={styles.container_sale}>
          <div className={styles.sale}>
            <img className={styles.sale_img} src="/images/recommend_img1.png" />
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
            <img className={styles.sale_img} src="/images/recommend_img1.png" />
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
            <img className={styles.sale_img} src="/images/recommend_img1.png" />
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
            <img className={styles.sale_img} src="/images/recommend_img1.png" />
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
            <img className={styles.sale_img} src="/images/recommend_img1.png" />
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
            <img className={styles.sale_img} src="/images/recommend_img1.png" />
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
        <p className={styles.contents_header}>올리브영 매거진</p>
        <div className={styles.container_magazine}>
          <div className={styles.magazine}>
            <img className={styles.magazine_img} src="/images/magazine_1.png" />
            <p>보송한 립 하나면</p>
            <p>느좋 지수 급상승</p>
          </div>
          <div className={styles.magazine}>
            <img className={styles.magazine_img} src="/images/magazine_2.png" />
            <p>가장 얇은 눈가</p>
            <p>맞춤 슬로우에이징</p>
          </div>
          <div className={styles.magazine}>
            <img className={styles.magazine_img} src="/images/magazine_3.png" />
            <p>장원영 헤어오일</p>
            <p>왜 좋을까?</p>
          </div>
          <div className={styles.magazine}>
            <img className={styles.magazine_img} src="/images/magazine_4.png" />
            <p>4세대 걸그룹 픽</p>
            <p>NEW 뷰티포인트?</p>
          </div>
        </div>
        <div className={styles.magazine_btn}>
          <span>매거진 더 보러가기</span>
          <img src="/images/flaticon_larger.png" className={styles.flaticon2} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
