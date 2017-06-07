/* @flow */

import React from 'react';
import Section from 'components/atoms/Section';
import PageTitle from 'components/atoms/PageTitle';

const Users = ({ data: { loading, users } }) =>
  (<Section>
    <PageTitle>Users</PageTitle>
    {loading ? <p>Loading...</p> : <code>{JSON.stringify(users, null, 2)}</code>}
  </Section>);

export default Users;
