/* @flow */

import { call, put, take, fork, cancelled, select } from 'redux-saga/effects';

import {
  LOGIN_REQUEST,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
} from 'state/session/actions';

import { push } from 'state/router/actions';
import Api from 'services/Api';
import Storage from 'services/Storage';
import type { IOEffect } from 'redux-saga/effects';
import type { State } from 'state/types';

function* logout(): Generator<IOEffect, void, *> {
  const token = yield select((state: State) => state.session.token);

  try {
    yield call(Api.logout, token);
    yield put(logoutSuccess());
    yield call(Storage.removeItem, 'token');
  } catch (err) {
    yield put(logoutFailure(err));
  }
}

export function* authorize(username: string, password: string): Generator<IOEffect, void, *> {
  try {
    const { token } = yield call(Api.authorize, username, password);

    yield put(loginSuccess(token));
    yield call(Storage.set, { token });
    yield put(push('/admin'));
  } catch (error) {
    yield put(loginFailure(error));
  } finally {
    if (yield cancelled()) {
      yield call(logout);
    }
  }
}

export default function* login(): Generator<IOEffect, void, *> {
  while (true) {
    const { payload: { username, password } } = yield take(LOGIN_REQUEST);
    yield fork(authorize, username, password);
  }
}
