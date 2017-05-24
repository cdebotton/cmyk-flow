/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';
import Root from 'containers/Root';
import Router from 'containers/ConnectedRouter';
import configureStore from 'client/configureStore';
import rootSaga from 'state/sagas';

const mount = document.querySelector('#app');
const history = createHistory();
const store = configureStore(history);
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
