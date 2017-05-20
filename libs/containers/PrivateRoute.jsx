/* @flow */

import React from 'react';
import Route from 'react-router/Route';
import Redirect from 'react-router/Redirect';

type Props = {
  component: (props: any) => React$Element<*>,
};

type RenderProps = {
  location: string,
};

const PrivateRoute = ({ component: Component, ...rest }: Props): React$Element<*> => (
  <Route
    {...rest}
    render={(props: RenderProps) => {
      if (false) {
        return <Component {...props} />;
      }

      return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
    }}
  />
);

export default PrivateRoute;
