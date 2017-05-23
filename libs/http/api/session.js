/* @flow */

import Router from 'koa-router';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from 'http/models/User';
import { InvalidLoginError } from 'services/errors';

const router = new Router();

router.post('/api/login', async (ctx) => {
  const { username, password } = ctx.request.body;

  try {
    const user = await User.where({ username }).fetch();

    if (!user) {
      throw new InvalidLoginError();
    }

    const isValid = await bcrypt.compare(password, user.get('password'));

    if (!isValid) {
      throw new InvalidLoginError();
    }

    const token = jwt.sign({ data: user.toJSON() }, 'secret', { expiresIn: '30d' });

    ctx.body = { token };
  } catch (err) {
    ctx.status = err.status;
    ctx.body = { error: err.message };
  }
});

export default router;
