
module.exports.up = (knex, Promise) => {
  return knex.schema.createTable('user', (user) => {
    user.increments().primary();
    user.text('username');
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('user');
};
