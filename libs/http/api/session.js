/* @flow */

import Router from 'koa-router';
import Auth from 'http/services/Auth';

const router = new Router();

router.post('/api/login', async (ctx) => {
  const { username, password } = ctx.request.body;

  try {
    const token = await Auth.login({ username, password });

    ctx.body = { token };
  } catch (err) {
    ctx.status = err.status;
    ctx.body = { error: err.message };
  }
});

export default router;
