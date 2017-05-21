/* @flow */

import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Status from 'containers/Status';
import Page from 'components/atoms/Page';

const Error = styled.span`
  font-size: ${rem('28px')};
  font-weight: 100;
`;

const Strong = styled.strong`
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: bold;
  border-right: 2px solid black;
  padding-right: ${rem('15px')};
  margin-right: ${rem('15px')};
`;

const NotFound = (): React$Element<*> => (
  <Status code={404}>
    <Page centered>
      <Error><Strong>404</Strong>Page not found</Error>
    </Page>
  </Status>
);

export default NotFound;
