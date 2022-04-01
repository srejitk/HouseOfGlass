import { createContext, useContext, useReducer } from "react";
import { getProductList } from "./ProductCompose";
import { ProductReducer } from "./ProductReducer";
import { useAxios } from "Utils/useAxios";

const ProductContext = createContext();

const useProduct = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const { products, error, loading } = useAxios("/api/products");
  const [productState, productDispatch] = useReducer(ProductReducer, {
    sortBy: "",
    fastDelivery: false,
    outOfStock: false,
    categoryState: [],
    minPrice: 12000,
  });

  const finalProductList = getProductList(productState, products);

  return (
    <ProductContext.Provider
      value={{
        productState,
        productDispatch,
        products: finalProductList,
        error,
        loading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { useProduct, ProductProvider };
