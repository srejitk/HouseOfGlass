import CategoryCard from "components/Cards/CategoryCard/CategoryCard";
import { useCategory } from "Contexts/Category/CategoryContext";
import React from "react";
import styles from "./Highlights.module.css";

export default function Highlights() {
  const { categoryList, categoryHandler } = useCategory();

  return (
    <section className={`${styles.glass_highlights} flex-column-wrap gap20`}>
      <div className={`${styles.card_container} flex-row-wrap`}>
        {categoryList?.slice(-3).map((category) => {
          return (
            <div onClick={() => categoryHandler(category)}>
              <CategoryCard category={category} />
            </div>
          );
        })}
      </div>
      <h3 className={`${styles.category_title} header-3`}>Find your style</h3>
      <p className={`${styles.category_desc} body-1`}>To the shape of you</p>
    </section>
  );
}
