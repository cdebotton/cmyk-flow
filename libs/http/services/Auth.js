/* @flow */

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from 'http/models/User';
import { InvalidLoginError } from 'services/errors';

type Credentials = {
  username: string,
  password: string,
};

const validate = async (user: User, password: string): Promise<boolean> => {
  const isValid = await bcrypt.compare(password, user.get('password'));

  if (!isValid) {
    throw new InvalidLoginError();
  }

  return true;
};

const login = async ({ username, password }: Credentials): Promise<string> => {
  const user = await User.where({ username }).fetch();

  if (!user) {
    throw new InvalidLoginError();
  }

  if (!await validate(user, password)) {
    if (!user) {
      throw new InvalidLoginError();
    }
  }

  const token = jwt.sign({ data: user.toJSON() }, 'secret', { expiresIn: '30d' });

  return token;
};

export default {
  validate,
  login,
};
