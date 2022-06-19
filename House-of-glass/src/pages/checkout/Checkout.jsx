import CategoryCard from "components/Cards/CategoryCard/CategoryCard";
import ProductCard from "components/Cards/ProductCard/ProductCard";
import WishListCard from "components/Cards/WishListCard/WishListCard";
import { useCart } from "Contexts/Cart/CartContext";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

export const Checkout = () => {
  const [form, setForm] = useState({});
  const { cart, cartCount, cartDiscount, cartSum } = useCart();
  const [addressList, setAddressList] = useState([]);
  const navigate = useNavigate();

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => resolve(true);

      script.onerror = () => resolve(false);

      document.body.appendChild(script);
    });
  };
  const showRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      Toast("Razarpay Payment failed to load,check your connection", "error");
      return;
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      currency: "INR",
      name: "House Of Glass",
      description: "Thankyou for shopping",
      amount: cartSum * 100,
      image:
        "https://ik.imagekit.io/ecomdiagonalley/DiagonAlley/Logo/DiagonAlleyLogo_bLzTQ8w0b.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649227594828",

      handler: function (response) {
        if (response.razorpay_payment_id) {
          //   Toast("Payment successful, order placed", "success");
          navigate("/", { replace: true });
          //   cartDispatch({ type: "REMOVE_FROM_CART", payload: [] });
        }
      },

      prefill: {
        name: "Diagon Alley",
        email: "diagonalley@dev.com",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <div className="checkout-wrapper container">
      <div className={`checkout-conditions`}>
        <div className="title-section">
          <h5 className="subtitle-1">{`Checkout`}</h5>
        </div>
        <div className="accordian-parent ">
          <div className="tab-overview">
            <p className="subtitle-1">Order Overview</p>
            <span className="material-icons">checked</span>
          </div>
          <div className="item-overview-list"></div>
          {cart?.map((product) => (
            <WishListCard key={product?.id} Item={product} />
          ))}
        </div>
        <div className="accordian-parent">
          <div className="tab-overview">
            <p className="subtitle-1">Address Overview</p>
            <span className="material-icons">checked</span>
          </div>
        </div>
      </div>
      <div className="checkout-summary-card">
        <h5 className="header-5">Order Summary</h5>
        <div className="price-block">
          <p className="subtitle-1">{`Price ( ${cartCount} Item )`}</p>
          <p className="body-1">{`Rs. ${cartSum + cartDiscount}`}</p>
        </div>
        <div className="price-block">
          <p className="subtitle-1">Discount</p>
          <p className="body-1">{`Rs. ${cartDiscount}`}</p>
        </div>
        <div className="price-block">
          <p className="subtitle-1">Total</p>
          <p className="body-1">{`Rs. ${cartSum - cartDiscount}`}</p>
        </div>
        <div className="price-block">
          <p className="subtitle-1">You've Saved</p>
          <p className="body-1">{`Rs. ${(cartSum + 1) * cartDiscount}`}</p>
        </div>
        <div>
          <button
            onClick={() => showRazorpay()}
            className="btn btn--primary full-width m1t"
          >
            Pay
          </button>
        </div>
      </div>
      {/* <div className="checkout-summary-card">
        <div className="price-block">
          <p className="subtitle-1">Items</p>
          <p className="body-1">fdsgs</p>
        </div>
        <div className="price-block">
          <p className="subtitle-1">Items</p>
          <p className="body-1">fdsgs</p>
        </div>
        <div className="price-block">
          <p className="subtitle-1">Items</p>
          <p className="body-1">fdsgs</p>
        </div>
        <div>
          <button className="btn btn--primary full-width m1t">Pay</button>
        </div>
      </div> */}
    </div>
  );
};
