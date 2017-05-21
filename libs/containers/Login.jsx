/* @flow */

import { connect } from 'react-redux';
import Login from 'components/pages/Login';
import { updateField } from 'state/forms/actions';

import type { Connector } from 'react-redux';
import type { Dispatch, State } from 'state/types';
import type { Props as OwnProps } from 'components/pages/Login';
import type { FieldProps } from 'state/forms/types';

type Props = {
  username: FieldProps<string>,
  password: FieldProps<string>,
};

const mapStateToProps = (state: State) => ({
  username: state.forms.login.entities.username,
  password: state.forms.login.entities.password,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateField: (formName: string, fieldName: string) => (
    event: Event & { target: HTMLInputElement },
  ) => {
    dispatch(updateField(formName, fieldName, event.target.value));
  },
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  username: {
    ...stateProps.username,
    onChange: dispatchProps.updateField('login', 'username'),
  },
  password: {
    ...stateProps.password,
    onChange: dispatchProps.updateField('login', 'password'),
  },
  ...ownProps,
});

const connector: Connector<OwnProps, Props> = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
);

export default connector(Login);
