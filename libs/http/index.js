/* @flow */

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import compress from 'koa-compress';
import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa';
import middleware from 'http/middleware';
import session from 'koa-session';
import sessionApi from 'http/api/session';
import Router from 'koa-router';
import schema from 'http/schema';

const app = new Koa();
const router = new Router();
const { PORT } = process.env;

if (!PORT) {
  throw new ReferenceError('process.env.PORT is undefined.');
}

router.post('/graphql', graphqlKoa({ schema }));
router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

app.keys = ['secret', 'keys'];
app.use(compress());
app.use(bodyParser());
app.use(session(app));
app.use(router.routes());
app.use(router.allowedMethods());
app.use(sessionApi.routes());
app.use(sessionApi.allowedMethods());
app.use(middleware());

app.listen(PORT, (err: ?Error) => {
  if (err) {
    process.stderr.write(err.toString());
    process.exit();
  }

  process.stdout.write(`Listening on port ${PORT}.`);
});
