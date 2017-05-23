/* @flow */

import type { Middleware } from 'koa';

declare module 'koa-router' {
  declare type MethodOptions = {
    throw: boolean,
    notImplemented: Function,
    methodNotAllowed: Function,
  };

  declare type URLParam = string | number | { [key: string]: URLParam };

  declare class Router {
    static url(path: string, params: URLParam): string,
    get(path: string, ...middlewares: Middleware[]): this,
    put(path: string, ...middlewares: Middleware[]): this,
    post(path: string, ...middlewares: Middleware[]): this,
    patch(path: string, ...middlewares: Middleware[]): this,
    delete(path: string, ...middlewares: Middleware[]): this,
    param(param: string, middleware: Middleware): this,
    use(path?: string, ...middleware: Middleware[]): this,
    routes(): Middleware,
    allowedMethods(options?: MethodOptions): Middleware,
    redirect(source: string, destination: string, code: number): this,
    route(name: string): string | false,
    url(name: string, params: URLParam): string | Error,
  }

  declare module.exports: Class<Router>;
}
