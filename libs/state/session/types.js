/* @flow */

export type State = {
  +isLoggingIn: boolean,
  +sessionId: ?number,
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

export type Action = LoginRequest | LoginSuccess | LoginFailure;
