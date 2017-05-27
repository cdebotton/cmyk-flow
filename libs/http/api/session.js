/* @flow */

import Router from 'koa-router';
import Auth from 'http/services/Auth';

const router = new Router();

router.post('/api/login', async (ctx) => {
  if (ctx.session.token) {
    ctx.body = ctx.session.token;
    return;
  }

  const { username, password } = ctx.request.body;

  try {
    const token = await Auth.login({ username, password });

    ctx.session.token = token;

    ctx.body = { token };
  } catch (err) {
    ctx.status = err.status;
    ctx.body = { error: err.message };
  }
});

export default router;
