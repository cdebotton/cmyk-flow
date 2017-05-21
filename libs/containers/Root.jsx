/* @flow */

import React from 'react';
import Switch from 'react-router/Switch';
import Route from 'react-router/Route';
import App from 'components/atoms/App';
import Login from 'components/pages/Login';
import NotFound from 'components/pages/NotFound';

const Root = (): React$Element<any> => (
  <App>
    <Switch>
      <Route path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </App>
);

export default Root;
