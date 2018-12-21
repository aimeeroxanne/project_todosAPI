const express = require('express')
const app = express()
const port = process.env.PORT || 8000
bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv').config()

app.disable('x-powered-by')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(cors())

const todoRoutes = require('./routes/todos.js')
app.use('/', todoRoutes)

const listener = () => console.log(`Listening on port ${port}!`)

app.listen(port, listener)

module.exports = app