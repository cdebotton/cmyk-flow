/* @flow */

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'state';
import type { Store } from 'state/types';

const configureStore = (): Store => {
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = compose(applyMiddleware(sagaMiddleware));
  const store = createStore(rootReducer, enhancer);

  return store;
};

export default configureStore;
