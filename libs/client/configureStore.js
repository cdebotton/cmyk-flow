/* @flow */

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'state';
import sessionSaga from 'state/session/sagas';
import type { Store } from 'state/types';

const configureStore = (): Store => {
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

  sagaMiddleware.run(sessionSaga);

  return store;
};

export default configureStore;
