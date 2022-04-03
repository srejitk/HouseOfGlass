import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useAuth } from "Contexts/Auth/AuthContext";
import { useCart } from "Contexts/Cart/CartContext";
import { useWishlist } from "Contexts/Wishlist/WishlistContext";

export default function Header() {
  const { isLogged, userDetails, logoutHandler } = useAuth();
  const { firstName } = userDetails;
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  console.log(isLogged);
  return (
    <header className="glass-navbar box-shadow">
      <Link to="/" className="glass-logo">
        <img
          id="hamburger_close"
          src="D:\Projects\HouseOfGlass\House-of-glass\public\assets\Rock2.svg"
          className=" icon--sidebar"
        />

        <h3 className="glass-hero-text header-5">House Of Glass</h3>
      </Link>
      <div className="glass-search input__container">
        <input
          type="search"
          className="input__field glass-search-input br-24 position-relative"
          placeholder="What today?"
          name="searchbar"
          id="search-bar"
          autoComplete="on"
        />
        <button className="btn material-icons glass-search-icon m-1l">
          search
        </button>
      </div>
      <div className="glass__header--links">
        <ul className="glass__header--ul flex-mid-center">
          {!isLogged && (
            <Link to="/products">
              <div className="glass-links">{`Hi ${firstName}`}</div>
            </Link>
          )}
          <Link to="/wishlist">
            <span class="position-relative material-icons glass-links md-24">
              favorite
              {wishlistCount >= 1 && (
                <div class="badge badge--icon flex-mid-center badge--round badge--small">
                  {wishlistCount >= 1 ? wishlistCount : ""}
                </div>
              )}
            </span>
          </Link>
          <Link to="/cart">
            <span class="position-relative material-icons glass-links md-24">
              shopping_cart
              {cartCount >= 1 && (
                <div class="badge badge--icon flex-mid-center badge--round badge--small">
                  {cartCount >= 1 ? cartCount : ""}
                </div>
              )}
            </span>
          </Link>

          {!isLogged && (
            <Link to="/" onClick={logoutHandler} className="glass-links">
              Logout
            </Link>
          )}
          {isLogged && (
            <div>
              <Link to="/sign-in" className="glass-links ">
                Login
              </Link>
              <Link to="/sign-up" className="glass-links">
                Sign Up
              </Link>
            </div>
          )}
        </ul>
      </div>
    </header>
  );
}
