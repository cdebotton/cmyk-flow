/* @flow */

import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { ApolloProvider } from 'react-apollo';
import Router from 'react-router/StaticRouter';
import Html from 'components/pages/Html';
import Root from 'containers/Root';
import configureStore from 'http/configureStore';
import rootSaga from 'sagas';
import client from 'client/apollo';

import type { Context } from 'koa';

type RouterContext = {
  url?: string,
  status?: number,
};

export default () => (ctx: Context) => {
  const routerContext: RouterContext = {};
  const store = configureStore(ctx.session);
  store.runSaga(rootSaga);

  const html = renderToString(
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

  const markup = renderToStaticMarkup(<Html state={store.getState()} html={html} />);
  ctx.body = `<!doctype>${markup}`;
};
