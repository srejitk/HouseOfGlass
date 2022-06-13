import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Toast from "components/Toast/Toast";

const CategoryContext = createContext();

const useCategory = () => useContext(CategoryContext);

const CategoryProvider = ({ children }) => {
  const [categoryList, setCategoryList] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const { data, status } = await axios.get("/api/categories");
      if (status === 200) {
        setCategoryList(() => data?.categories);
      } else {
        Toast({
          type: "error",
          message: `Couldn't retreive Categories, Error ${status}`,
        });
      }
    } catch (e) {
      console.error("Error", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const categoryHandler = (category) => {
    const { categoryName } = category;
    navigate(`/products/${categoryName}`);
  };

  return (
    <CategoryContext.Provider
      value={{ categoryList, categoryHandler, setCategoryList }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export { useCategory, CategoryProvider };
