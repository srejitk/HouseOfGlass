export const wishlistReducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_WISHLIST":
    case "ADD_TO_WISHLIST":
    case "DELETE_FROM_WISHLIST":
      return { ...state, wishlist: payload, wishlistCount: payload.length };
    default:
      return state;
  }
};
