module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///8080'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
