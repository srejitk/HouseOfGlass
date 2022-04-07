import React from "react";
import Ratings from "../../Ratings/Ratings";
import { useWishlist } from "Contexts/Wishlist/WishlistContext";
import { useCart } from "Contexts/Cart/CartContext";

export default function WishListCard({ Item }) {
  const { name, price, discount, fastDelivery, imageUrl, rating } = Item;
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const moveToCart = (Item) => {
    addToCart(Item);
    removeFromWishlist(Item);
  };

  return (
    <div className="card outline wishlist-card card--horizontal box-shadow">
      <div className="card__contents">
        <div className="card__content--column card__text">
          <h5 className="header-5">{name}</h5>
          <div className="container--row">
            <p className="subtitle-1 item--sale text--primary">{price}</p>
            <p className="body-2 item--items">{discount}</p>
            <p className="subtitle-1 item--info text--grey">
              {fastDelivery ? "Fast Delivery" : "Regular Delivery"}
            </p>
            <p />
          </div>
        </div>
        <div className="card__content--row card__footer">
          <div className="container--row">
            <button
              onClick={() => moveToCart(Item)}
              className="btn btn--small btn--primary"
            >
              <span className="material-icons text">shopping_cart</span>
              <p className="subtitle-1 btn--text text">To cart</p>
            </button>
            <button
              onClick={() => removeFromWishlist(Item)}
              className="btn btn--small btn--outline--like"
            >
              <span className="material-icons icon">clear</span>
              <p className="subtitle-1 btn--txt">Clear</p>
            </button>
          </div>
        </div>
      </div>
      <div className="card__cover card__img--large gap20 wishlist-img image--responsive">
        <img src={imageUrl} />
        <Ratings rating={rating} />
      </div>
    </div>
  );
}
