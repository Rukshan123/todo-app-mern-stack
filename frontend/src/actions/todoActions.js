import axios from 'axios'
import {
  TODO_LIST_FAIL,
  TODO_LIST_REQUEST,
  TODO_LIST_SUCCESS,
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
