/* @flow */

import React from 'react';
import Route from 'react-router/Route';
import Redirect from 'react-router/Redirect';

type Props = {
  from?: string,
  to: string,
  status: number,
};

const RedirectStatus = ({ from, to, status }: Props): React$Element<*> => (
  <Route
    render={({ staticContext }: { staticContext: { [key: string]: any } }) => {
      if (staticContext) {
        staticContext.status = status;
      }
      return <Redirect from={from} to={to} />;
    }}
  />
);

RedirectStatus.defaultProps = {
  from: null,
};

export default RedirectStatus;
