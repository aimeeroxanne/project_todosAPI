module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/todosAPI'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/todosAPI'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
