/* @flow */

import React from 'react';
import Redirect from 'react-router/Redirect';
import { ThemeProvider } from 'styled-components';
import Page from 'components/atoms/Page';
import LoginForm from 'components/organisms/LoginForm';
import adminTheme from 'themes/admin';

export type Props = {
  error: ?string,
  isAuthed: boolean,
  handleSubmit: ({ username: string, password: string }) => void,
};

const Login = ({ error, isAuthed, handleSubmit }: Props): React$Element<any> => (
  <ThemeProvider theme={adminTheme}>
    <Page centered gradient>
      {isAuthed && <Redirect to="/admin" />}
      <LoginForm loginError={error} onSubmit={handleSubmit} />
    </Page>
  </ThemeProvider>
);

export default Login;
