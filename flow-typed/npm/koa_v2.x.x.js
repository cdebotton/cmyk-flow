/* @flow */

declare module 'koa' {
  declare class Server extends net$Server {
    listen(port: number, hostname?: string, backlog?: number, callback?: Function): Server,
    listen(path: string, callback?: Function): Server,
    listen(handle: Object, callback?: Function): Server,
    close(callback?: Function): Server,
    maxHeadersCount: number,
    setTimeout(msecs: number, callback: Function): Server,
    timeout: number,
  }
  declare type ServerType = Server;

  declare type JSON = string | number | boolean | null | JSONObject | JSONArray;
  declare type JSONObject = { [key: string]: JSON };
  declare type JSONArray = Array<JSON>;

  declare type SimpleHeader = {
    'set-cookie'?: Array<string>,
    [key: string]: string,
  };

  declare type RequestJSON = {
    'method': string,
    'url': string,
    'header': SimpleHeader,
  };
  declare type RequestInspect = void | RequestJSON;
  declare type Request = {
    app: Application,
    req: http$IncomingMessage,
    res: http$ServerResponse,
    ctx: Context,
    response: Response,

    fresh: boolean,
    header: SimpleHeader,
    headers: SimpleHeader,
    host: string,
    hostname: string,
    href: string,
    idempotent: boolean,
    ip: string,
    ips: string[],
    method: string,
    origin: string,
    originalUrl: string,
    path: string,
    protocol: string,
    query: { [key: string]: string },
    querystring: string,
    search: string,
    secure: boolean,
    socket: net$Socket,
    stale: boolean,
    subdomains: string[],
    type: string,
    url: string,

    charset: string | void,
    length: number | void,

    accepts: ((args: string[]) => string | false) &
      ((arg: string, ...args: string[]) => string | false) &
      (() => string[]),

    acceptsCharsets: ((args: string[]) => buffer$Encoding | false) &
      ((arg: string, ...args: string[]) => buffer$Encoding | false) &
      (() => string[]),

    acceptsEncodings: ((args: string[]) => string | false) &
      ((arg: string, ...args: string[]) => string | false) &
      (() => string[]),

    acceptsLanguages: ((args: string[]) => string | false) &
      ((arg: string, ...args: string[]) => string | false) &
      (() => string[]),

    get: (field: string) => string,

    is: ((args: string[]) => null | false | string) &
      ((arg: string, ...args: string[]) => null | false | string) &
      (() => string),

    toJSON: () => RequestJSON,
    inspect: () => RequestInspect,

    [key: string]: mixed,
  };

  declare type ResponseJSON = {
    'status': mixed,
    'message': mixed,
    'header': mixed,
  };
  declare type ResponseInspect = {
    'status': mixed,
    'message': mixed,
    'header': mixed,
    'body': mixed,
  };
  declare type Response = {
    app: Application,
    req: http$IncomingMessage,
    res: http$ServerResponse,
    ctx: Context,
    request: Request,

    body: string | Buffer | stream$Stream | Object | null,
    etag: string,
    header: SimpleHeader,
    headers: SimpleHeader,
    headerSent: boolean,

    lastModified: Date,
    message: string,
    socket: net$Socket,
    status: number,
    type: string,
    writable: boolean,

    length: number | void,

    append: (field: string, val: string | string[]) => void,
    attachment: (filename?: string) => void,
    get: (field: string) => string,

    is: ((arg: string[]) => false | string) &
      ((arg: string, ...args: string[]) => false | string) &
      (() => string),
    redirect: (url: string, alt?: string) => void,
    remove: (field: string) => void,

    set: ((field: string, val: string | string[]) => void) &
      ((field: { [key: string]: string | string[] }) => void),

    vary: (field: string) => void,

    toJSON(): ResponseJSON,
    inspect(): ResponseInspect,

    [key: string]: mixed,
  };

  declare type ContextJSON = {
    request: RequestJSON,
    response: ResponseJSON,
    app: ApplicationJSON,
    originalUrl: string,
    req: '<original node req>',
    res: '<original node res>',
    socket: '<original node socket>',
  };

