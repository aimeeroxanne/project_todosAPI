const knex = require('../knex')

const getTodos = () => {
  return knex('todos')
}

const deleteTodo = (id) => {
  return knex('todos').where({ id: id }).del()
}

module.exports = { getTodos, deleteTodo } 