/* @flow */

import Reducer from 'state';

import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type Action = { type: string };
export type Dispatch = ReduxDispatch<void>;

type $ExtractFunction = <V, A>({ [reducerName: string]: (state: V, action: A) => V }) => V;

export type State = $ObjMap<Reducer, $ExtractFunction>;

export type Store = ReduxStore<State, Action>;
