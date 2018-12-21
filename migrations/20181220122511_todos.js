exports.up = function(knex, Promise) {
  return knex.schema.createTable('todos', table => {
    table.increments()
    table.string('task').notNullable().defaultsTo('')
    table.integer('priority').notNullable()
    table.date('due')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todos')
};
