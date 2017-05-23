/* @flow */

import { connect } from 'react-redux';
import Login from 'components/pages/Login';
import { loginRequest } from 'state/session/actions';
import { getAuthed } from 'state/session/selectors';
import type { Connector } from 'react-redux';
import type { State, Dispatch } from 'state/types';

type Props = {
  error: ?string,
  authed: boolean,
  handleSubmit: ({ username: string, password: string }) => void,
};

const mapStateToProps = (state: State) => ({
  authed: getAuthed(state),
  error: state.session.error,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleSubmit: ({ username, password }) => {
    dispatch(loginRequest(username, password));
  },
});

const connector: Connector<{}, Props> = connect(mapStateToProps, mapDispatchToProps);

export default connector(Login);
