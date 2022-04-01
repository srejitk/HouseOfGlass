export const cartReducer = (state, { type, payload }) => {
  const initialCartState = { cart: [], cartCount: 0, cartSum: 0 };
  switch (type) {
    case "ADD_TO_CART":
    case "DELETE_FROM_CART":
    case "INCREMENT_CART":
    case "DECREMENT_CART":
      return {
        ...state,
        cart: payload,
        cartCount: payload.reduce((acc, curr) => (acc += curr.qty), 0),
        cartSum: payload.reduce(
          (acc, curr) => (acc += curr.sellingPrice * curr.qty),
          0
        ),
      };
    case "CHECKOUT":
      return initialCartState;
    default:
      return state;
  }
};
