import React from 'react';
import { Routes,Route } from 'react-router-dom';
import { MockApi } from '../pages/api-response';
import Cart from '../pages/cart/Cart';
import Landing from '../pages/landing/Landing';
import Products from '../pages/products/Listing/Products';
import NotFound from '../pages/utils/NotFound/NotFound';
import Wishlist from '../pages/wishlist/Wishlist';

export default function Router() {
  return (
    <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/api-response" element={<MockApi />} />
        <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}
