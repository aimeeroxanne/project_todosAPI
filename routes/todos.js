const express = require('express')
const router = express.Router()
const ctrl = require('../controller/todos.js')

router.get('/', ctrl.getTodos)

module.exports = router