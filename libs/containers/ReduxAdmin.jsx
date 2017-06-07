/* @flow */

import { connect } from 'react-redux';
import Admin from 'components/pages/Admin';
import { logoutRequest } from 'state/session/actions';
import type { Connector } from 'react-redux';
import type { Props } from 'components/pages/Admin';
import type { Dispatch } from 'state/types';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleSignout: () => {
    dispatch(logoutRequest());
  },
});

const connector: Connector<{}, Props> = connect(undefined, mapDispatchToProps);

export default connector(Admin);
