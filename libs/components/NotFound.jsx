/* @flow */

import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Status from 'containers/Status';
import Page from 'components/Page';

const Strong = styled.strong`
  font-weight: bold;
  border-right: 2px solid black;
  padding-right: ${rem('15px')};
  margin-right: ${rem('15px')};
`;

const NotFound = (): React$Element<*> => (
  <Status code={404}>
    <Page centered>
      <span><Strong>404</Strong>Page not found!</span>
    </Page>
  </Status>
);

export default NotFound;
