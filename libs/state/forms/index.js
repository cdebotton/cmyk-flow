/* @flow */

import { combineReducers } from 'redux';
import login from 'state/forms/login';

const formsReducer = combineReducers({
  login,
});

export default formsReducer;
