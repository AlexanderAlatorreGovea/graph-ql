const product = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.33,
  },
  {
    id: "bluejeans",
    description: "Blue Jean",
    price: 45.33,
  },
];

function getAllProducts() {
  return product;
}

module.exports = {
  getAllProducts,
};
