const database = require('./connection')

module.exports = {
  readUsers() {
    return database('user')
  },
  readItem() {
    return database('item')
  }
}