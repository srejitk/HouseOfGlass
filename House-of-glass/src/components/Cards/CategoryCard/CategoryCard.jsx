import React from "react";
import styles from "./CategoryCard.module.css";

export default function CategoryCard({ category }) {
  const { img, categoryName, description } = category;
  return (
    <div
      className={`${styles.category_card} all-blue flex-column-wrap position-relative box-shadow`}
    >
      <div className={`${styles.card_img} position-absolute`}>
        <img src={img} alt="category of specs" />
      </div>
      <h5 className={`header-4 ${styles.card_title}`}>{categoryName}</h5>
      <h5 className="body">{description}</h5>
    </div>
  );
}
