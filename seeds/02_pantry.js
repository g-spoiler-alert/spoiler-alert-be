
module.exports.seed = (knex, Promise) => {
  return knex('item').del()
    .then(() => {
      return knex('item').insert([
        {
          id: 1,
          user_id: 1,
          name: 'Turkey',
          type: 'Meat',
          image: '../assets/Meat.jpg',
          expDate: '2018-07-04'
        },
        {
          id: 2,
          user_id: 2,
          name: 'Tomato',
          type: 'Produce',
          image: '../assets/Produce.jpg',
          expDate: '2018-07-05'
        },
        {
          id: 3,
          user_id: 3,
          name: 'Ham',
          type: 'Meat',
          image: '../assets/Meat.jpg',
          expDate: '2018-07-06'
        },
        {
          id: 4,
          user_id: 1,
          name: 'Steak',
          type: 'Meat',
          image: '../assets/meat.jpg',
          expDate: '2018-07-07'
        },
        {
          id: 5,
          user_id: 2,
          name: 'Frozen Peas',
          type: 'Produce',
          image: '../assets/Produce.jpg',
          expDate: '2018-07-08'
        },
        {
          id: 6,
          user_id: 3,
          name: 'Cheese',
          type: 'Dairy',
          image: '../assets/Dairy.jpg',
          expDate: '2018-07-09'
        },
        {
          id: 7,
          user_id: 1,
          name: 'Crackers',
          type: 'Grain',
          image: '../assets/Grain.jpg',
          expDate: '2018-07-10'
        },
        {
          id: 8,
          user_id: 2,
          name: 'Pizza',
          type: 'Other',
          image: '../assets/Other.jpg',
          expDate: '2018-07-11'
        }
      ])
    .then(() => knex.raw ('ALTER SEQUENCE item_id_seq RESTART WITH 9;'))
    })
}