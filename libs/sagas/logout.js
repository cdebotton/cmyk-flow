/* @flow */

import { take, fork, call, put } from 'redux-saga/effects';
import { LOGOUT_REQUEST, logoutSuccess, logoutFailure } from 'state/session/actions';
import Api from 'services/Api';
import Storage from 'services/Storage';
import type { IOEffect } from 'redux-saga/effects';

function* logout(): Generator<IOEffect, void, string> {
  try {
    yield call(Api.logout);
    yield call(Storage.removeItem, 'token');
    yield put(logoutSuccess());
  } catch (err) {
    yield put(logoutFailure(err));
  }
}

export default function* root(): Generator<IOEffect, void, string> {
  while (true) {
    yield take(LOGOUT_REQUEST);
    yield fork(logout);
  }
}
