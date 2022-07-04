import React from "react";
import Ratings from "../../Ratings/Ratings";
import { useCart } from "Contexts/Cart/CartContext";
import "./CartCard.css";
import { useWishlist } from "Contexts/Wishlist/WishlistContext";

export default function CartCard({ Item }) {
  const { price, discount, fastDelivery, imageUrl, rating } = Item;
  const { cart, cartCount, deleteFromCart, incrementCart, decrementCart } =
    useCart();
  const { wishlist, addToWishlist } = useWishlist();

  return (
    <div className=" card card--vertical box-shadow">
      <div className="card__cover cover--vertical image--responsive">
        <img src={imageUrl} />
        <span
          onClick={() => addToWishlist(Item)}
          className={`material-icons card__icon ${
            wishlist.find((product) => product._id === Item._id) ? "liked" : ""
          }`}
        >
          favorite
        </span>
      </div>
      <div className="card__contents--vertical">
        <div className="card__content card__text--vertical">
          <h6 className="header-6">{Item?.name}</h6>
          <div className="container--row">
            <p className="subtitle-1 item--sale text--primary">{price}</p>
            <p className="body-2 item--price">
              Rs.
              {price * (1 + discount)}
            </p>
            <p className="subtitle-1 item--info text--grey">{fastDelivery}</p>
            <p />
          </div>
          <Ratings />
          <div className="container--row m-1t">
            <button
              className="btn btn--small flex-mid-center btn--primary--outline"
              onClick={() => decrementCart(Item)}
            >
              <p className="subtitle-1 btn--text text">-</p>
            </button>
            <button className="btn btn--small flex-mid-center btn--primary">
              <p className="subtitle-1 btn--text text">{Item.qty}</p>
            </button>
            <button
              className="btn btn--small flex-mid-center btn--primary--outline"
              onClick={() => incrementCart(Item)}
            >
              +
            </button>
            <button
              onClick={() => deleteFromCart(Item)}
              className="btn btn--small btn--critical"
            >
              <span className="material-icons text--warning">clear</span>
              <p className="subtitle-1 btn--text text--warning">Remove</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
