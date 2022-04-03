import React from "react";
import { useProduct } from "Contexts/Product/ProductContext";

export default function Filters() {
  const { productDispatch, productState } = useProduct();
  return (
    <div className="filter ">
      <div className="filter-header-container">
        <h5 className="header-5">Filters</h5>
        <button
          className="btn btn--small"
          onClick={() => productDispatch({ type: "CLEAR" })}
        >
          CLEAR
        </button>
      </div>

      <div className="position-relative category-wrapper">
        <div className="category-label-container flex-mid-center">
          <span className="material-icons">sort</span>
          <h6 className="subtitle-1">Sort</h6>
        </div>
        <div
          className={`pill  align-center gap20 flex-mid-center  ${
            productState.sortBy === "HIGHTOLOW" ? "filter-selected" : ""
          }`}
        >
          <span className="material-icons">swap_vertical_circle</span>
          <label htmlFor="high-to-low ">High to Low</label>
          <input
            type="radio"
            name="SORTBY"
            checked={productState.sortBy === "HIGHTOLOW"}
            id="high-to-low"
            onChange={() =>
              productDispatch({ type: "SORTBY", payload: "HIGHTOLOW" })
            }
          />
        </div>
        <div
          className={`pill  align-center gap20 flex-mid-center  ${
            productState.sortBy === "LOWTOHIGH" ? "filter-selected" : ""
          }`}
        >
          <span className="material-icons">swap_vertical_circle</span>
          <label htmlFor="low-to-high">Low To High</label>
          <input
            type="radio"
            name="SORTBY"
            checked={productState.sortBy === "LOWTOHIGH"}
            id="low-to-high"
            onChange={() =>
              productDispatch({ type: "SORTBY", payload: "LOWTOHIGH" })
            }
          />
        </div>
      </div>
      <div className="position-relative category-wrapper">
        <div className="category-label-container flex-mid-center">
          <span className="material-icons">filter</span>
          <h6 className="subtitle-1">Filter</h6>
        </div>
        <div
          className={`pill  align-center gap20 flex-mid-center  ${
            productState.fastDelivery ? "filter-selected" : ""
          }`}
        >
          <span className="material-icons">bolt</span>
          <label htmlFor="fast-delivery">Fast Delivery</label>
          <input
            type="checkbox"
            name="FASTDELIVERY"
            checked={productState.fastDelivery === true ? true : false}
            id="fast-delivery"
            onChange={(e) =>
              productDispatch({
                type: "FASTDELIVERY",
                payload: e.target.checked,
              })
            }
          />
        </div>
        <div
          className={`pill  align-center gap20 flex-mid-center  ${
            productState.outOfStock ? "filter-selected" : ""
          }`}
        >
          <span className="material-icons">production_quantity_limits</span>
          <label htmlFor="out-of-stock">In Stock</label>
          <input
            type="checkbox"
            name="OUTOFSTOCK"
            checked={productState.outOfStock === true ? true : false}
            id="out-of-stock"
            onChange={(e) =>
              productDispatch({ type: "OUTOFSTOCK", payload: e.target.checked })
            }
          />
        </div>
      </div>

      <div className="position-relative category-wrapper">
        <div className="category-label-container flex-mid-center">
          <span className="material-icons">category</span>
          <h6 className="subtitle-1">Brand</h6>
        </div>

        <div className="pill  align-center gap20 flex-mid-center">
          <span className="material-icons">production_quantity_limits</span>
          <label htmlFor="category-1">Round</label>
          <input
            type="checkbox"
            name="CATEGORY"
            value="ROUND"
            checked={
              productState.categoryState.find(
                (category) => category === "ROUND"
              )
                ? true
                : false
            }
            id="category-1"
            onChange={(e) =>
              productDispatch({ type: "CATEGORY", payload: e.target.value })
            }
          />
        </div>
        <div className="pill  align-center gap20 flex-mid-center">
          <span className="material-icons">production_quantity_limits</span>
          <label htmlFor="category-1">Retro</label>
          <input
            type="checkbox"
            name="CATEGORY"
            value="RETRO"
            checked={
              productState.categoryState.find(
                (category) => category === "RETRO"
              )
                ? true
                : false
            }
            id="category-1"
            onChange={(e) =>
              productDispatch({ type: "CATEGORY", payload: e.target.value })
            }
          />
        </div>

        <div className="pill  align-center gap20 flex-mid-center">
          <span className="material-icons">production_quantity_limits</span>
          <label htmlFor="category-1">Transparent</label>
          <input
            type="checkbox"
            name="CATEGORY"
            value="TRANSPARENT"
            checked={
              productState.categoryState.find(
                (category) => category === "TRANSPARENT"
              )
                ? true
                : false
            }
            id="category-1"
            onChange={(e) =>
              productDispatch({ type: "CATEGORY", payload: e.target.value })
            }
          />
        </div>

        <div className="pill  align-center gap20 flex-mid-center">
          <span className="material-icons">production_quantity_limits</span>
          <label htmlFor="category-1">Cat Eye</label>
          <input
            type="checkbox"
            name="CATEGORY"
            value="CATEYE"
            checked={
              productState.categoryState.find(
                (category) => category === "CATEYE"
              )
                ? true
                : false
            }
            id="category-1"
            onChange={(e) =>
              productDispatch({ type: "CATEGORY", payload: e.target.value })
            }
          />
        </div>

        <div className="pill  align-center gap20 flex-mid-center">
          <span className="material-icons">production_quantity_limits</span>
          <label htmlFor="category-1">Rim Less</label>
          <input
            type="checkbox"
            name="CATEGORY"
            value="RIMLESS"
            checked={
              productState.categoryState.find(
                (category) => category === "RIMLESS"
              )
                ? true
                : false
            }
            id="category-1"
            onChange={(e) =>
              productDispatch({ type: "CATEGORY", payload: e.target.value })
            }
          />
        </div>
      </div>

      <div className="position-relative category-wrapper">
        <div className="category-label-container flex-mid-center">
          <span className="material-icons">linear_scale</span>
          <h6 className="subtitle-1">Range</h6>
        </div>

        <div className="pill  align-center gap20 flex-mid-center">
          <input
            id="price-range"
            type="range"
            value={productState.minPrice}
            max={12000}
            min={1000}
            step={1000}
            list="steps"
            onChange={(e) =>
              productDispatch({ type: "PRICERANGE", payload: e.target.value })
            }
          ></input>

          <datalist id="steps">
            <option key={1000} label="1K" value={1000}></option>
            <option key={3000} label="3K" value={3000}></option>
            <option key={6000} label="6K" value={6000}></option>
            <option key={9000} label="9K" value={9000}></option>
            <option key={12000} label="12K" value={12000}></option>
            <option key={15000} label="15K" value={15000}></option>
          </datalist>
          <label>{productState.minPrice}</label>
        </div>
      </div>
    </div>
  );
}
