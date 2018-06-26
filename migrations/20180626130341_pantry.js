
module.exports.up = (knex, Promise) => {
  return knex.schema.createTable('item', (item) => {
    item.increments().primary();
    item.integer('user_id').references('user.id').unsigned().onDelete('CASCADE');
    item.text('name');
    item.text('type');
    item.date('expDate');
  })
};

module.exports.down = (knex, Promise) => {
  return knex.scheme.dropTableIfExists('item');
};
