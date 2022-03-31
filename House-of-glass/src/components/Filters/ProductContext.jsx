import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { getProductList } from "./ProductCompose";
import { ProductReducer } from "./ProductReducer";
import axios from "axios";
// import { products } from "backend/db/products";
import { useAxios } from "Utils/useAxios";

const ProductContext = createContext();

const useProduct = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const { products, error, loading } = useAxios("/api/products");
  const [state, dispatch] = useReducer(ProductReducer, {
    sortBy: "",
    fastDelivery: false,
    outOfStock: false,
    categoryState: [],
    minPrice: 12000,
  });

  const finalProductList = getProductList(state, products);

  return (
    <ProductContext.Provider
      value={{ state, dispatch, finalProductList, error, loading }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { useProduct, ProductProvider };
