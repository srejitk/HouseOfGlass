import React from "react";
import Filters from "components/Filters/Filters";
import { useProduct } from "Contexts/Product/ProductContext";
import ProductCard from "components/Cards/ProductCard/ProductCard";

export default function ProductList() {
  const { products } = useProduct();

  return (
    <div className="content flex--row--wrap products-container">
      <Filters />
      <div className="products-text-container">
        <h4 className="header-4">Products</h4>
        <h6 className="subtitle-1">Products found : {products?.length} </h6>
      </div>
      <div className="products-list-container flex--row--wrap">
        {products.map((item) => (
          <ProductCard key={item._id} Item={item} />
        ))}
      </div>
    </div>
  );
}
