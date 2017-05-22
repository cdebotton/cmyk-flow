/* @flow */

import { createSelector } from 'reselect';
import type { State } from 'state/types';

export const getAuthed = createSelector(
  (state: State) => state.session.token,
  token => token !== null,
);
