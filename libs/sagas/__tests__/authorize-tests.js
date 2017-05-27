/* @flow */

import test from 'ava';
import fetchMock from 'fetch-mock';
import { call, put } from 'redux-saga/effects';
import { authorize } from 'sagas/login';
import Api from 'services/Api';
import { loginSuccess } from 'state/session/actions';
import { push } from 'state/router/actions';

test.beforeEach(() => {
  fetchMock.post('/api/login', {
    token: 'baz',
  });
});

test.afterEach(() => {
  fetchMock.restore();
});

const USERNAME = 'foo';
const PASSWORD = 'bar';
const TOKEN = 'baz';

const gen = authorize(USERNAME, PASSWORD);

test('it should make a CALL to Api.authorize with initially passed credentials', (t) => {
  t.deepEqual(gen.next().value, call(Api.authorize, USERNAME, PASSWORD));
});

test('it should then PUT loginSuccess with the retreived token', (t) => {
  t.deepEqual(gen.next({ token: TOKEN }).value, put(loginSuccess(TOKEN)));
});

test('it shouild CALL Api.storeData with the returned token', (t) => {
  t.deepEqual(gen.next(TOKEN).value, call(Api.storeData, { token: TOKEN }));
});

test('finally, it should push the router to redirect to `/admin`', (t) => {
  t.deepEqual(gen.next().value, put(push('/admin')));
});
