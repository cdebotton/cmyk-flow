/* @flow */

import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';
import type { Action as FormsAction, State as FormsState } from 'state/forms/types';

export type Action = FormsAction;
export type Dispatch = ReduxDispatch<Action>;

export type State = {
  forms: FormsState,
};

export type Store = ReduxStore<State, Action>;
