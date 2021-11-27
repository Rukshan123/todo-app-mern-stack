import axios from 'axios'
import {
  TODO_CREATE_FAIL,
  TODO_CREATE_REQUEST,
  TODO_CREATE_SUCCESS,
  TODO_DELETE_FAIL,
  TODO_DELETE_REQUEST,
  TODO_DELETE_SUCCESS,
  TODO_LIST_FAIL,
  TODO_LIST_REQUEST,
  TODO_LIST_SUCCESS,
  TODO_UPDATE_FAIL,
  TODO_UPDATE_REQUEST,
  TODO_UPDATE_SUCCESS,
} from '../constants/todoConstants'

export const listTodos = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: TODO_LIST_REQUEST,
    })
    const { data } = await axios.get(`/api/todos`)

    dispatch({
      type: TODO_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: TODO_LIST_FAIL,
      payload: message,
    })
  }
}

export const createTodoAction =
  (title, endDate) => async (dispatch, getState) => {
    try {
      dispatch({
        type: TODO_CREATE_REQUEST,
      })

      const { data } = await axios.post(`/api/todos/create`, { title, endDate })

      dispatch({
        type: TODO_CREATE_SUCCESS,
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      dispatch({
        type: TODO_CREATE_FAIL,
        payload: message,
      })
    }
  }

export const updateTodoAction =
  (id, title, endDate) => async (dispatch, getState) => {
    try {
      dispatch({
        type: TODO_UPDATE_REQUEST,
      })

      const { data } = await axios.put(`/api/todos/${id}`, { title, endDate })

      dispatch({
        type: TODO_UPDATE_SUCCESS,
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      dispatch({
        type: TODO_UPDATE_FAIL,
        payload: message,
      })
    }
  }

export const deleteTodoAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TODO_DELETE_REQUEST,
    })

    const { data } = await axios.delete(`/api/todos/${id}`)

    dispatch({
      type: TODO_DELETE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: TODO_DELETE_FAIL,
      payload: message,
    })
  }
}
