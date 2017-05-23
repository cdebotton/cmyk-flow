/* @flow */

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'state';
import type { Store } from 'state/types';

const configureStore = (): Store & { runSaga: Function } => {
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));
  const store = createStore(rootReducer, enhancer);

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
