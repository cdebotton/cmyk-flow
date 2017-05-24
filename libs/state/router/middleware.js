/* @flow */

import { CALL_HISTORY_METHOD } from 'state/router/actions';
import type { RouterHistory } from 'react-router';
import type { Action, Dispatch } from 'state/types';

const routerMiddleware = (history: RouterHistory) => () => (next: Dispatch) => (action: Action) => {
  if (action.type === CALL_HISTORY_METHOD) {
    const { payload: { method, args } } = action;
    history[method](...args);
  }

  return next(action);
};

export default routerMiddleware;
