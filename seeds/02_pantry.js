
module.exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('pantry').del()
    .then(() => {
      // Inserts seed entries
      return knex('pantry').insert([
        {
          id: 1,
          user_id: 1,
          name: 'Turkey',
          type: 'meat',
          expDate: '2018-07-04'
        },
        {
          id: 2,
          user_id: 2,
          name: 'Tomato',
          type: 'produce',
          expDate: '2018-07-05'
        },
        {
          id: 3,
          user_id: 3,
          name: 'Turkey',
            type: 'meat',
            expDate: '2018-07-06'
        },
        {
          id: 4,
          user_id: 1,
          name: 'Turkey',
          type: 'meat',
          expDate: '2018-07-07'
        },
        {
          id: 5,
          user_id: 2,
          name: 'Frozen Peas',
          type: 'produce',
          expDate: '2018-07-08'
        },
        {
          id: 6,
          user_id: 3,
          name: 'Cheese',
          type: 'dairy',
          expDate: '2018-07-09'
        },
        {
          id: 7,
          user_id: 1,
          name: 'Crackers',
          type: 'grain',
          expDate: '2018-07-10'
        }
      ])
    .then(() => knex.raw ('ALTER SEQUENCE fed_id_seq RESTART WITH 8;'));
    });
};
