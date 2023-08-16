const projectsResolvers = require("./projects");
const usersResolvers = require("./users");

module.exports = {
  Query: {
    ...projectsResolvers.Query,
    ...usersResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...projectsResolvers.Mutation,
  },
};
