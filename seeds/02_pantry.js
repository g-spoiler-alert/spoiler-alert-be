
module.exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('item').del()
    .then(() => {
      // Inserts seed entries
      return knex('item').insert([
        {
          id: 1,
          user_id: 1,
          name: 'Turkey',
          type: 'Meat',
          expDate: '2018-07-04'
        },
        {
          id: 2,
          user_id: 2,
          name: 'Tomato',
          type: 'Produce',
          expDate: '2018-07-05'
        },
        {
          id: 3,
          user_id: 3,
          name: 'Ham',
          type: 'Meat',
          expDate: '2018-07-06'
        },
        {
          id: 4,
          user_id: 1,
          name: 'Steak',
          type: 'Meat',
          expDate: '2018-07-07'
        },
        {
          id: 5,
          user_id: 2,
          name: 'Frozen Peas',
          type: 'Produce',
          expDate: '2018-07-08'
        },
        {
          id: 6,
          user_id: 3,
          name: 'Cheese',
          type: 'Dairy',
          expDate: '2018-07-09'
        },
        {
          id: 7,
          user_id: 1,
          name: 'Crackers',
          type: 'Grain',
          expDate: '2018-07-10'
        },
        {
          id: 8,
          user_id: 2,
          name: 'Pizza',
          type: 'Other',
          expDate: '2018-07-11'
        }
      ])
    .then(() => knex.raw ('ALTER SEQUENCE item_id_seq RESTART WITH 9;'));
    });
};
