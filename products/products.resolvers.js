const productsModel = require("./products.model");

module.exports = {
  Query: {
    products: () => productsModel.getAllProducts(),
  },
};
