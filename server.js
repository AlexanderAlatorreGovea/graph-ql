const path = require("path");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const typesArray = loadFilesSync("**/*", {
  extensions: ["graphql"],
});

const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: {
    Query: resolversArray,
  },
});
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = 3003 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
