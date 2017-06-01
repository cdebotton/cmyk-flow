/* @flow */

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'state';
import type { Store } from 'state/types';

type Session = {
  token: ?string,
};

const configureStore = (session: Session): Store & { runSaga: Function } => {
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = compose(applyMiddleware(sagaMiddleware));
  const initialState = {
    session: {
      token: session.token,
    },
  };
  const store = createStore(rootReducer, initialState, enhancer);

  return {
    ...store,
    runSaga: sagaMiddleware.run,
  };
};

export default configureStore;
