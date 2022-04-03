import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

export default function Banner() {
  return (
    <div className="hero-container grid col2x2">
      <div className="hero-text-container flex-top-left flex-column-wrap">
        <h3 className="header-1 hero-text">Looking for</h3>
        <span className="header-1 hero-text all-blue">Specs?</span>
        <span className="header-1 hero-text all-yellow">O--O</span>

        <h3 className="body-1 hero-desc">We'll see to it.</h3>
        <h5 className="body-1 hero-desc">Clear. Clean. Aesthetic.</h5>
        <Link to="/products">
          <button className="btn btn--primary hero-btn">Shop Now</button>
        </Link>
      </div>
      <div className="hero-img-container position-relative flex-mid-center">
        <div className="hero-img">
          <img src="https://res.cloudinary.com/dkqrmlxlg/image/upload/v1648978287/House%20Of%20Glass/image-removebg-preview_cooq41.png" />
        </div>
        <div className="hero-bg"></div>
        <img
          src="https://res.cloudinary.com/dkqrmlxlg/image/upload/v1648978032/House%20Of%20Glass/Rock_1_ip08d2.svg"
          alt=""
          className="position-absolute floating-elem1"
          id=""
        />
        <img
          src="https://res.cloudinary.com/dkqrmlxlg/image/upload/v1648973098/House%20Of%20Glass/Cheese_Half_2_xvqmd1.svg"
          alt=""
          className="position-absolute floating-elem2"
          id=""
        />
      </div>
    </div>
  );
}
