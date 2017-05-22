/* @flow */

import { connect } from 'react-redux';
import Login from 'components/pages/Login';
import { loginRequest } from 'state/session/actions';
import type { Connector } from 'react-redux';
import type { Dispatch } from 'state/types';

type Props = {
  handleSubmit: ({ username: string, password: string }) => void,
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleSubmit: ({ username, password }) => {
    dispatch(loginRequest(username, password));
  },
});

const connector: Connector<{}, Props> = connect(undefined, mapDispatchToProps);

export default connector(Login);
