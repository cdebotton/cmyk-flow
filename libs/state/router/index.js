/* @flow */

import { LOCATION_CHANGE } from 'state/router/actions';
import type { State } from 'state/router/types';
import type { Action } from 'state/types';

const initialState = {
  location: null,
};

const routerReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return {
        ...state,
        location: action.payload,
      };
    default:
      return state;
  }
};

export default routerReducer;
