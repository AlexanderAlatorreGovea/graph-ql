const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.33,
    reviews: [],
  },
  {
    id: "bluejeans",
    description: "Blue Jean",
    price: 45.33,
    reviews: [],
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  return products.filter(
    (product) => product.price >= min && product.price <= max
  );
}

function getProductById(id) {
  return products.find((product) => product.id === id);
}

function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    description,
    price,
  };

  products.push(newProduct);

  return newProduct;
}

function addNewProductReview(id, rating, comment) {
  const existingProduct = getProductById(id);

  if (!existingProduct) {
    throw new Error("No product found");
  }

  const newProductReview = {
    rating,
    comment,
  };

  existingProduct.reviews.push(newProductReview);

  return newProductReview;
}

module.exports = {
  addNewProductReview,
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
};
