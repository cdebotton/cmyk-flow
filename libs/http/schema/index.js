/* @flow */

import { makeExecutableSchema } from 'graphql-tools';
import User from 'http/models/User';

const typeDefs = `
  type Query {
    users: [User]
  }

  type User {
    id: Int!
    username: String!
    password: String
    profile: Profile!
  }

  type Profile {
    id: Int!
    first_name: String
    last_name: String
    email: String!
  }
`;

const resolvers = {
  Query: {
    users: async () => {
      const users = await User.fetchAll();
      return users.toJSON();
    },
  },
  User: {
    profile: user => ({ id: 5 }),
  },
};

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
