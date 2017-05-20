/* @flow */

import React from 'react';
import Switch from 'react-router/Switch';
import Route from 'react-router/Route';
import App from 'components/App';
import Login from 'containers/Login';
import NotFound from 'components/NotFound';

const Root = (): React$Element<any> => (
  <App>
    <Switch>
      <Route path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </App>
);

export default Root;
