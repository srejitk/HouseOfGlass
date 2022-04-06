import WishListCard from "components/Cards/WishListCard/WishListCard";
import EmptyState from "components/EmptyState/EmptyState";
import { useWishlist } from "Contexts/Wishlist/WishlistContext";
import React from "react";
import styles from "./Wishlist.module.css";

export default function Wishlist() {
  const { wishlist, wishlistCount } = useWishlist();
  return (
    <main className={`${styles.wishlist_content}  flex--column--wrap`}>
      <h3 className={`header-3 ${styles.glass__subtitle}`}>My Wishlist</h3>
      {wishlistCount >= 1 ? (
        <div className={`${styles.glass__container} flex--row--wrap gap20 `}>
          {wishlist.map((item) => (
            <WishListCard key={item._id} Item={item} />
          ))}
        </div>
      ) : (
        <EmptyState
          stateTitle={"No Wishes here!"}
          stateDesc="Go do some window shopping"
          btnText="Shop now"
          icon={"bookmark"}
          endpoint="/products"
          color={"all-blue"}
        />
      )}
    </main>
  );
}
