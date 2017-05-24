/* @flow */

import type { Location } from 'state/router/types';
import type { Action } from 'state/types';

export const LOCATION_CHANGE = 'router/LOCATION_CHANGE';

export const locationChange = (location: Location): Action => ({
  type: LOCATION_CHANGE,
  payload: location,
});

export const CALL_HISTORY_METHOD = 'router/CALL_HISTORY_METHOD';

const updateLocation = method => (...args: any[]): Action => ({
  type: CALL_HISTORY_METHOD,
  payload: { method, args },
});

export const push = updateLocation('push');
export const replace = updateLocation('replace');
export const go = updateLocation('go');
export const goBack = updateLocation('goBack');
export const goForward = updateLocation('goForward');

export const routerActions = {
  push,
  replace,
  go,
  goBack,
  goForward,
};
