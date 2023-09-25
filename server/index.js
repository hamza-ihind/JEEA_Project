const mongoose = require("mongoose");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

// Destructured
const { ApolloServer } = require("apollo-server");
const { MONGODB } = require("./config.js");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    server.listen(5000, () => {
      console.log("connected to db & listening on port", 5000);
    });
  })
  .catch((error) => {
    console.log(error);
  });