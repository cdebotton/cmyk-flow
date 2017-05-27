/* @flow */

import { call, put, take, fork, cancel, cancelled } from 'redux-saga/effects';
import {
  LOGIN_REQUEST,
  LOGOUT,
  LOGIN_FAILURE,
  loginSuccess,
  loginFailure,
} from 'state/session/actions';
import { push } from 'state/router/actions';
import Api from 'services/Api';
import type { IOEffect } from 'redux-saga/effects';
import type { Action } from 'state/types';

export function* authorize(username: string, password: string): Generator<IOEffect, void, *> {
  try {
    const { token } = yield call(Api.authorize, username, password);

    yield put(loginSuccess(token));
    yield call(Api.storeData, { token });
    yield put(push('/admin'));
  } catch (error) {
    yield put(loginFailure(error));
  } finally {
    if (yield cancelled()) {
      console.log('Cancelled!');
    }
  }
}

export default function* login(): Generator<IOEffect, void, *> {
  while (true) {
    const { payload: { username, password } } = yield take(LOGIN_REQUEST);
    const task = yield fork(authorize, username, password);
    const action = yield take([LOGOUT, LOGIN_FAILURE]);

    if (action.type === LOGOUT) {
      yield cancel(task);
    }

    yield call(Api.removeItem, 'token');
  }
}
