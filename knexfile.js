module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres:///spoiler-alert-be'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}