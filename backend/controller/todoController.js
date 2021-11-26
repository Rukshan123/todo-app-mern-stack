const Todos = require('../models/todoModel')
const asyncHandler = require('express-async-handler')

const getTodos = asyncHandler(async (req, res) => {
  const todo = await Todos.find()
  res.json(todo)
})

const createTodo = asyncHandler(async (req, res) => {
  const { title, endDate } = req.body
  if (!title || !endDate) {
    res.status(400)
    throw new Error('Fill all fields')
  } else {
    const todo = new Todos({ title, endDate })
    const createdTodo = await todo.save()
    res.status(201).json(createdTodo)
  }
})

module.exports = { getTodos, createTodo }
