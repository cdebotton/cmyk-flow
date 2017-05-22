/* @flow */

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from 'state/session/actions';
import type { State } from 'state/session/types';
import type { Action } from 'state/types';

const initialState: State = {
  token: null,
  isLoggingIn: false,
  error: null,
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        token: action.payload.token,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        token: null,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
