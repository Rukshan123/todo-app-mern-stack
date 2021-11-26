import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import MainScreen from '../components/MainScreen/MainScreen'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Todos() {
  const [todos, setTodos] = useState([])

  const deleteTodo = (id) => {
    if (window.confirm('Are you sure...?')) {
    }
  }

  const fetchTodos = async () => {
    const { data } = await axios.get('/api/todos')
    setTodos(data)
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div>
      <MainScreen title='Welcome'>
        <Link to='createtodo'>
          <Button style={{ marginLeft: 10, marginBottom: 8 }} size='md'>
            Create New Todo
          </Button>
        </Link>

        {todos.map((todo) => (
          <Card key={todo._id} style={{ margin: 10 }}>
            <Card.Header style={{ display: 'flex' }}>
              <span
                style={{
                  color: 'black',
                  textDecoration: 'none',
                  flex: 1,
                  cursor: 'pointer',
                  alignSelf: 'center',
                  fontSize: 18,
                }}
              >
                {todo.title}
              </span>

              <span
                style={{
                  color: 'black',
                  textDecoration: 'none',
                  flex: 1,
                  cursor: 'pointer',
                  alignSelf: 'center',
                  fontSize: 18,
                }}
              >
                {todo.state}
              </span>

              <span
                style={{
                  color: 'black',
                  textDecoration: 'none',
                  flex: 1,
                  cursor: 'pointer',
                  alignSelf: 'center',
                  fontSize: 18,
                }}
              >
                {`Due Date ${todo.endDate}`}
              </span>

              <div>
                <Button href={`/todo/${todo._id}`}>Edit</Button>
                <Button
                  variant='danger'
                  className='mx-2'
                  onClick={() => deleteTodo(todo._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
          </Card>
        ))}
      </MainScreen>
    </div>
  )
}
