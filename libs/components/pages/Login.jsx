/* @flow */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import Page from 'components/atoms/Page';
import LoginForm from 'containers/LoginForm';
import adminTheme from 'themes/admin';

export type Props = {};

const Login = ({ }: Props): React$Element<any> => (
  <ThemeProvider theme={adminTheme}>
    <Page centered gradient>
      <LoginForm />
    </Page>
  </ThemeProvider>
);

export default Login;
