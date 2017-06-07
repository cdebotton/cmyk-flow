/* @flow */

import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';
import type { Action as RouterAction, State as RouterState } from 'state/router/types';
import type { Action as SessionAction, State as SessionState } from 'state/session/types';

export type Action = SessionAction | RouterAction;
export type Dispatch = ReduxDispatch<Action>;

export type State = {
  session: SessionState,
  router: RouterState,
};
export type Store = ReduxStore<State, Action>;
