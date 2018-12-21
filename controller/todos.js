const model = require('../models/todos')

const getTodos = (req, res, next) => {
  model.getTodos()
    .then(result => {
      res.send(result)
    })
}

module.exports = { getTodos }