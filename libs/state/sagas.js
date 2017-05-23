/* @flow */

import { all, fork } from 'redux-saga/effects';
import sessionSaga from 'state/session/sagas';
import type { IOEffect } from 'redux-saga/effects';

function* rootSaga(): Generator<IOEffect, void, string> {
  yield all([fork(sessionSaga)]);
}

export default rootSaga;
