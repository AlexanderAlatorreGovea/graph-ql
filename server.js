const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const schema = buildSchema(`
    type Query {
        products: [Product]
        orders: [Order]
    }

    type Product {
        id: ID!
        description: String!
        reviews: [Review]
        price: Float!
    }

    type Review {
        rating: Int!
        comment: String
    }

    type Order {
        date: String!
        subtotal: Float!
        items: [OrderItem]
    }

    type OrderItem {
        product: Product!
        quantity: Int!
    }
`);

const root = {
  products: [
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
  ],
  orders: [
    {
      date: "2005-02-04",
      subtotal: 90.22,
      items: [
        {
          product: {
            id: "redshoe",
            description: 'Old Red Shoe',
            price: 45.33
          },
          quantity: 2,
        },
      ],
    },
  ],
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

const PORT = 3003 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
