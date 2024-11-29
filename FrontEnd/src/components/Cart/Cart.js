import React from "react";
import styles from "./Cart.module.css";
import Cart_header from "./Cart_header";
import Footer from "../Common/Footer";
import { customAxios } from "../api/customAxios";

const Cart = () => {
  customAxios.get(`/accept`).then((res) => {
    console.log(res);
  });

  return (
    <div className={styles.body}>
      <Cart_header />
      <div className={styles.body}>
        <div className={styles.Cart_container}>
          <div></div>
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
