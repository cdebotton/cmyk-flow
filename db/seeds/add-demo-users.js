const bcrypt = require('bcrypt');

exports.seed = async (knex) => {
  await knex('users').del();
  const salt = await bcrypt.genSalt();
  const password = await bcrypt.hash('password', salt);

  return knex('users').insert([
    { id: 1, username: 'admin', password, created_at: new Date() },
    { id: 2, username: 'editor', password, created_at: new Date() },
    { id: 3, username: 'user', password, created_at: new Date() },
    { id: 4, username: 'demo', password, created_at: new Date() },
  ]);
};
