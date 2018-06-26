
module.exports.up = (knex, Promise) => {
  return knex.schema.createTable('item', (table) => {
    table.increments().primary();
    table.integer('user_id').references('user.id').unsigned().onDelete('CASCADE');
    table.text('name');
    table.text('type');
    table.date('expDate');
  })
};

module.exports.down = (knex, Promise) => {
  return knex.scheme.dropTableIfExists('item');
};
