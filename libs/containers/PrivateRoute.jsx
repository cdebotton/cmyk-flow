/* @flow */

import React from 'react';
import { connect } from 'react-redux';
import Route from 'react-router/Route';
import Redirect from 'react-router/Redirect';
import { getAuthed } from 'state/session/selectors';
import type { Connector } from 'react-redux';
import type { State } from 'state/types';

type Props = {
  authed: boolean,
};

type OwnProps = {
  component: any,
};

type RenderProps = {
  location: string,
};

const PrivateRoute = ({
  component: Component,
  authed,
  ...rest
}: OwnProps & Props): React$Element<*> =>
  (<Route
    {...rest}
    render={(props: RenderProps) => {
      if (authed) {
        return <Component {...props} />;
      }

      return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
    }}
  />);

const mapStateToProps = (state: State) => ({
  authed: getAuthed(state),
});

const connector: Connector<OwnProps, Props> = connect(mapStateToProps);

export default connector(PrivateRoute);
