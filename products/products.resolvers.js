const {
  addNewProductReview,
  addNewProduct,
  getAllProducts,
  getProductsByPrice,
  getProductById,
} = require("./products.model");

module.exports = {
  Query: {
    products: () => {
      return getAllProducts();
    },
    productsByPrice: (_, args) => {
      return getProductsByPrice(args.min, args.max);
    },
    productById: (_, args) => {
      return getProductById(args.id);
    },
  },
  Mutation: {
    addNewProduct: (_, { id, description, price }) =>
      addNewProduct(id, description, price),
    addNewProductReview: (_, { id, rating, comment }) =>
      addNewProductReview(id, rating, comment),
  },
};
