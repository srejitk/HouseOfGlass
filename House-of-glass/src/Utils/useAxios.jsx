import axios from "axios";
import { useState, useEffect } from "react";

export const useAxios = (endpoint) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(endpoint);
      setProducts(data?.products);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { products, error, loading };
};
