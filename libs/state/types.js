/* @flow */

import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type Action = { type: string };
export type Dispatch = ReduxDispatch<void>;

export type State = {};

export type Store = ReduxStore<State, Action>;
