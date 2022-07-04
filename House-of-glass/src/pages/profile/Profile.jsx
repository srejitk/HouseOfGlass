import CartCard from "components/Cards/CartCard/CartCard";
import ProductCard from "components/Cards/ProductCard/ProductCard";
import EmptyState from "components/EmptyState/EmptyState";
import { Sidebar } from "components/Sidebar/Sidebar";
import { useAuth } from "Contexts/Auth/AuthContext";
import { useCart } from "Contexts/Cart/CartContext";
import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

export const Profile = () => {
  const { userDetails } = useAuth();
  const { cart, cartCount } = useCart();

  return (
    <div className="container order-page-wrapper">
      <Sidebar />
      <div className={`profile-content `}>
        <div className="title-section">
          <h1 className="header-5">{`My Account > Your Orders`}</h1>
        </div>
        {cartCount === 0 ? (
          <div className=" emptyState">
            <EmptyState
              stateTitle={"Cart is Empty"}
              stateDesc="Self care is important too you know."
              btnText="Shop now"
              icon={"shopping_cart"}
              endpoint="/products"
              color={"all-yellow"}
            />
          </div>
        ) : (
          <div className="order-wrapper ">
            {cart?.map((item) => (
              <CartCard Item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
