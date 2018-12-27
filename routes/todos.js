const express = require('express')
const router = express.Router()
const ctrl = require('../controller/todos.js')

router.get('/', ctrl.getTodos)
// router.patch('/:id', ctrl.updateTodo)
router.delete('/:id', ctrl.deleteTodo)

module.exports = router