import WishListCard from "components/Cards/WishListCard/WishListCard";
import { useCart } from "Contexts/Cart/CartContext";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "./Checkout.css";
import { v4 } from "uuid";
import { Modal } from "components/Modal/Modal";
import { AddressModal } from "components/AddressModal/AddressModal";
import { AddressCard } from "components/Cards/AddressCard/AddressCard";
import { useAuth } from "Contexts/Auth/AuthContext";

export const Checkout = () => {
  const { cart, cartCount, cartDiscount, cartSum } = useCart();
  const {
    userDetails,
    setUserDetails,
    addressList,
    setAddressList,
    initialAddress,
    form,
    setForm,
  } = useAuth();
  const [expandAddress, setExpandAddress] = useState(false);
  const [expandItems, setExpandItems] = useState(false);
  const navigate = useNavigate();
  const defaultForm = {
    id: "",
    name: "Dr. Stephen Strange",
    street: "177A Bleecker Street, New York",
    pin: "10012-1406",
    number: "6669996066",
  };
  const [showModal, setShowModal] = useState(false);

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
      toast.error(
        "Razarpay Payment failed to load,check your connection",
        "error"
      );
      return;
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      currency: "INR",
      name: "House Of Glass",
      description: "Thankyou for shopping",
      amount: +cartSum * 100,
      image:
        "https://ik.imagekit.io/ecomdiagonalley/DiagonAlley/Logo/DiagonAlleyLogo_bLzTQ8w0b.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649227594828",

      handler: function (response) {
        if (response.razorpay_payment_id) {
          toast.success("Payment successful, order placed", "success");
          navigate("/", { replace: true });
          // cartDispatch({ type: "CLEAR" });
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
        <div
          onClick={() => setExpandItems((prev) => !prev)}
          className={`accordian-parent ${
            cart.length >= 1 && expandItems ? "showAddressCards" : ""
          }  ${expandItems ? "expandCard" : ""} `}
        >
          <div className="tab-overview">
            <p className="subtitle-1">Order Overview</p>
            {cart?.length >= 1 ? (
              <span
                className="material-icons "
                style={{ color: "var(--component-blue-05)" }}
              >
                check_circle
              </span>
            ) : (
              <span className="material-icons">radio_button_unchecked</span>
            )}
          </div>
          {expandItems && (
            <div className="flex flex-row items-center justify-start flex-row checkout-address-list">
              <div className="address_card_wrapper">
                {cart?.map((item) => {
                  return <WishListCard key={item?.id} Item={item} />;
                })}
              </div>
            </div>
          )}
        </div>
        <div
          onClick={() => setExpandAddress((prev) => !prev)}
          className={`accordian-parent flex flex-col ${
            addressList.length >= 1 && expandAddress ? "showAddressCards" : ""
          }  ${expandAddress ? "expandCard" : ""}`}
        >
          <div className="tab-overview">
            <p className="subtitle-1">Address Overview</p>
            {userDetails?.address?.id ? (
              <span
                className="material-icons "
                style={{ color: "var(--component-blue-05)" }}
              >
                check_circle
              </span>
            ) : (
              <span className="material-icons">radio_button_unchecked</span>
            )}
          </div>
          {expandAddress && (
            <div className="flex flex-row items-center justify-start flex-row checkout-address-list">
              <div className="address_card_wrapper">
                {addressList?.map((address) => {
                  return (
                    <AddressCard
                      key={address?.id}
                      address={address}
                      setShowModal={setShowModal}
                    />
                  );
                })}
              </div>
            </div>
          )}
          {expandAddress ? (
            <>
              <p className="subtitle-2 flex w-full">
                Please add a address to continue
              </p>

              <div className="flex w-full items-center justify-start gap20 mt-auto">
                {" "}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowModal(true);
                  }}
                  className="btn btn--primary"
                >
                  Add Address
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setAddressList((prev) => [
                      ...prev,
                      { ...defaultForm, id: v4() },
                    ]);
                  }}
                  className="btn btn--outline--primary"
                >
                  Add Demo Address
                </button>
              </div>
            </>
          ) : null}
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
      {showModal && (
        <Modal openModal={showModal} setOpenModal={setShowModal}>
          <AddressModal showModal={showModal} setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
  );
};
