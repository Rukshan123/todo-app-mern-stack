const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    endDate: { type: String },
  },
  {
    // while mongoose create todo in the database , you will have a time stamp for creating a record and last update a record
    timestamps: true,
  }
)

const Todos = mongoose.model('todo', todoSchema)
module.exports = Todos
