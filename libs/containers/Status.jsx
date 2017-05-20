/* @flow */

import React from 'react';
import Route from 'react-router/Route';

type Props = {
  code: number,
  children?: any,
};

const Status = ({ code, children }: Props): React$Element<*> => (
  <Route
    render={({ staticContext }: { staticContext: { [key: string]: any } }) => {
      if (staticContext) {
        staticContext.status = code;
      }
      return children;
    }}
  />
);

Status.defaultProps = {
  children: null,
};

export default Status;
