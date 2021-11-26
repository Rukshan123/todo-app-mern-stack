const express = require('express')
const data = require('./data.js')

const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Server is ready')
})

app.get('/api/todos', (req, res) => {
  res.json(data)
})

app.get('/api/todos/:id', (req, res) => {
  const todo = data.find((id) => id._id === req.params.id)
  res.send(todo)
})

app.listen(port, console.log(`server started on PORT ${port}`))
