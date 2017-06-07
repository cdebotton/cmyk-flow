/* @flow */

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from 'state/session/actions';
import type { State } from 'state/session/types';
import type { Action } from 'state/types';

const initialState: State = {
  token: null,
  error: null,
  isLoading: false,
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        token: null,
        error: null,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        isLoading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        token: null,
        error: action.error,
        isLoading: false,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        token: null,
        isLoading: false,
        error: null,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        token: null,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
