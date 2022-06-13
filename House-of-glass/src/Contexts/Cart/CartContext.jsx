import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { cartReducer } from "./CartReducer";
import Toast from "components/Toast/Toast";
import { useAuth } from "Contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

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
  const { isLogged } = useAuth();
  const token = localStorage.getItem("Token");
  const navigate = useNavigate();

  const getCart = async () => {
    try {
      const response = await axios.get("/api/user/cart", {
        headers: {
          authorization: token,
        },
      });
      if (response.status === 200 || response.status === 201) {
        cartDispatch({ type: "GET_CART", payload: response?.data?.cart });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCart();
  }, [isLogged]);

  const addToCart = async (product) => {
    if (cartState.cart.some((item) => item._id === product._id)) {
      incrementCart(product);
    } else {
      try {
        if (isLogged) {
          const response = await axios.post(
            "/api/user/cart",
            { product },
            {
              headers: {
                authorization: localStorage.getItem("Token"),
              },
            }
          );

          if (response.status === 201) {
            cartDispatch({
              type: "ADD_TO_CART",
              payload: response?.data?.cart,
            });
          }
          Toast({
            type: "success",
            message: `${product.name} is added to cart!`,
          });
        } else {
          Toast({
            type: "info",
            message: `You need to login first.`,
          });
        }
      } catch (error) {
        Toast({
          type: "error",
          message: "Something broke. Where's my glasses.",
        });
      }
    }
  };

  const deleteFromCart = async (product) => {
    try {
      const response = await axios.delete(`/api/user/cart/${product._id}`, {
        headers: {
          authorization: token,
        },
      });
      if (response.status === 200) {
        cartDispatch({
          type: "DELETE_FROM_CART",
          payload: response?.data?.cart,
        });
      }
      Toast({
        type: "error",
        message: `${product.name} removed from cart. Ouch ;_;`,
      });
    } catch (error) {
      Toast({
        type: "error",
        message: `Someone's here. Where's my glasses. Error ${error.data.status}`,
      });
    }
  };

  const incrementCart = async (product) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${product._id}`,
        { action: { type: "increment" } },
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (response.status === 200) {
        cartDispatch({ type: "INCREMENT_CART", payload: response?.data?.cart });
      }
      Toast({
        type: "success",
        message: `${product.name} Quantity Increased! The More, the merrier`,
      });
    } catch (error) {
      Toast({
        type: "error",
        message: "Uh-Oh!. Where's my glasses.",
      });
    }
  };

  const decrementCart = async (product) => {
    if (product.qty === 1) {
      deleteFromCart(product);
    } else {
      try {
        const response = await axios.post(
          `/api/user/cart/${product._id}`,
          { action: { type: "decrement" } },
          {
            headers: {
              authorization: token,
            },
          }
        );
        if (response.status === 200) {
          cartDispatch({
            type: "DECREMENT_CART",
            payload: response?.data?.cart,
          });
        }
        Toast({
          type: "success",
          message: `${product.name}'s Quantity decreased. You wanna rethink it?`,
        });
      } catch (error) {
        Toast({
          type: "error",
          message: "Ouch!. Where's my glasses.",
        });
      }
    }
  };

  const checkout = async () => {
    cartDispatch({ type: "CHECKOUT" });
    navigate("/products");
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
