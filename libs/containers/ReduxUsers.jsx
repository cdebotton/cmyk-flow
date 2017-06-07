/* @flow */

import { graphql, gql } from 'react-apollo';
import Users from 'components/pages/Users';

const getUsers = gql`
  query {
    users {
      id,
      username,
    }
  }
`;

export default graphql(getUsers)(Users);
