/* @flow */

import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
  renderToStringWithData,
} from 'react-apollo';
import Router from 'react-router/StaticRouter';
import Html from 'components/pages/Html';
import Root from 'containers/Root';
import configureStore from 'http/configureStore';
import rootSaga from 'sagas';

import type { Context } from 'koa';

type RouterContext = {
  url?: string,
  status?: number,
};

export default () => async (ctx: Context) => {
  const routerContext: RouterContext = {};
  const store = configureStore(ctx.session);
  const client = new ApolloClient({
    ssrMode: true,
    networkInterface: createNetworkInterface({
      uri: 'http://localhost:3000/graphql',
      opts: {
        credentials: 'same-origin',
        headers: ctx.req.headers,
      },
    }),
  });

  store.runSaga(rootSaga);

  const html = await renderToStringWithData(
    <ApolloProvider store={store} client={client}>
      <Router context={routerContext} location={ctx.req.url}>
        <Root />
      </Router>
    </ApolloProvider>,
  );

  if (routerContext.url) {
    ctx.redirect(routerContext.url);
    return;
  }

  if (routerContext.status) {
    ctx.status = routerContext.status;
  }

  const state = {
    ...store.getState(),
    apollo: client.getInitialState(),
  };

  const markup = renderToStaticMarkup(<Html state={state} html={html} />);
  ctx.body = `<!doctype>${markup}`;
};
