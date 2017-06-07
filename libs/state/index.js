/* @flow */

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import session from 'state/session';
import router from 'state/router';
import client from 'client/apollo';

const rootReducer = combineReducers({
  form,
  session,
  router,
  apollo: client.reducer(),
});

export default rootReducer;
