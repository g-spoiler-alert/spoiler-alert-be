const database = require('./connection')

module.exports = {
  readUsers() {
    return database('user')
  },
  readItem() {
    return database('item')
  },
  createItem(item) {
    return database('item').select()
      .insert(item)
      .returning('*')
      .then(record => record[0])
  },
  createUser(user) {
    return database('user')
      .insert(user, '*')
  }
}