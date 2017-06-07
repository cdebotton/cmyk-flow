/* @flow */

import React from 'react';
import Section from 'components/atoms/Section';
import PageTitle from 'components/atoms/PageTitle';
import Grid from 'components/atoms/Grid';
import GridItem from 'components/atoms/GridItem';
import GridTitle from 'components/atoms/GridTitle';
import BackgroundImage from 'components/atoms/BackgroundImage';

const Users = ({ data: { loading, users } }) =>
  (<Section>
    <PageTitle>Users</PageTitle>
    {loading
      ? <p>Loading...</p>
      : <Grid>
        {users.map((user, key) =>
            (<GridItem key={`USER_${user.id}`}>
              <BackgroundImage src={`https://unsplash.it/${400 + key}/${600 + key}?random`} />
              <GridTitle>{user.username}</GridTitle>
            </GridItem>),
          )}
      </Grid>}
  </Section>);

export default Users;
