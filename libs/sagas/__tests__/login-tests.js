/* @flow */

import test from 'ava';
import fetchMock from 'fetch-mock';
import { createMockTask, cloneableGenerator } from 'redux-saga/utils';
import { take, call, fork, cancel } from 'redux-saga/effects';
import login, { authorize } from 'sagas/login';
import { LOGIN_REQUEST, LOGOUT_REQUEST, LOGIN_FAILURE, logoutRequest } from 'state/session/actions';
import Storage from 'services/Storage';

const creds = { payload: { username: 'foo', password: 'bar' } };

test.beforeEach(() => {
  fetchMock.post('/api/login', {
    token: 'baz',
  });
});

test.afterEach(() => {
  fetchMock.restore();
});

const generator = cloneableGenerator(login)();
test('it should TAKE a LOGIN_REQUEST action first', (t) => {
  t.deepEqual(generator.next().value, take(LOGIN_REQUEST));
});

test('it should FORK a request to authorize the credentials next', (t) => {
  t.deepEqual(
    generator.next(creds).value,
    fork(authorize, creds.payload.username, creds.payload.password),
  );
});

test('it should CANCEL the login task if it TAKES a LOGOUT action', (t) => {
  const task = createMockTask();
  t.deepEqual(generator.next(task).value, take([LOGOUT_REQUEST, LOGIN_FAILURE]));
  t.deepEqual(generator.next(logoutRequest()).value, cancel(task));
});

test('it should CALL Api.removeItem on `token`', (t) => {
  t.deepEqual(generator.next().value, call(Storage.removeItem, 'token'));
});
