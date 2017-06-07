/* @flow */

import type { Middleware } from 'koa';

declare module 'koa-compress' {
  declare type koa$compress$Options = {
    filter?: (contentType: string) => boolean,
    threshold?: number,
    flush?: Function,
  };

  declare function koa$compress(options?: koa$compress$Options): Middleware;

  declare module.exports: koa$compress;
}
