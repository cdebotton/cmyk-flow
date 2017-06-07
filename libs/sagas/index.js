/* @flow */

import { all, call } from 'redux-saga/effects';
import login from 'sagas/login';
import logout from 'sagas/logout';
import type { IOEffect } from 'redux-saga/effects';

function* rootSaga(): Generator<IOEffect, void, string> {
  yield all([call(login), call(logout)]);
}

export default rootSaga;
