/* @flow */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOGIN_REQUEST, loginSuccess, loginFailure } from 'state/session/actions';
import Api from 'services/Api';
import type { IOEffect } from 'redux-saga/effects';
import type { Action } from 'state/types';

export function* loginRequested(action: Action): Generator<IOEffect, void, *> {
  if (action.type !== LOGIN_REQUEST) {
    throw new TypeError(`Invalid action. Expected ${LOGIN_REQUEST}, not ${action.type}.`);
  }

  const { username, password } = action.payload;

  try {
    const { token } = yield call(Api.login, username, password);
    yield put(loginSuccess(token));
  } catch (err) {
    yield put(loginFailure(err.message));
  }
}

export default function* sessionSaga(): Generator<IOEffect, void, *> {
  yield takeLatest(LOGIN_REQUEST, loginRequested);
}
