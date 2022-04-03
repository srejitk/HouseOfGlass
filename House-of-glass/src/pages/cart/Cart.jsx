import React from "react";
import CartCard from "components/Cards/CartCard/CartCard";
import { useCart } from "Contexts/Cart/CartContext";
import EmptyState from "components/EmptyState/EmptyState";
import styles from "./Cart.module.css";

export default function Cart() {
  const { cart, cartCount, cartSum, cartDiscount } = useCart();
  return (
    <main className={`${styles.cart__content} position-relative`}>
      <h3 className={`header-3 ${styles.cart__subtitle}`}>My Cart</h3>
      {cartCount >= 1 && (
        <div className={`${styles.cart_container}`}>
          <div className={`${styles.cart__item__container} gap20 `}>
            {cart.map((Product) => (
              <CartCard key={Product._id} Item={Product} />
            ))}
          </div>
          <div
            className={`${styles.glass__checkout} box-shadow flex--column--wrap gap20`}
          >
            <h5 className="header-5">Price Breakdown</h5>
            <div className="items--sum">
              <p className="subtitle-1">{`Price ( ${cartCount} Item )`}</p>
              <p className="body-1">{`Rs. ${cartSum}`}</p>
            </div>
            <div className="items--discount">
              <p className="subtitle-1">Discount</p>
              <p className="body-1">{`Rs. ${cartDiscount}`}</p>
            </div>
            <div className="items--total">
              <p className="subtitle-1">Total</p>
              <p className="body-1">Rs. 5,099</p>
            </div>
            <div className="items--savings">
              <p className="subtitle-1">You've Saved</p>
              <p className="body-1">Rs. 299</p>
            </div>
            <button className="btn btn--primary">Place Order </button>
          </div>
        </div>
      )}
      {!cartCount >= 1 && (
        <EmptyState
          stateTitle={"Cart is Empty"}
          stateDesc="Khaali hai bhai"
          btnText="Shop now"
          icon={"shopping_cart"}
          endpoint="/products"
          color={"all-yellow"}
        />
      )}
    </main>
  );
}
