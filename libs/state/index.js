/* @flow */

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import session from 'state/session';

const rootReducer = combineReducers({
  form,
  session,
});

export default rootReducer;
