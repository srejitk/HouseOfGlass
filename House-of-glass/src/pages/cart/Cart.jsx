import ProductList from 'components/Product List/ProductList'
import React from 'react'
import "./Cart.css"
import { useAuth } from 'Utils/AuthContext'
import WishListCard from 'components/Cards/WishListCard/WishListCard';

export default function Cart() {
  const {userDetails}=useAuth();
  const {cartList} = userDetails;
  return (
    <main className="content flex--row--nowrap position-relative">
  <div className="glass__container  flex--row--wrap gap20 ">

  {cartList.map((Product) => (<WishListCard key={Product._id} Item={Product}/>))}
   
    
  </div>
  <div className="linebreaker" />
  <div className="glass__checkout top box-shadow flex--column--wrap gap20">
    <h5 className="header-5">Price Breakdown</h5>
    <div className="items--sum">
      <p className="subtitle-1">Price ( 7 Items )</p>
      <p className="body-1">Rs. 5,299</p>
    </div>
    <div className="items--discount">
      <p className="subtitle-1">Discount</p>
      <p className="body-1">-Rs. 299</p>
    </div>
    <div className="items--delivery">
      <p className="subtitle-1">Delivery Charges</p>
      <p className="body-1">Rs. 99</p>
    </div>
    <div className="items--total">
      <p className="subtitle-1">Total</p>
      <p className="body-1">Rs. 5,099</p>
    </div>
    <div className="items--savings">
      <p className="subtitle-1">You've Saved</p>
      <p className="body-1">Rs. 299</p>
    </div>
    <button className="btn btn--primary">Place Order </button>
  </div>
</main>

  )
}
