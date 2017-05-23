/* @flow */

export class HttpError extends Error {
  status: number;
  constructor(error: string, status: number = 400) {
    super(error);
    this.status = status;
  }
}

export class InvalidLoginError extends HttpError {
  constructor() {
    super('Invalid username and/or password', 401);
  }
}
