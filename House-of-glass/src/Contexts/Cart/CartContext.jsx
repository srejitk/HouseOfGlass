import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { cartReducer } from "./CartReducer";
import Toast from "components/Toast/Toast";

const CartContext = createContext();

const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const initialCartState = {
    cart: [],
    cartCount: 0,
    cartSum: 0,
    cartDiscount: 0,
  };
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

  const token = localStorage.getItem("Token");
  const header = {
    headers: {
      authorization: token,
    },
  };

  const getCart = async () => {
    try {
      const response = await axios.get("/api/user/cart", header);
      if (response.status === 200 || response.status === 201) {
        cartDispatch({ type: "GET_CART", payload: response?.data?.cart });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  const addToCart = async (product) => {
    if (cartState.cart.some((item) => item._id === product._id)) {
      incrementCart(product);
    } else {
      try {
        const response = await axios.post(
          "/api/user/cart",
          { product },
          header
        );

        if (response.status === 201) {
          cartDispatch({ type: "ADD_TO_CART", payload: response?.data?.cart });
        }
        Toast({
          type: "success",
          message: `${product.name} will be seeing you soon!`,
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

  const deleteFromCart = async (product) => {
    try {
      const response = await axios.delete(
        `/api/user/cart/${product._id}`,
        header
      );
      if (response.status === 200) {
        cartDispatch({
          type: "DELETE_FROM_CART",
          payload: response?.data?.cart,
        });
      }
      Toast({
        type: "success",
        message: `${product.name} will not be seeing you soon!`,
      });
    } catch (error) {
      Toast({
        type: "error",
        message: "Someone's here. Where's my glasses.",
      });
      console.log(error);
    }
  };

  const incrementCart = async (product) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${product._id}`,
        { action: { type: "increment" } },
        header
      );
      if (response.status === 200) {
        cartDispatch({ type: "INCREMENT_CART", payload: response?.data?.cart });
      }
      Toast({
        type: "success",
        message: `The ${product.name}'s will be seeing you soon!`,
      });
    } catch (error) {
      Toast({
        type: "error",
        message: "Uh-Oh!. Where's my glasses.",
      });
      console.log(error);
    }
  };

  const decrementCart = async (product) => {
    if (cartState.cart.some((item) => item.qty === 1)) {
      deleteFromCart(product);
    } else {
      try {
        const response = await axios.post(
          `/api/user/cart/${product._id}`,
          { action: { type: "decrement" } },
          header
        );
        if (response.status === 200) {
          cartDispatch({
            type: "DECREMENT_CART",
            payload: response?.data?.cart,
          });
        }
        Toast({
          type: "success",
          message: `The ${product.name}'s will not be seeing you.`,
        });
      } catch (error) {
        Toast({
          type: "error",
          message: "Ouch!. Where's my glasses.",
        });
        console.log(error);
      }
    }
  };

  const checkout = async () => {
    cartDispatch({ type: "CHECKOUT" });
    Toast({
      type: "success",
      message: "Congratulations! You saw it through!",
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart: cartState.cart,
        cartCount: cartState.cartCount,
        cartSum: cartState.cartSum,
        cartDiscount: cartState.cartDiscount,
        addToCart,
        deleteFromCart,
        incrementCart,
        decrementCart,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartProvider };
