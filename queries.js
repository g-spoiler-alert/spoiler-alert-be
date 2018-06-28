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
        .insert(item)
        .returning('*')
        .then(record => record[0])
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