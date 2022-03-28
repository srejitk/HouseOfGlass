import Ratings from 'components/Ratings/Ratings'
import React from 'react'
import "./VerticalCard.css"


export default function VerticalCard({Item}) {

  const {name,price,discount,fastDelivery,imageUrl,rating} = Item;
  return (
    <div className=" card card--vertical box-shadow" >
    <div className="card__cover cover--vertical image--responsive">
      <img src={imageUrl} />
      <span className="material-icons card__icon">favorite</span>
    </div>
    <div className="card__contents--vertical">
      <div className="card__content card__text--vertical">
        <h6 className="header-6">{name}</h6>
        <div className="container--row">
          <p className="subtitle-1 item--sale text--primary">{price}</p><p className="body-2 item--price">Rs.
            {price*(1+discount)}</p>
          <p className="subtitle-1 item--info text--grey">{fastDelivery}</p>
          <p />
        </div>
        <Ratings/>
        <div className="container--row m-1t">
          <div className="btn btn--small btn--small--round">Buy Now</div>
          <div className="btn btn--small btn--outline--primary">
            <span className="material-icons text--primary">shopping_cart</span>
            <p className="subtitle-1 btn--text text--primary">To cart</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
