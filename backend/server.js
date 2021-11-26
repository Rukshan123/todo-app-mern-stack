const express = require('express')
const connectDB = require('./db/db.js')
const todoRoutes = require('./routes/todoRoutes')

require('dotenv').config()
const app = express()
const port = 5000
connectDB()

app.get('/', (req, res) => {
  res.send('Server is ready')
})

app.use(express.json()) // to accept json data

app.use('/api/todos', todoRoutes)

app.listen(port, console.log(`server started on PORT ${port}`))
