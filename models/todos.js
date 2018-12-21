const knex = require('../knex')

const getTodos = () => {
  return knex('todos')
}

module.exports = { getTodos } 