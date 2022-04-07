import React from "react";
import { Link } from "react-router-dom";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={`${styles.hero_container} grid col2x2`}>
      <div
        className={`${styles.hero_text_container} flex-top-left flex-column-wrap`}
      >
        <h3 className={`${styles.hero_text}`}>Looking for</h3>
        <span className={`${styles.hero_text} all-blue ${styles.text_blue}`}>
          Specs?
        </span>
        <span className={`${styles.hero_text} ${styles.text_yellow}`}>
          O--O
        </span>

        <h3 className={`body-1 ${styles.hero_desc}`}>We'll see to it.</h3>
        <h5 className={`body-1 ${styles.hero_desc}`}>
          Clear. Clean. Aesthetic.
        </h5>
        <Link to="/products">
          <button className={`btn btn--primary ${styles.hero_btn}`}>
            Shop Now
          </button>
        </Link>
      </div>
      <div
        className={`${styles.hero_img_container} position-relative flex-mid-center`}
      >
        <div className={styles.hero_img}>
          <img src="https://res.cloudinary.com/dkqrmlxlg/image/upload/v1648978287/House%20Of%20Glass/image-removebg-preview_cooq41.png" />
        </div>
        <div className={styles.hero_bg}></div>
        <img
          src="https://res.cloudinary.com/dkqrmlxlg/image/upload/v1648978032/House%20Of%20Glass/Rock_1_ip08d2.svg"
          alt=""
          className={`position-absolute ${styles.floating_elem1}`}
          id=""
        />
        <img
          src="https://res.cloudinary.com/dkqrmlxlg/image/upload/v1648973098/House%20Of%20Glass/Cheese_Half_2_xvqmd1.svg"
          alt=""
          className={`position-absolute ${styles.floating_elem2}`}
          id=""
        />
      </div>
    </div>
  );
}
