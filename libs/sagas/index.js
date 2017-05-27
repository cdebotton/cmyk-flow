/* @flow */

import { all, call } from 'redux-saga/effects';
import login from 'sagas/login';
import type { IOEffect } from 'redux-saga/effects';

function* rootSaga(): Generator<IOEffect, void, string> {
  yield all([call(login)]);
}

export default rootSaga;
