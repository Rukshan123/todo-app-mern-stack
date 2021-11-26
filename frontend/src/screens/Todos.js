import React from 'react'
import { Button, Card } from 'react-bootstrap'
import MainScreen from '../components/MainScreen/MainScreen'
import { Link } from 'react-router-dom'
import data from '../data/data'

export default function Todos() {
  const deleteTodo = (id) => {
    if (window.confirm('Are you sure...?')) {
    }
  }
  return (
    <div>
      <MainScreen title='Welcome'>
        <Link to='createtodo'>
          <Button style={{ marginLeft: 10, marginBottom: 8 }} size='md'>
            Create New Todo
          </Button>
        </Link>

        {data.map((todo) => (
          <Card>
            <Card.Header style={{ display: 'flex', padding: 10 }}>
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
