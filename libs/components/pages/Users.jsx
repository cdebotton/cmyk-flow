/* @flow */

import React from 'react';
import Section from 'components/atoms/Section';
import PageTitle from 'components/atoms/PageTitle';
import Grid from 'components/atoms/Grid';
import GridItem from 'components/atoms/GridItem';

const Users = ({ data: { loading, users } }) =>
  (<Section>
    <PageTitle>Users</PageTitle>
    {loading
      ? <p>Loading...</p>
      : <Grid>
        {users.map(user =>
            (<GridItem key={`USER_${user.id}`}>
              {user.username}
            </GridItem>),
          )}
      </Grid>}
  </Section>);

export default Users;
