const express = require('express')
const {
  getTodos,
  createTodo,
  getTodoById,
  updateTodo,
  DeleteTodo,
} = require('../controller/todoController')
const router = express.Router()

router.route('/').get(getTodos)
router.route('/create').post(createTodo)
router.route('/:id').get(getTodoById).put(updateTodo).delete(DeleteTodo)

module.exports = router
