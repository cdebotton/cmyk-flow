/* @flow */

import { createStore, applyMiddleware, compose } from 'redux';
import { initialState as initialRouterState } from 'state/router';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'state';
import client from 'client/apollo';
import type { Store } from 'state/types';

type Session = {
  token: ?string,
};

const configureStore = (session: Session): Store & { runSaga: Function } => {
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = compose(applyMiddleware(sagaMiddleware, client.middleware()));
  const initialState = {
    session: {
      token: session.token,
      error: null,
    },
    router: initialRouterState,
  };
  const store = createStore(rootReducer, initialState, enhancer);

  return {
    ...store,
    runSaga: sagaMiddleware.run,
  };
};

export default configureStore;
