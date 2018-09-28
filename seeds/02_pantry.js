
module.exports.seed = (knex, Promise) => {
  return knex('item').del()
    .then(() => {
      return knex('item').insert([
        {
          id: 1,
          user_id: 1,
          name: 'Turkey',
          type: 'Meat',
          imgUrl: 'http://gdurl.com/kiqv',
          expDate: '2018-07-04'
        },
        {
          id: 2,
          user_id: 2,
          name: 'Tomato',
          type: 'Produce',
          imgUrl: 'http://gdurl.com/d9iR',
          expDate: '2018-07-05'
        },
        {
          id: 3,
          user_id: 3,
          name: 'Ham',
          type: 'Meat',
          imgUrl: 'http://gdurl.com/kiqv',
          expDate: '2018-07-06'
        },
        {
          id: 4,
          user_id: 1,
          name: 'Steak',
          type: 'Meat',
          imgUrl: 'http://gdurl.com/kiqv',
          expDate: '2018-07-07'
        },
        {
          id: 5,
          user_id: 2,
          name: 'Frozen Peas',
          type: 'Produce',
          imgUrl: 'http://gdurl.com/d9iR',
          expDate: '2018-07-08'
        },
        {
          id: 6,
          user_id: 3,
          name: 'Cheese',
          type: 'Dairy',
          imgUrl: 'http://gdurl.com/MX62',
          expDate: '2018-07-09'
        },
        {
          id: 7,
          user_id: 1,
          name: 'Crackers',
          type: 'Grain',
          imgUrl: 'http://gdurl.com/0u50',
          expDate: '2018-07-10'
        },
        {
          id: 8,
          user_id: 2,
          name: 'Pizza',
          type: 'Other',
          imgUrl: 'http://gdurl.com/6adX',
          expDate: '2018-07-11'
        }
      ])
    .then(() => knex.raw ('ALTER SEQUENCE item_id_seq RESTART WITH 9;'))
    })
}