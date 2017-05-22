/* @flow */

import type { Action } from 'state/types';

export const LOGIN_REQUEST = 'session/LOGIN_REQUEST';
export const loginRequest = (username: string, password: string): Action => ({
  type: LOGIN_REQUEST,
  payload: {
    username,
    password,
  },
});

export const LOGIN_SUCCESS = 'session/LOGIN_SUCCESS';
export const loginSuccess = (token: string): Action => ({
  type: LOGIN_SUCCESS,
  payload: {
    token,
  },
});

export const LOGIN_FAILURE = 'session/LOGIN_FAILURE';
export const loginFailure = (error: Error): Action => ({
  type: LOGIN_FAILURE,
  error,
});
