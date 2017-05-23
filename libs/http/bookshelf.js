/* @flow */

import bookshelf from 'bookshelf';
import knex from 'knex';
import config from '../../knexfile';

const orm = bookshelf(knex(config));

orm.plugin('visibility');

export default orm;
