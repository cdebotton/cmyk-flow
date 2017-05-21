/* @flow */

import React from 'react';
import styled from 'styled-components';
import { modularScale } from 'polished';
import Status from 'containers/Status';
import Page from 'components/atoms/Page';

const Error = styled.div`
  font-size: ${modularScale(3)};
  font-weight: 100;
  padding: ${modularScale(0)};
`;

const Strong = styled.strong`
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: bold;
  border-right: 2px solid #000;
  padding-right: ${modularScale(0)};
  margin-right: ${modularScale(0)};
`;

const NotFound = (): React$Element<*> => (
  <Status code={404}>
    <Page centered>
      <Error><Strong>404</Strong>Page not found</Error>
    </Page>
  </Status>
);

export default NotFound;
