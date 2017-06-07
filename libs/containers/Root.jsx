/* @flow */

import React from 'react';
import Switch from 'react-router/Switch';
import Route from 'react-router/Route';
import { ThemeProvider } from 'styled-components';
import App from 'components/atoms/App';
import SessionLogin from 'containers/SessionLogin';
import Admin from 'containers/ReduxAdmin';
import NotFound from 'components/pages/NotFound';
import PrivateRoute from 'containers/PrivateRoute';
import adminTheme from 'themes/admin';

const Root = (): React$Element<any> =>
  (<ThemeProvider theme={adminTheme}>
    <App>
      <Switch>
        <Route path="/login" component={SessionLogin} />
        <PrivateRoute path="/admin" component={Admin} />
        <Route component={NotFound} />
      </Switch>
    </App>
  </ThemeProvider>);

export default Root;
