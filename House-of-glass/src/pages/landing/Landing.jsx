import "./Landing.css";
import React, { useEffect } from "react";
import Banner from "components/Banner/Banner";
import Categories from "components/Categories/Categories";
import Highlights from "components/Highlights/Highlights";
import { useProduct } from "Contexts/Product/ProductContext";

export default function Landing() {
  const { productDispatch } = useProduct();
  const clearFilters = () => {
    productDispatch({ type: "CLEAR" });
  };

  useEffect(() => clearFilters(), []);
  return (
    <div className="container landing-container container-column">
      <Banner />
      <Categories />
      <Highlights />
    </div>
  );
}
