
module.exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(() => {
      // Inserts seed entries
      return knex('user').insert([
        { id: 1, username: 'Keith' },
        { id: 2, username: 'Kaitlin' },
        { id: 3, username: 'JR' }
      ])
    .then(() => knex.raw('ALTER SEQUENCE user_id_seq RESTART WITH 4;'))
    })
}
