import Ratings from "components/Ratings/Ratings";
import React from "react";
import "./ProductCard.css";
import { useCart } from "Contexts/Cart/CartContext";
import { useWishlist } from "Contexts/Wishlist/WishlistContext";
import { Link } from "react-router-dom";

export default function ProductCard({ Item }) {
  const { name, price, discount, fastDelivery, imageUrl, rating } = Item;
  const { cart, addToCart, incrementCart, decrementCart } = useCart();
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
          <h6 className="header-6">{name}</h6>
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
            {cart.find((Product) => Product._id === Item._id) ? (
              <Link to="/cart" className="btn btn--small btn--small--round">
                Go to cart
              </Link>
            ) : (
              <button
                onClick={() => addToCart(Item)}
                className="btn btn--small btn--small--round"
              >
                Add to cart
              </button>
            )}
            {wishlist.find((Product) => Product._id === Item._id) ? (
              <button
                onClick={() => addToWishlist(Item)}
                className="btn btn--small btn--outline--primary"
              >
                <span className="material-icons text--primary">bookmark</span>
                <p className="subtitle-1 btn--text text--primary">Saved</p>
              </button>
            ) : (
              <button
                onClick={() => addToWishlist(Item)}
                className="btn btn--small btn--outline--primary"
              >
                <span className="material-icons text--primary">bookmark</span>
                <p className="subtitle-1 btn--text text--primary">Save</p>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
