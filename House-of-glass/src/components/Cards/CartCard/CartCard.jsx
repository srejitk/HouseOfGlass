import React from "react";
import Ratings from "../../Ratings/Ratings";
import { useCart } from "Contexts/Cart/CartContext";

export default function CartCard({ Item }) {
  const { name, price, discount, fastDelivery, imageUrl, rating } = Item;
  const { deleteFromCart, incrementCart, decrementCart } = useCart();

  return (
    <div className="card card--horizontal box-shadow">
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
            {Item.count >= 1 ? (
              <>
                <button
                  className="btn btn--small flex-mid-center btn--primary--outline"
                  onClick={() => decrementCart(Item)}
                >
                  <p className="subtitle-1 btn--text text">-</p>
                </button>
                <button className="btn btn--small flex-mid-center btn--primary">
                  <p className="subtitle-1 btn--text text">
                    {Item.count >= 0 && Item.count}
                  </p>
                </button>
                <button
                  className="btn btn--small flex-mid-center btn--primary--outline"
                  onClick={() => incrementCart(Item)}
                >
                  <p className="subtitle-1 btn--text text">+</p>
                </button>
              </>
            ) : (
              <button
                onClick={() => deleteFromCart(Item)}
                className="btn btn--small btn--outline--like"
              >
                <span className="material-icons icon--">trash</span>
                <p className="subtitle-1 btn--txt">Remove</p>
              </button>
            )}

            <button className="btn btn--small btn--outline--like">
              <span className="material-icons icon--">bookmark</span>
              <p className="subtitle-1 btn--txt">Save</p>
            </button>
          </div>
        </div>
      </div>
      <div className="card__cover card__img--large gap20 image--responsive">
        <img src={imageUrl} />
        <Ratings />
      </div>
    </div>
  );
}
