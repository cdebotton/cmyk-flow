/* @flow */

import Reducer from 'state';
import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';
import type { Action as SessionAction } from 'state/session/types';

type $ExtractFunction = <V, A>({ [reducerName: string]: (state: V, action: A) => V }) => V;

export type Action = SessionAction;
export type Dispatch = ReduxDispatch<Action>;
export type State = $ObjMap<Reducer, $ExtractFunction>;
export type Store = ReduxStore<State, Action>;
