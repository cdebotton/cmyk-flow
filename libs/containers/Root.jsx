/* @flow */

import React from 'react';
import Switch from 'react-router/Switch';
import Route from 'react-router/Route';
import App from 'components/atoms/App';
import Login from 'containers/Login';
import Admin from 'components/pages/Admin';
import NotFound from 'components/pages/NotFound';
import PrivateRoute from 'containers/PrivateRoute';

const Root = (): React$Element<any> => (
  <App>
    <Switch>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/admin" component={Admin} />
      <Route component={NotFound} />
    </Switch>
  </App>
);

export default Root;
