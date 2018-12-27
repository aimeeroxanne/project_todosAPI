const model = require('../models/todos')

const getTodos = (req, res, next) => {
  model.getTodos()
    .then(result => {
      res.send(result)
    })
}

const deleteTodo = (req, res, next) => {
  const userId = req.params.id
  model.deleteTodo(userId)
    .then(result => {
      if(result){
        res.send({ message: 'Todo successfuly deleted.'})
      } else {
        res.send({ message: 'A todo with that id does not exist.' })
      }
      
    })
}

module.exports = { getTodos, deleteTodo }