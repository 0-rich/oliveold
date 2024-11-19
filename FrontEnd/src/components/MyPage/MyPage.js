import React, { useState, useEffect, useRef } from "react";
import Header_MyPage from "./Header_MyPage";
import styles from "./MyPage.module.css";
import BottomNav from "../Common/BottomNav";
import Footer from "../Common/Footer";

const MyPage = () => {
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

  return (
    <div>
      {showHeader && <Header_MyPage isVisible={showHeader} />}
      <div className={styles.body}>
        <div className={styles.nametag}>
          <div className={styles.container_user}>
            <div className={styles.userid}>junghun****</div>
            <div className={styles.usergrade}>Baby Olive</div>
          </div>
          <div className={styles.container_profile}>
            <img
              className={styles.flaticon}
              src="/images/flaticon_myprofile.png"
              alt=""
            />
            <div>프로필</div>
          </div>
        </div>
        <div className={styles.container_flaticon}>
          <div>
            <img
              className={styles.flaticon}
              src="/images/flaticon_point.png"
              alt=""
            />
            <p>CJ ONE</p>
            <p>0P</p>
          </div>
          <div>
            <img
              className={styles.flaticon}
              src="/images/flaticon_coupon.png"
              alt=""
            />
            <p>쿠폰</p>
            <p>1</p>
          </div>
          <div>
            <img
              className={styles.flaticon}
              src="/images/flaticon_giftcard.png"
              alt=""
            />
            <p>기프트</p>
            <p>카드</p>
          </div>
          <div>
            <img
              className={styles.flaticon}
              src="/images/flaticon_barcode.png"
              alt=""
            />
            <p>멤버십</p>
            <p>바코드</p>
          </div>
        </div>
        <div className={styles.container_review}>
          <span>리뷰쓰기</span>
          <span className={styles.reviewcnt}>0개</span>
        </div>
        <div className={styles.container_order}>
          <div className={styles.order_header}>
            <span className={styles.order_header1}>주문/배송 조회</span>
            <span className={styles.order_header2}>
              전체보기
              <img
                className={styles.flaticon2}
                src="/images/flaticon_larger.png"
                alt=""
              />
            </span>
          </div>
          <div className={styles.orders}>
            <div className={styles.order}>
              <div className={styles.ordercnt}>0</div>
              <div className={styles.orderstatus}>주문접수</div>
            </div>
            <img
              className={styles.flaticon2}
              src="/images/flaticon_larger.png"
              alt=""
            />
            <div className={styles.order}>
              <div className={styles.ordercnt}>0</div>
              <div className={styles.orderstatus}>결제완료</div>
            </div>
            <img
              className={styles.flaticon2}
              src="/images/flaticon_larger.png"
              alt=""
            />
            <div className={styles.order}>
              <div className={styles.ordercnt}>0</div>
              <div className={styles.orderstatus}>배송준비중</div>
            </div>
            <img
              className={styles.flaticon2}
              src="/images/flaticon_larger.png"
              alt=""
            />
            <div className={styles.order}>
              <div className={styles.ordercnt}>0</div>
              <div className={styles.orderstatus}>배송중</div>
            </div>
            <img
              className={styles.flaticon2}
              src="/images/flaticon_larger.png"
              alt=""
            />
            <div className={styles.order}>
              <div className={styles.ordercnt}>0</div>
              <div className={styles.orderstatus}>배송완료</div>
            </div>
          </div>
        </div>
        <div className={styles.contents}>
          <div className={styles.content_header}>쇼핑활동</div>
          <div className={styles.content}>
            <img
              className={styles.flaticon3}
              src="/images/flaticon_F5.png"
              alt=""
            />
            <span className={styles.content_name}>취소/반품/교환 내역</span>
          </div>
          <div className={styles.content}>
            <img
              className={styles.flaticon3}
              src="/images/flaticon_gift.png"
              alt=""
            />
            <span className={styles.content_name}>선물함</span>
          </div>
          <div className={styles.content}>
            <img
              className={styles.flaticon3}
              src="/images/flaticon_truck.png"
              alt=""
            />
            <span className={styles.content_name}>배송지 관리</span>
          </div>
          <div className={styles.content}>
            <img
              className={styles.flaticon3}
              src="/images/flaticon_alram.png"
              alt=""
            />
            <span className={styles.content_name}>재입고 알림</span>
          </div>
          <div className={styles.content}>
            <img
              className={styles.flaticon3}
              src="/images/flaticon_shop.png"
              alt=""
            />
            <span className={styles.content_name}>올영매장</span>
          </div>
          <div className={styles.content}>
            <img
              className={styles.flaticon3}
              src="/images/flaticon_ticket.png"
              alt=""
            />
            <span className={styles.content_name}>티켓 예약 내역</span>
          </div>
        </div>
        <div className={styles.contents}>
          <div className={styles.content_header}>마이 월렛</div>
          <div className={styles.content}>
            <img
              className={styles.flaticon3}
              src="/images/flaticon_receipt.png"
              alt=""
            />
            <span className={styles.content_name}>스마트 영수증</span>
          </div>
          <div className={styles.content}>
            <img
              className={styles.flaticon3}
              src="/images/flaticon_refund.png"
              alt=""
            />
            <span className={styles.content_name}>환불계좌 관리</span>
          </div>
          <div className={styles.content}>
            <img
              className={styles.flaticon3}
              src="/images/flaticon_giftcard.png"
              alt=""
            />
            <span className={styles.content_name}>빠른 결제</span>
          </div>
          <div className={styles.content}>
            <img
              className={styles.flaticon3}
              src="/images/flaticon_balance.png"
              alt=""
            />
            <span className={styles.content_name}>예치금</span>
          </div>
        </div>
        <div className={styles.contents}>
          <div className={styles.content_header}>이벤트ꞏ리서치</div>
          <div className={styles.content}>
            <img
              className={styles.flaticon3}
              src="/images/flaticon_event.png"
              alt=""
            />
            <span className={styles.content_name}>이벤트 참여 현황</span>
          </div>
          <div className={styles.content}>
            <img
              className={styles.flaticon3}
              src="/images/flaticon_paper.png"
              alt=""
            />
            <span className={styles.content_name}>올리브 보이스</span>
          </div>
        </div>
        <div className={styles.contents}>
          <div className={styles.content_header}>문의</div>
          <div className={styles.content}>
            <img
              className={styles.flaticon3}
              src="/images/flaticon_notice.png"
              alt=""
            />
            <span className={styles.content_name}>고객센터/공지사항</span>
          </div>
          <div className={styles.content}>
            <img
              className={styles.flaticon3}
              src="/images/flaticon_chat.png"
              alt=""
            />
            <span className={styles.content_name}>챗봇 상담</span>
          </div>
          <div className={styles.content}>
            <img
              className={styles.flaticon3}
              src="/images/flaticon_qna.png"
              alt=""
            />
            <span className={styles.content_name}>상품 문의</span>
          </div>
          <div className={styles.content}>
            <img
              className={styles.flaticon3}
              src="/images/flaticon_11chat.png"
              alt=""
            />
            <span className={styles.content_name}>1:1 문의</span>
          </div>
        </div>
        <div className={styles.contents}>
          <div className={styles.content}>
            <img
              className={styles.flaticon3}
              src="/images/flaticon_logout.png"
              alt=""
            />
            <span className={styles.content_name}>로그아웃</span>
          </div>
        </div>
      </div>
      {showBottomNav && <BottomNav isVisible={showBottomNav} />}
      <Footer />
    </div>
  );
};

export default MyPage;
