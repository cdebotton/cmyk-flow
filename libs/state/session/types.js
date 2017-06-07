/* @flow */

export type State = {
  +token: ?string,
  +error: ?Error,
};

type LoginRequest = {|
  type: 'session/LOGIN_REQUEST',
  +payload: {|
    +username: string,
    +password: string,
  |},
|};

type LoginSuccess = {|
  type: 'session/LOGIN_SUCCESS',
  +payload: {|
    +token: string,
  |},
|};

type LoginFailure = {|
  type: 'session/LOGIN_FAILURE',
  error: Error,
|};

type LogoutRequest = {|
  type: 'session/LOGOUT_REQUEST',
|};

type LogoutSuccess = {|
  type: 'session/LOGOUT_SUCCESS',
|};

type LogoutFailure = {|
  type: 'session/LOGOUT_FAILURE',
  error: Error,
|};

export type Action =
  | LoginRequest
  | LoginSuccess
  | LoginFailure
  | LogoutRequest
  | LogoutSuccess
  | LogoutFailure;
