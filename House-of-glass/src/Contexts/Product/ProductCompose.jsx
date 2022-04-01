const sortby = ({ sortBy }, array) => {
  switch (sortBy) {
    case "HIGHTOLOW":
      return sortBy === "HIGHTOLOW"
        ? [...array].sort((a, b) => Number(b.price) - Number(a.price))
        : [...array];
    case "LOWTOHIGH":
      return sortBy === "LOWTOHIGH"
        ? [...array].sort((a, b) => Number(a.price) - Number(b.price))
        : [...array];
    default:
      return [...array];
  }
};

const fastdelivery = ({ fastDelivery }, array) => {
  return fastDelivery ? array.filter((item) => item.fastDelivery) : array;
};

const outofstock = ({ outOfStock }, array) => {
  return outOfStock ? array.filter((item) => item.count >= 1) : array;
};

const applyCategories = ({ categoryState }, array) => {
  if (categoryState.length === 0) {
    return array;
  } else {
    return array.filter((item) => categoryState.includes(item.brand));
  }
};

const priceRange = ({ minPrice }, array) => {
  return array.filter((item) => item.price <= minPrice);
};
const applyFilters =
  (state, ...args) =>
  (ProductList) => {
    return args.reduce((acc, curr) => {
      return curr(state, acc);
    }, ProductList);
  };

const getProductList = (state, ProductList) =>
  applyFilters(
    state,
    sortby,
    fastdelivery,
    outofstock,
    applyCategories,
    priceRange
  )(ProductList);

export { getProductList };
