/* @flow */

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'state';
import routerMiddleware from 'state/router/middleware';
import client from 'client/apollo';
import type { RouterHistory } from 'react-router';
import type { Store, State } from 'state/types';

const configureStore = (
  history: RouterHistory,
  initialState: State,
): Store & { runSaga: Function } => {
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = composeWithDevTools(
    applyMiddleware(sagaMiddleware, client.middleware(), routerMiddleware(history)),
  );
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../state', () => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require('../state').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return {
    ...store,
    runSaga: sagaMiddleware.run,
  };
};

export default configureStore;
