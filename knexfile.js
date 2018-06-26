module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///8080'
  },

  production: {
    client: 'postgresql',
    connection: ''
  }

};
