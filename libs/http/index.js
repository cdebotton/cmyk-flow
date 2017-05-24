/* @flow */

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import compress from 'koa-compress';
import middleware from 'http/middleware';
import session from 'koa-session';
import sessionApi from 'http/api/session';

const app = new Koa();
const { PORT } = process.env;

if (!PORT) {
  throw new ReferenceError('process.env.PORT is undefined.');
}

app.keys = ['secret', 'keys'];
app.use(compress());
app.use(bodyParser());
app.use(session(app));
app.use(sessionApi.routes());
app.use(sessionApi.allowedMethods());
app.use(middleware());

app.listen(PORT, (err: ?Error) => {
  if (err) {
    process.stderr.write(err.toString());
    return;
  }

  process.stdout.write(`Listening on port ${PORT}.`);
});
