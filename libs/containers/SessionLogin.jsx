/* @flow */

import { connect } from 'react-redux';
import Login from 'components/pages/Login';
import { loginRequest } from 'state/session/actions';
import { getAuthed } from 'state/session/selectors';
import type { Connector } from 'react-redux';
import type { State, Dispatch } from 'state/types';
import type { Props } from 'components/pages/Login';

const mapStateToProps = (state: State) => ({
  isAuthed: getAuthed(state),
  error: state.session.error,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleSubmit: ({ username, password }) => {
    dispatch(loginRequest(username, password));
  },
});

const connector: Connector<{}, Props> = connect(mapStateToProps, mapDispatchToProps);

export default connector(Login);
