/* @flow */

import type Koa from 'koa';

declare module 'koa-bodyparser' {
  declare type koa$bodyParser$Options = {
    enableTypes?: string[],
    encode?: string,
    formLimit?: string,
    jsonLimit?: string,
    textLimit?: string,
    strict?: boolean,
    detectJson?: (ctx: Koa.Context) => boolean,
    extendTypes?: { [key: string]: string[] },
    onerror?: (err: Error, ctx: Koa.Context) => void,
    disableBodyParser?: boolean,
  };

  declare function koa$bodyParser(options?: koa$bodyParser$Options): Koa.Middleware;

  declare module.exports: koa$bodyParser;
}
