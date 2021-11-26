const express = require('express')
const { getTodos, createTodo } = require('../controller/todoController')
const router = express.Router()

router.route('/').get(getTodos)
router.route('/create').post(createTodo)
// router.route('/:id').get().put().delete()

module.exports = router
