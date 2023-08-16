const gql = require("graphql-tag");

module.exports = gql`
  type Project {
    id: ID!
    title: String!
    body: String!
    location: String!
    date: String!
    description: String!
  }

  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }

  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  type Query {
    getUsers: [User]
    getProjects: [Project]
    getProject(projectId: ID!): Project!
  }

  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createProject(body: String!): Project!
    deleteProject(projectId: ID!): String!
  }
`;
