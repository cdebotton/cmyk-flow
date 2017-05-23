exports.up = knex =>
  knex.schema.createTableIfNotExists('users', (t) => {
    t.increments();
    t.string('username').notNull();
    t.string('password').notNull();
    t.date('last_login');
    t.timestamps();
  });

exports.down = async knex => knex.schema.dropTableIfExists('users');
