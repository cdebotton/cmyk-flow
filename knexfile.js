/* @flow */

require('babel-register');
require('dotenv').config();

module.exports = {
  client: 'pg',
  connection: {
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    charset: 'utf8',
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: './db/migrations',
    tableName: 'cmyk_migrations',
  },
  seeds: {
    directory: './db/seeds',
  },
};
