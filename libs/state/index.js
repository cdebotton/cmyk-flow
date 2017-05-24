/* @flow */

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import session from 'state/session';
import router from 'state/router';

const rootReducer = combineReducers({
  form,
  session,
  router,
});

export default rootReducer;
