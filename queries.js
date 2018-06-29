const database = require('./connection')

module.exports = {
  readUsers() {
    return database('user')
  },
  readItems() {
    return database('item')
  },
  readUserItems(id) {
    return database('item')
      .where("user_id", id)
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