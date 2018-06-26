module.exports.up = (knex, Promise) => {
  return knex.schema.createTable('user', (table) => {
    table.increments().primary();
    table.text('username');
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('user');
};
