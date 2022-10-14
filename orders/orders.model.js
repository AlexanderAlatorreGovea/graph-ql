const order = [
  {
    date: "2005-02-04",
    subtotal: 90.22,
    items: [
      {
        product: {
          id: "redshoe",
          description: "Old Red Shoe",
          price: 45.33,
        },
        quantity: 2,
      },
    ],
  },
];

function getAllOrders() {
  return order;
}

module.exports = {
  getAllOrders,
};
