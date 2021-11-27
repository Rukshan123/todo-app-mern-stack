import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Card, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import LoadingBox from '../components/Loading/LoadingBox'
import ErrorMessage from '../components/Error/ErrorMessage'
import MainScreen from '../components/MainScreen/MainScreen'
import { deleteTodoAction, updateTodoAction } from '../actions/todoActions'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function UpdateTodo() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [endDate, setEndDate] = useState()

  const dispatch = useDispatch()

  const todoUpdate = useSelector((state) => state.todoUpdate)
  const { loading, error } = todoUpdate

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteTodoAction(id))
      navigate('/')
    }
  }

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/todos/${id}`)

      setTitle(data.title)
      setEndDate(data.endDate)
    }

    fetching()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const resetHandler = () => {
    setTitle('')
    setEndDate('')
  }

  const updateHandler = (e) => {
    e.preventDefault()
    dispatch(updateTodoAction(id, title, endDate))
    if (!title || !endDate) return

    resetHandler()
    navigate('/')
  }
  return (
    <MainScreen title='Edit Todo'>
      <Card>
        <Card.Header>Edit your Todo</Card.Header>
        <Card.Body>
          <Form onSubmit={updateHandler}>
            {loading && <LoadingBox />}
            {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
            {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
            <Form.Group controlId='title'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='title'
                placeholder='Enter the title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='endDate'>
              <Form.Label>endDate</Form.Label>
              <Form.Control
                as='textarea'
                placeholder='Enter the endDate'
                rows={4}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Form.Group>

            {loading && <LoadingBox size={50} />}
            <Button variant='primary' type='submit'>
              Update Todo
            </Button>
            <Button
              className='mx-2'
              variant='danger'
              onClick={() => deleteHandler(id)}
            >
              Delete Todo
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </MainScreen>
  )
}
export default UpdateTodo
