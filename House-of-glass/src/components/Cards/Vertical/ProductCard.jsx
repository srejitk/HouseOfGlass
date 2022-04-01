import Ratings from 'components/Ratings/Ratings'
import React from 'react'
import "./ProductCard.css"
import { useAuth } from 'Utils/AuthContext';



export default function ProductCard({Item}) {


  const {name,price,discount,fastDelivery,imageUrl,rating} = Item;
  const {userDetails,setUserDetails}= useAuth();
  const {cartList, wishList} = userDetails;


  //BUTTON CLICK GIVES API RESPONSE, ATYPE :"aDD TO CART", PAYLOAD WILL BE THE NEW CART

  const addToCart = (Item) =>{

    cartList.find((cartItem)=>cartItem._id===Item._id?true:false)?setUserDetails({...userDetails, cartList:cartList.map((cartItem)=>
      (cartItem._id===Item._id)?{...cartItem,count: cartItem.count+1}:cartItem)}):
    setUserDetails({...userDetails, cartList:[...cartList,{...Item, count:1}]});

  }

  const addToWishlist = (Item)=>{
    wishList.find((product)=>product._id===Item._id)?console.log("hai yaar already"):setUserDetails({...userDetails,wishList:[...wishList, Item]})
  }

  return (
    <div className=" card card--vertical box-shadow" >
    <div className="card__cover cover--vertical image--responsive">
      <img src={imageUrl} />
     <span onClick={()=>addToWishlist(Item)} className={`material-icons card__icon ${wishList.find((product)=>product._id===Item._id)?"liked":""}`}>favorite</span>
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
          <button onClick={()=>addToCart(Item)}className="btn btn--small btn--small--round">Add to cart</button>
          <button onClick={()=>addToWishlist(Item)} className="btn btn--small btn--outline--primary">
            <span className="material-icons text--primary">bookmark</span>
            <p className="subtitle-1 btn--text text--primary">Save</p>

          </button>
        </div>
      </div>
    </div>
  </div>
  )
}
