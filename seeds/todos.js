
exports.seed = function(knex, Promise) {
  return knex('todos').del()
    .then(function () {
      return knex('todos').insert([
        {id: 1, task: 'grocery store', priority: 4, due: '2018-12-30', completed: false},
        {id: 2, task: 'clean house', priority: 1, due: '2018-12-23', completed: false},
        {id: 3, task: 'make reindeer cookies', priority: 8, due: '2018-12-24', completed: false},
        {id: 4, task: 'trap Santa', priority: 10, due: '2018-12-25', completed: false},
        {id: 5, task: 'get an instapot', priority: 2, due: '2019-01-27', completed: false},
        {id: 6, task: 'water plants', priority: 2, due: '2018-12-21', completed: false},
        {id: 7, task: 'hug krampus', priority: 10, due: '2018-12-31', completed: false},
      ]);
    });
};
