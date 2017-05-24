/* @flow */

import React, { Component } from 'react';
import { Router } from 'react-router';
import { connect } from 'react-redux';
import { locationChange } from 'state/router/actions';
import type { Connector } from 'react-redux';
import type { RouterHistory } from 'react-router';
import type { Dispatch } from 'state/types';

type OwnProps = {
  history: RouterHistory,
};

type Props = {
  handleLocationChange: (location: Object) => void,
};

class ConnectedRouter extends Component<void, OwnProps & Props, void> {
  componentWillMount() {
    const { history, handleLocationChange } = this.props;
    this.unsubscribeFromHistory = history.listen(handleLocationChange);
    handleLocationChange(history.location);
  }

  componentWillUnmount() {
    this.unsubscribeFromHistory();
  }

  unsubscribeFromHistory: () => void;

  render() {
    return <Router {...this.props} />;
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleLocationChange: location => dispatch(locationChange(location)),
});

const connector: Connector<OwnProps, Props> = connect(undefined, mapDispatchToProps);
export default connector(ConnectedRouter);
