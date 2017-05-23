/* @flow */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import Page from 'components/atoms/Page';
import LoginForm from 'components/organisms/LoginForm';
import adminTheme from 'themes/admin';

export type Props = {
  error: ?string,
  handleSubmit: (event: Event & { target: HTMLFormElement }) => void,
};

const Login = ({ error, handleSubmit }: Props): React$Element<any> => (
  <ThemeProvider theme={adminTheme}>
    <Page centered gradient>
      <LoginForm loginError={error} onSubmit={handleSubmit} />
    </Page>
  </ThemeProvider>
);

export default Login;
