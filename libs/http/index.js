/* @flow */

import Koa from 'koa';
import middleware from 'http/middleware';

const app = new Koa();
const { PORT } = process.env;

if (!PORT) {
  throw new ReferenceError('process.env.PORT is undefined.');
}

app.use(middleware());

app.listen(PORT, (err: ?Error) => {
  if (err) {
    process.stderr.write(err.toString());
    return;
  }

  process.stdout.write(`Listening on port ${PORT}.`);
});
