import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useAuth } from "Contexts/Auth/AuthContext";
import { useCart } from "Contexts/Cart/CartContext";
import { useWishlist } from "Contexts/Wishlist/WishlistContext";

export default function Header() {
  const { isLogged, userDetails, logoutHandler } = useAuth();
  const { firstName } = userDetails;
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  return (
    <header className={`${styles.glass_navbar} box-shadow`}>
      <Link to="/" className={styles.glass_logo}>
        <img
          src="https://res.cloudinary.com/dkqrmlxlg/image/upload/v1649248259/House%20Of%20Glass/House_Of_Cards_t35oos.png"
          className={styles.logo}
        />

        <h3 className={`${styles.glass_hero_text} header-5`}>House Of Glass</h3>
      </Link>
      <div className={`${styles.glass_search} input__container`}>
        <input
          type="search"
          className={`input__field ${styles.glass_search_input} br-24 position-relative`}
          placeholder="What today?"
          name="searchbar"
          id="search-bar"
          autoComplete="on"
        />
        <button
          className={`btn material-icons ${styles.glass_search_icon} m-1l`}
        >
          search
        </button>
      </div>
      <div className={styles.glass__header__links}>
        <ul className={`${styles.glass__header__ul} flex-mid-center`}>
          {
            <Link to="/products">
              <div className={styles.glass_links}>{`Hi ${
                isLogged ? firstName : `Guest`
              }`}</div>
            </Link>
          }
          {isLogged && wishlistCount > 0 && (
            <Link to="/wishlist">
              <span
                className={`position-relative material-icons ${styles.glass_links} md-24`}
              >
                favorite
                {wishlistCount >= 1 && (
                  <div
                    className={`${styles.header_badge} badge badge--icon flex-mid-center badge--round badge--small`}
                  >
                    {wishlistCount >= 1 ? wishlistCount : ""}
                  </div>
                )}
              </span>
            </Link>
          )}
          {isLogged && cartCount > 0 && (
            <Link to="/cart">
              <span
                className={`position-relative material-icons ${styles.glass_links} md-24`}
              >
                shopping_cart
                {cartCount >= 1 && (
                  <div
                    className={`badge badge--icon flex-mid-center badge--round badge--small ${styles.header_badge} `}
                  >
                    {cartCount >= 1 ? cartCount : ""}
                  </div>
                )}
              </span>
            </Link>
          )}
          {isLogged ? (
            <Link to="/" onClick={logoutHandler} className={styles.glass_links}>
              Logout
            </Link>
          ) : (
            <div>
              <Link to="/sign-in" className={styles.glass_links}>
                Login
              </Link>
              <Link to="/sign-up" className={styles.glass_links}>
                Sign Up
              </Link>
            </div>
          )}
        </ul>
      </div>
    </header>
  );
}
