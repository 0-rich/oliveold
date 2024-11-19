import React, { useState, useRef, useEffect } from "react";
import styles from "./Category.module.css";
import Category_header from "./Category_header";
import Category_nav from "./Category_nav";
import BottomNav from "../Common/BottomNav";

const categories = [
  {
    name: "스킨케어",
    subcategories: [
      "스킨/토너",
      "에센스/세럼/앰플",
      "크림",
      "로션",
      "미스트/오일",
      "스킨케어세트",
    ],
  },
  {
    name: "마스크팩",
    subcategories: ["시트팩", "패드", "페이셜팩", "코팩", "패치"],
  },
  {
    name: "클렌징",
    subcategories: [
      "클렌징폼/젤",
      "오일/밤",
      "워터/밀크",
      "필링&스크럽",
      "티슈/패드",
      "립&아이무버",
    ],
  },
  {
    name: "선케어",
    subcategories: [
      "선크림",
      "선스틱",
      "선쿠션",
      "선스프레이/선패치",
      "태닝/애프터선",
    ],
  },
  {
    name: "메이크업",
    subcategories: ["립메이크업", "베이스메이크업", "아이메이크업"],
  },
  {
    name: "뷰티소품",
    subcategories: [
      "메이크업소품",
      "스킨케어소품",
      "아이소품",
      "헤어/바디소품",
      "괄사/네일소품",
      "뷰티디바이스",
      "뷰티잡화",
    ],
  },
  {
    name: "더모코스메틱",
    subcategories: ["스킨케어", "바디케어", "클렌징", "선케어", "마스크팩"],
  },
  {
    name: "맨즈케어",
    subcategories: [
      "스킨케어",
      "메이크업",
      "쉐이빙",
      "헤어케어",
      "바디케어",
      "프래그런스/라이프",
    ],
  },
  {
    name: "헤어케어",
    subcategories: [
      "샴푸/린스",
      "트리트먼트/팩",
      "헤어에센스",
      "염색약/펌",
      "헤어기기/브러시",
      "스타일링",
    ],
  },
  {
    name: "바디케어",
    subcategories: [
      "로션/오일",
      "샤워/입욕",
      "립케어",
      "핸드케어",
      "바디미스트",
      "제모/왁싱",
      "데오드란트",
      "선물세트",
      "베이비",
    ],
  },
  {
    name: "향수/디퓨저",
    subcategories: [
      "여성향수",
      "남성향수",
      "유니섹스향수",
      "미니/고체향수",
      "홈프래그런스",
    ],
  },
  {
    name: "네일",
    subcategories: ["일반네일", "젤네일", "네일팁/스티커", "네일케어"],
  },
];

const Category = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const categoryListRef = useRef(null); // categoryList 요소를 참조하기 위한 useRef
  const selectedCategory = categories[selectedCategoryIndex];

  const [showBottomNav, setShowBottomNav] = useState(true);
  const lastScrollY = useRef(0); // 스크롤 위치 추적
  const isThrottled = useRef(false); // 쓰로틀링을 위한 변수

  // 각 대분류의 스크롤 범위 설정
  const categoryOffsets = {
    0: 0, // 스킨케어
    1: 293, // 마스크팩
    2: 551, // 클렌징
    3: 845, // 선케어
    4: 1097, // 메이크업
    5: 1283, // 뷰티소품
    6: 1607, // 더모코스메틱
    7: 1865, // 맨즈케어
    8: 2158, // 헤어케어
    9: 2453, // 바디케어
  };

  // Category의 스크롤 처리 함수
  const handleCategoryScroll = () => {
    const categoryList = categoryListRef.current;
    if (categoryList) {
      const scrollTop = categoryList.scrollTop;
      const categoryHeight = categoryList.clientHeight;

      console.log(
        `Scroll position: ${scrollTop}, Category list height: ${categoryHeight}`
      );

      categories.forEach((category, index) => {
        const categoryOffsetTop = categoryOffsets[index];
        if (
          scrollTop >= categoryOffsetTop &&
          scrollTop < (categoryOffsets[index + 1] || Infinity)
        ) {
          setSelectedCategoryIndex(index);
          console.log(index);
        }
      });
    }
  };

  // 카테고리 클릭 시 호출되는 함수
  const handleCategoryClick = (index) => {
    setSelectedCategoryIndex(index); // 카테고리 인덱스를 설정

    // 카테고리 리스트의 스크롤을 해당 카테고리로 이동
    const categoryList = categoryListRef.current;
    if (categoryList) {
      // categoryOffsets에서 해당 카테고리의 위치를 가져옵니다.
      const categoryOffsetTop = categoryOffsets[index];
      categoryList.scrollTo({
        top: categoryOffsetTop, // 해당 카테고리 위치로 스크롤 이동
        behavior: "smooth", // 부드럽게 스크롤
      });
    }
  };
  // categoryList의 스크롤 시 BottomNav 보이기/숨기기 처리 함수
  const handleScrollVisibility = () => {
    if (isThrottled.current) return;
    isThrottled.current = true;

    setTimeout(() => {
      const categoryList = categoryListRef.current;
      if (categoryList) {
        const currentScrollY = categoryList.scrollTop;
        const direction = currentScrollY > lastScrollY.current ? "down" : "up";

        // 스크롤 변화가 30px 이상일 때만 상태 변경
        if (Math.abs(currentScrollY - lastScrollY.current) > 30) {
          if (direction === "down" && showBottomNav) {
            setShowBottomNav(false); // bottomNav 숨기기
          } else if (direction === "up" && !showBottomNav) {
            setShowBottomNav(true); // bottomNav 보이기
          }
        }

        lastScrollY.current = currentScrollY; // 마지막 스크롤 위치 업데이트
      }

      isThrottled.current = false;
    }, 100); // 100ms 마다 업데이트
  };

  useEffect(() => {
    // Category의 스크롤 이벤트
    const categoryList = categoryListRef.current;
    if (categoryList) {
      categoryList.addEventListener("scroll", handleCategoryScroll);
      categoryList.addEventListener("scroll", handleScrollVisibility);
    }

    return () => {
      // 정리 시 이벤트 리스너 제거
      const categoryList = categoryListRef.current;
      if (categoryList) {
        categoryList.removeEventListener("scroll", handleCategoryScroll);
        categoryList.removeEventListener("scroll", handleScrollVisibility);
      }
    };
  }, [showBottomNav]); // 의존성 배열 업데이트

  return (
    <div className={styles.body}>
      <Category_header />
      <div className={styles.body2}>
        <Category_nav
          categories={categories.map((category) => category.name)}
          selectedCategoryIndex={selectedCategoryIndex} // 선택된 카테고리 인덱스 전달
          setSelectedIndex={setSelectedCategoryIndex}
          handleCategoryClick={handleCategoryClick}
        />
        <div ref={categoryListRef} className={styles.categoryList}>
          {categories.map((category, index) => (
            <div
              key={index}
              id={`category-${index}`}
              className={styles.category}
            >
              <div className={styles.containger_categoryname}>
                <img
                  src={`/images/Category/category_${index + 1}.png`}
                  alt={category.name}
                  className={styles.categoryImage}
                />
                <div className={styles.categoryname}>{category.name}</div>
              </div>
              {category.subcategories.map((subcategory, subIndex) => (
                <div key={subIndex} className={styles.subcategory}>
                  {subcategory}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {showBottomNav && <BottomNav isVisible={showBottomNav} />}
    </div>
  );
};

export default Category;
