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

const getTodoById = asyncHandler(async (req, res) => {
  const todo = await Todos.findById(req.params.id)

  if (todo) {
    res.json(todo)
  } else {
    res.status(404).json({ message: 'Todo not found' })
  }

  // res.json(todo)
})

const updateTodo = asyncHandler(async (req, res) => {
  const { title, endDate } = req.body

  const todo = await Todos.findById(req.params.id)

  if (todo) {
    todo.title = title
    todo.endDate = endDate

    const updateTodo = await todo.save()
    res.json(updateTodo)
  } else {
    res.status(404)
    throw new Error('Todo not found')
  }
})

const DeleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todos.findById(req.params.id)

  if (todo) {
    await todo.remove()
    res.json({ message: 'todo Removed' })
  } else {
    res.status(404)
    throw new Error('todo not Found')
  }
})

module.exports = { getTodos, createTodo, getTodoById, updateTodo, DeleteTodo }
