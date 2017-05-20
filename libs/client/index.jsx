/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Router from 'react-router-dom/BrowserRouter';
import { AppContainer } from 'react-hot-loader';
import Root from 'containers/Root';
import configureStore from 'client/configureStore';

const mount = document.querySelector('#app');
const store = configureStore();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router>
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
