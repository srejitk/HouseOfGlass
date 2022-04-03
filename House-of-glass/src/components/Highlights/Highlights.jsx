import CategoryCard from "components/Cards/CategoryCard/CategoryCard";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Highlights.module.css";

export default function Highlights() {
  return (
    <section className={`${styles.glass_highlights} flex-column-wrap gap20`}>
      <div className={`${styles.card_container} flex-row-wrap`}>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
      <h3 className={`${styles.category_title} header-3`}>Find your style</h3>
      <p className={`${styles.category_desc} body-1`}>To the shape of you</p>
    </section>
  );
}
