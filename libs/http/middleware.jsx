/* @flow */

import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import Router from 'react-router/StaticRouter';
import Html from 'components/pages/Html';
import Root from 'containers/Root';
import configureStore from 'http/configureStore';

import type { Context } from 'koa';

type RouterContext = {
  url?: string,
  status?: number,
};

export default () => (ctx: Context) => {
  const routerContext: RouterContext = {};
  const store = configureStore();

  const html = renderToString(
    <Provider store={store}>
      <Router context={routerContext} location={ctx.req.url}>
        <Root />
      </Router>
    </Provider>,
  );

  if (routerContext.url) {
    ctx.redirect(routerContext.url);
    return;
  }

  if (routerContext.status) {
    ctx.status = routerContext.status;
  }

  const markup = renderToStaticMarkup(<Html html={html} />);
  ctx.body = `<!doctype>${markup}`;
};
