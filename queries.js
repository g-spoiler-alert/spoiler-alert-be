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
        .returning('*')
        .then(record => record[0])
  },
  matchUser(username){
    return database('user')
      .where('username', username)
  },
  updateItem(id, item){
    return database('item')
        .update(item)
        .where('id', id)
        .returning('*')
        .then(record => record[0])
},
  deleteItem(id){
    return database('item').delete().where('id', id)
  }
}