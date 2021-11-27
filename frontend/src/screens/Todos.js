import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import MainScreen from '../components/MainScreen/MainScreen'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodoAction, listTodos } from '../actions/todoActions'
import LoadingBox from '../components/Loading/LoadingBox'
import ErrorMessage from '../components/Error/ErrorMessage'
import { useNavigate } from 'react-router-dom'

export default function Todos() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const todoList = useSelector((state) => state.todoList)
  const { loading, todos, error } = todoList

  const todoUpdate = useSelector((state) => state.todoUpdate)
  const { success: successUpdate } = todoUpdate

  const todoDelete = useSelector((state) => state.todoDelete)
  const { success: successDelete } = todoDelete

  const deleteTodo = (id) => {
    if (window.confirm('Are you sure...?')) {
      dispatch(deleteTodoAction(id))
      navigate('/')
    }
  }

  useEffect(() => {
    dispatch(listTodos())
  }, [dispatch, successUpdate, successDelete])

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <ErrorMessage variant='danger'>{error}</ErrorMessage>
      ) : (
        <MainScreen title='Welcome'>
          <Link to='createtodo'>
            <Button style={{ marginLeft: 10, marginBottom: 8 }} size='md'>
              Create New Todo
            </Button>
          </Link>

          {todos?.reverse().map((todo) => (
            <Card
              className='row'
              key={todo._id}
              style={{ marginTop: 5, marginBottom: 5 }}
            >
              <Card.Header style={{ display: 'flex' }}>
                <span
                  className='col-3'
                  style={{
                    color: 'black',
                    textDecoration: 'none',
                    flex: 1,
                    alignSelf: 'center',
                    fontSize: 18,
                  }}
                >
                  created on{' '}
                  <cite title='source Title'>
                    {todo.createdAt.substring(0, 10)}
                  </cite>
                </span>
                <span
                  className='col-3'
                  style={{
                    color: 'black',
                    textDecoration: 'none',
                    flex: 1,
                    alignSelf: 'center',
                    fontSize: 18,
                  }}
                >
                  {todo.title}
                </span>

                <span
                  className='col-3'
                  style={{
                    color: 'black',
                    textDecoration: 'none',
                    flex: 1,
                    cursor: 'pointer',
                    alignSelf: 'center',
                    fontSize: 18,
                  }}
                >
                  {`End Date ${todo.endDate}`}
                </span>

                <div
                  className='col-3'
                  style={{
                    alignSelf: 'center',
                  }}
                >
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
      )}
    </div>
  )
}
