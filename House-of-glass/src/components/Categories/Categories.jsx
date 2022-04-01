import { useProduct } from "Contexts/Product/ProductContext";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./Categories.css";

export default function Categories() {
  const categoryList = [
    {
      img: "https://res.cloudinary.com/dkqrmlxlg/image/upload/v1648061613/House%20Of%20Glass/1_eestfh.jpg",
      type: "ROUND",
    },
    {
      img: "https://res.cloudinary.com/dkqrmlxlg/image/upload/v1648061847/House%20Of%20Glass/2_urb8za.jpg",
      type: "RETRO",
    },
    {
      img: "https://res.cloudinary.com/dkqrmlxlg/image/upload/v1648061847/House%20Of%20Glass/3_cfr4hd.jpg",
      type: "TRANSPARENT",
    },
    {
      img: "https://res.cloudinary.com/dkqrmlxlg/image/upload/v1648061847/House%20Of%20Glass/4_bpuxos.jpg",
      type: "SUNGLASSES",
    },
    {
      img: "https://res.cloudinary.com/dkqrmlxlg/image/upload/v1648061847/House%20Of%20Glass/5_cknv6i.jpg",
      type: "CATEYE",
    },
    {
      img: "https://res.cloudinary.com/dkqrmlxlg/image/upload/v1648061847/House%20Of%20Glass/6_pkcskv.jpg",
      type: "RIMLESS",
    },
  ];
  const navigate = useNavigate();

  const { productState, productDispatch } = useProduct();

  const categoryHandler = (category) => {
    const { type } = category;
    productDispatch({ type: "CATEGORY", payload: type });
    navigate("/products");
  };

  return (
    <section className="glass-categories">
      <div className="glass-categories-title">
        <h4 className="header-4 m-1b">Categories</h4>
        <p className="subtitle-1 m-1b">
          Browse through the various categories available to us.
        </p>
        <button className="btn btn--link btn--rtl">
          <span className="material-icons">arrow_forward</span>
          <Link to="/products">Browse</Link>
        </button>
      </div>
      <div className="glass-categories-container box-shadow br-12 flex-mid-center">
        {categoryList.map((category) => {
          const { type, img } = category;
          return (
            <div
              className="card card--mini m-1 box-shadow-2"
              onClick={() => categoryHandler(category)}
            >
              <div className="card__img--mini image--responsive">
                <img src={img} />
              </div>
              <div className="card__content--row mini--content">
                <h6 className="subtitle-2 text--center">{type}</h6>
              </div>
              <p className="subtitle-2 card__tag">NEW</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