  declare type CookiesSetOptions = {
    maxAge: number,
    expires: Date,
    path: string,
    domain: string,
    secure: boolean,
    httpOnly: boolean,

    signed: boolean,
    overwrite: boolean,
  };
  declare type Cookies = {
    get: (name: string, options: { signed: boolean }) => string | void,
    set: ((name: string, value: string, options?: CookiesSetOptions) => Context) &
      ((name: string) => Context),
  };

  declare type Context = {
    accept: $PropertyType<Request, 'accept'>,
    app: Application,
    cookies: Cookies,
    name?: string,
    originalUrl: string,
    req: http$IncomingMessage,
    request: Request,
    res: http$ServerResponse,
    respond?: boolean,
    response: Response,
    state: Object,

    assert: (test: mixed, status: number, message?: string, opts?: mixed) => void,

    onerror: (err?: mixed) => void,

    throw: ((
      statusOrErr: string | number | Error,
      errOrStatus?: string | number | Error,
      opts?: Object,
    ) => void) &
      ((statusOrErr: string | number | Error, opts?: Object) => void),
    toJSON(): ContextJSON,
    inspect(): ContextJSON,

    attachment: $PropertyType<Response, 'attachment'>,
    redirect: $PropertyType<Response, 'redirect'>,
    remove: $PropertyType<Response, 'remove'>,
    vary: $PropertyType<Response, 'vary'>,
    set: $PropertyType<Response, 'set'>,
    append: $PropertyType<Response, 'append'>,
    flushHeaders: $PropertyType<Response, 'flushHeaders'>,
    status: $PropertyType<Response, 'status'>,
    message: $PropertyType<Response, 'message'>,
    body: $PropertyType<Response, 'body'>,
    length: $PropertyType<Response, 'length'>,
    type: $PropertyType<Response, 'type'>,
    lastModified: $PropertyType<Response, 'lastModified'>,
    etag: $PropertyType<Response, 'etag'>,
    headerSent: $PropertyType<Response, 'headerSent'>,
    writable: $PropertyType<Response, 'writable'>,

    acceptsLanguages: $PropertyType<Request, 'acceptsLanguages'>,
    acceptsEncodings: $PropertyType<Request, 'acceptsEncodings'>,
    acceptsCharsets: $PropertyType<Request, 'acceptsCharsets'>,
    accepts: $PropertyType<Request, 'accepts'>,
    get: $PropertyType<Request, 'get'>,
    is: $PropertyType<Request, 'is'>,
    querystring: $PropertyType<Request, 'querystring'>,
    idempotent: $PropertyType<Request, 'idempotent'>,
    socket: $PropertyType<Request, 'socket'>,
    search: $PropertyType<Request, 'search'>,
    method: $PropertyType<Request, 'method'>,
    query: $PropertyType<Request, 'query'>,
    path: $PropertyType<Request, 'path'>,
    url: $PropertyType<Request, 'url'>,
    origin: $PropertyType<Request, 'origin'>,
    href: $PropertyType<Request, 'href'>,
    subdomains: $PropertyType<Request, 'subdomains'>,
    protocol: $PropertyType<Request, 'protocol'>,
    host: $PropertyType<Request, 'host'>,
    hostname: $PropertyType<Request, 'hostname'>,
    header: $PropertyType<Request, 'header'>,
    headers: $PropertyType<Request, 'headers'>,
    secure: $PropertyType<Request, 'secure'>,
    stale: $PropertyType<Request, 'stale'>,
    fresh: $PropertyType<Request, 'fresh'>,
    ips: $PropertyType<Request, 'ips'>,
    ip: $PropertyType<Request, 'ip'>,

    [key: string]: mixed,
  };

  declare type Middleware = (ctx: Context, next: () => Promise<void>) => Promise<void> | void;
  declare type ApplicationJSON = {
    'subdomainOffset': mixed,
    'proxy': mixed,
    'env': string,
  };
  declare class Application extends events$EventEmitter {
    context: Context,

    callback: () => (req: http$IncomingMessage, res: http$ServerResponse) => void,
    env: string,
    keys?: Array<string> | Object,
    middleware: Array<Middleware>,
    name?: string,
    proxy: boolean,
    request: Request,
    response: Response,
    server: Server,
    subdomainOffset: number,

    listen: $PropertyType<Server, 'listen'>,
    toJSON(): ApplicationJSON,
    inspect(): ApplicationJSON,
    use(fn: Middleware): this,
  }

  declare module.exports: Class<Application>;
}
