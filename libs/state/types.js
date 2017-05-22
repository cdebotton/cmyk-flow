/* @flow */

import Reducer from 'state';
import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';
import type { Action as SessionAction, State as SessionState } from 'state/session/types';

type $ExtractFunction = <V, A>({ form: (state: V, action: A) => V }) => V;

export type Action = SessionAction;
export type Dispatch = ReduxDispatch<Action>;
type FormState = $ObjMap<Reducer, $ExtractFunction>;
export type State = {
  form: FormState,
  session: SessionState,
};
export type Store = ReduxStore<State, Action>;
