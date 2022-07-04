import React from "react";
import { Routes, Route } from "react-router-dom";
import { MockApi } from "../pages/api-response";
import {
  Cart,
  Landing,
  Products,
  Wishlist,
  NotFound,
  Profile,
  Address,
  Checkout,
} from "pages/index";
import Login from "pages/auth/Login";
import Signup from "pages/auth/Signup";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products/" element={<Products />} />
      <Route path="/products/:category" element={<Products />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/api-response" element={<MockApi />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/address" element={<Address />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}
