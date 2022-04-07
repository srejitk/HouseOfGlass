import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { wishlistReducer } from "./WishlistReducer";
import Toast from "components/Toast/Toast";
import { useAuth } from "Contexts/Auth/AuthContext";

const WishlistContext = createContext();

const useWishlist = () => useContext(WishlistContext);

const WishlistProvider = ({ children }) => {
  const initialWishlistState = { wishlist: [], wishlistCount: 0 };
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialWishlistState
  );
  const token = localStorage.getItem("Token");
  const { isLogged } = useAuth();

  const getWishlist = async () => {
    try {
      const response = await axios.get("/api/user/wishlist", {
        headers: {
          authorization: token,
        },
      });
      if (response.status === 200) {
        wishlistDispatch({
          type: "GET_WISHLIST",
          payload: response?.data?.wishlist,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWishlist();
  }, [token]);

  const addToWishlist = async (product) => {
    if (wishlistState.wishlist.some((item) => item._id === product._id)) {
      removeFromWishlist(product);
    } else {
      try {
        const response = await axios.post(
          "/api/user/wishlist",
          { product },
          {
            headers: {
              authorization: localStorage.getItem("Token"),
            },
          }
        );
        if (response.status === 201) {
          wishlistDispatch({
            type: "ADD_TO_WISHLIST",
            payload: response?.data?.wishlist,
          });
        }
        Toast({
          type: "info",
          message: `${product.name} is waiting to see you!`,
        });
      } catch (error) {
        Toast({
          type: "error",
          message: "Something broke. Where's my glasses.",
        });
        console.log(error);
      }
    }
  };

  const removeFromWishlist = async (product) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${product._id}`, {
        headers: {
          authorization: localStorage.getItem("Token"),
        },
      });
      if (response.status === 200) {
        wishlistDispatch({
          type: "DELETE_FROM_WISHLIST",
          payload: response?.data?.wishlist,
        });
      }
      Toast({
        type: "info",
        message: `${product.name} is waiting to see you!`,
      });
    } catch (error) {
      Toast({
        type: "error",
        message: "Someone's here. Where's my glasses.",
      });
      console.log(error);
    }
  };
  return (
    <WishlistContext.Provider
      value={{
        wishlist: wishlistState.wishlist,
        wishlistCount: wishlistState.wishlistCount,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export { useWishlist, WishlistProvider };
