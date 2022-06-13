import React, { useEffect } from "react";
import Filters from "components/Filters/Filters";
import { useProduct } from "Contexts/Product/ProductContext";
import ProductCard from "components/Cards/ProductCard/ProductCard";
import EmptyState from "components/EmptyState/EmptyState";
import { useParams } from "react-router-dom";

export default function ProductList() {
  const { products, productDispatch } = useProduct();
  const { category } = useParams();

  const filteredProducts = (category) => {
    if (category !== undefined) {
      productDispatch({ type: "CATEGORY", payload: category });
    } else {
      productDispatch({ type: "CLEAR" });
    }
  };
  useEffect(() => {
    filteredProducts(category);
  }, []);

  return (
    <div className="content flex--row--wrap products-container">
      <Filters />
      <div className="products-text-container">
        <h4 className="header-4">Products</h4>
        <h6 className="subtitle-1">Products found : {products?.length} </h6>
      </div>
      {products?.length >= 1 && (
        <div
          className={`products-list-container ${
            products?.length === 0 ? grid_center : ""
          } flex--row--wrap`}
        >
          {products.map((item) => (
            <ProductCard key={item._id} Item={item} />
          ))}
        </div>
      )}
      {!products?.length >= 1 && (
        <div className="emptyState_Container flex-mid-center">
          <EmptyState
            stateTitle={"No Products Found"}
            stateDesc="Let's try Again."
            btnText="Clear"
            icon={"question_mark"}
            endpoint="/products"
            color={"all-yellow"}
          />
        </div>
      )}
    </div>
  );
}
