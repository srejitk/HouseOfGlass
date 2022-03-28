import React from 'react'
import Ratings from '../../Ratings/Ratings'

export default function HorizontalCard(props) {
  const {CardTitle,ItemPrice,ItemDiscount,DeliveryType,ItemImage,ItemRating,ItemID} = props;
  return (
      <div className="card card--horizontal box-shadow">
          <div className="card__contents">
            <div className="card__content--column card__text">
              <h5 className="header-5">{CardTitle}</h5>
              <div className="container--row">
                <p className="subtitle-1 item--sale text--primary">{ItemPrice}</p>
                <p className="body-2 item--items">{ItemDiscount}</p>
                <p className="subtitle-1 item--info text--grey">{DeliveryType}</p>
                <p />e.   
              </div>
            </div>
            <div className="card__content--row card__footer">
              <div className="container--row">
                <div className="btn btn--small flex-mid-center btn--primary--outline">
                  <p className="subtitle-1 btn--text text">-</p>
                </div>
                <div className="btn btn--small flex-mid-center btn--primary">
                  <p className="subtitle-1 btn--text text">1</p>
                </div>
                <div className="btn btn--small flex-mid-center btn--primary--outline">
                  <p className="subtitle-1 btn--text text">+</p>
                </div>
                <div className="btn btn--small btn--outline--like">
                  <span className="material-icons icon--">bookmark</span>
                  <p className="subtitle-1 btn--txt">Save</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card__cover card__img--large gap20 image--responsive">
            <img src= {ItemImage}/>
            <Ratings/>
          </div>
        </div>
  )
}


    {/* Horizontal Card */}
    {/* <HorizontalCard CardTitle={"The most expensive stuff you can imagine"} ItemPrice={"Rs. 999"}ItemDiscount={"Rs. 2443"}
    DeliveryType={"Free Shipping"} ItemImage={"https://picsum.photos/id/684/600/400"} ItemRating={4.2}/> */}
    {/* {Cart()} */}
    {/* Horizontal Card */}