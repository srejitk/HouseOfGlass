import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useAuth } from "Contexts/Auth/AuthContext";

export default function Header() {
  const { userDetails } = useAuth();
  const { cartList, wishList } = userDetails;
  return (
    <header className="glass-navbar">
      <Link to="/" className="glass-logo">
        <span id="hamburger_open" className="material-icons icon--sidebar">
          menu
        </span>
        <span id="hamburger_close" className="material-icons icon--sidebar">
          menu_open
        </span>
        <h3 className="glass-hero-text header-5">House Of Glass</h3>
      </Link>
      <div className="glass-search input__container">
        <input
          type="search"
          className="input__field glass-search-input br-24 position-relative"
          placeholder="What today?"
          name="searchbar"
          id="search-bar"
        />
        <button className="btn material-icons glass-search-icon m-1l">
          search
        </button>
      </div>
      <div className="glass__header--links">
        <ul className="glass__header--ul flex-mid-center">
          <Link to="/cart" className="glass-links hoverOn--round">
            Login
          </Link>
          <Link to="/cart" className="glass-links hoverOn--round">
            Sign Up
          </Link>
          <Link
            to="/cart"
            className="glass-links hoverOn--round"
          >{`Cart ${cartList?.length}`}</Link>
          <Link
            to="/wishlist"
            className="glass-links hoverOn--round"
          >{`Wishlist ${wishList?.length}`}</Link>
        </ul>
      </div>
    </header>
  );
}
