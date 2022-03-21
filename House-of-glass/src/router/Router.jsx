import React from 'react';
import { Routes,Route } from 'react-router-dom';
import { MockApi } from '../pages/api-response';
import { Cart, Landing, Products, Wishlist, NotFound} from "pages/index"

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
