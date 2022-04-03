import React from "react";
import styles from "./CategoryCard.module.css";

export default function CategoryCard() {
  return (
    <div
      className={`${styles.category_card} all-blue flex-column-wrap position-relative box-shadow`}
    >
      <div className={`${styles.card_img} position-absolute`}>
        <img
          src="https://res.cloudinary.com/dkqrmlxlg/image/upload/v1648149786/House%20Of%20Glass/Products/Silver-Black-Full-Rim-Round-John-Jacobs-Supreme-Steel-JJ-E13492-C2-Eyeglasses_john-jacobs-jj-e13492-c2-eyeglasses_G_8232_10_02_2022-removebg-preview_vyg30e.png"
          alt="category of specs"
        />
      </div>
      <h5 className={`header-4 ${styles.card_title}`}>Round Specs</h5>
      <h5 className="body">Category Desc</h5>
    </div>
  );
}
