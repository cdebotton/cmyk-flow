exports.up = knex =>
  knex.schema.createTableIfNotExists('profiles', (t) => {
    t.increments();
    t.integer('user_id').unsigned().notNull();
    t.string('first_name');
    t.string('last_name');
    t.string('email_address').notNull();
    t.date('date_of_birth').notNull();
    t.foreign('user_id').references('users.id');
    t.timestamps();
  });

exports.down = async knex => knex.schema.dropTableIfExists('profiles');
