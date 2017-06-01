/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';
import Root from 'containers/Root';
import Router from 'containers/ConnectedRouter';
import configureStore from 'client/configureStore';
import rootSaga from 'sagas';

const stateElement = document.querySelector('#state');

if (!stateElement) {
  throw new DOMError("#state isn't a valid DOM element.");
}

if (!stateElement.innerText) {
  throw new DOMError("#state doesn't contain the applications tate.");
}

const initialState = JSON.parse(stateElement.innerText);
const mount = document.querySelector('#app');
const history = createHistory();
const store = configureStore(history, initialState);
store.runSaga(rootSaga);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router history={history}>
          <Component />
        </Router>
      </Provider>
    </AppContainer>,
    mount,
  );
};

render(Root);

if (module.hot) {
  module.hot.accept('../containers/Root', () => {
    // eslint-disable-next-line global-require
    const nextRoot = require('../containers/Root').default;
    render(nextRoot);
  });
}
