/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { ApolloProvider } from 'react-apollo';
import createHistory from 'history/createBrowserHistory';
import Root from 'containers/Root';
import Router from 'containers/ConnectedRouter';
import configureStore from 'client/configureStore';
import rootSaga from 'sagas';
import client from 'client/apollo';

const stateElement = document.querySelector('#state');

if (!stateElement) {
  throw new DOMError();
}

if (!stateElement.innerText) {
  throw new DOMError();
}

const initialState = JSON.parse(stateElement.innerText);
const mount = document.querySelector('#app');
const history = createHistory();
const store = configureStore(history, initialState);

store.runSaga(rootSaga);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <ApolloProvider store={store} client={client}>
        <Router history={history}>
          <Component />
        </Router>
      </ApolloProvider>
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
