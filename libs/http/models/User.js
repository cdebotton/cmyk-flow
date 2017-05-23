/* @flow */

import bookshelf from 'http/bookshelf';

const User = bookshelf.Model.extend({
  tableName: 'users',
  hidden: ['password'],
});

export default User;
