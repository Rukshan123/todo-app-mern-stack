import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import MainScreen from '../components/MainScreen/MainScreen'
import LoadingBox from '../components/Loading/LoadingBox'
import ErrorMessage from '../components/Error/ErrorMessage'
import { createTodoAction } from '../actions/todoActions'
import { useNavigate } from 'react-router-dom'

function CreateTodo() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [endDate, setEndDate] = useState('')

  const dispatch = useDispatch()

  const todoCreate = useSelector((state) => state.todoCreate)
  const { loading, error } = todoCreate

  const resetHandler = () => {
    setTitle('')
    setEndDate('')
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createTodoAction(title, endDate))
    if (!title || !endDate) return

    resetHandler()
    navigate('/')
  }

  useEffect(() => {}, [])

  return (
    <MainScreen title='Create a Todo'>
      <Card>
        <Card.Header>Create a new Todo</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
            <Form.Group controlId='title'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='title'
                value={title}
                placeholder='Enter the title'
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='endDate'>
              <Form.Label>End Date</Form.Label>
              <Form.Control
                value={endDate}
                placeholder='Enter the End Date'
                rows={4}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Form.Group>

            {loading && <LoadingBox size={50} />}
            <div style={{ marginTop: 10 }}></div>
            <Button type='submit' variant='primary'>
              Create Todo
            </Button>
            <Button className='mx-2' onClick={resetHandler} variant='danger'>
              Reset Feilds
            </Button>
          </Form>
        </Card.Body>

        <Card.Footer className='text-muted'>
          Creating on - {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
    </MainScreen>
  )
}
export default CreateTodo
