import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import {
  todoCreateReducer,
  todoDeleteReducer,
  todoReducer,
  todoUpdateReducer,
} from './reducers/todoReducers'

const reducer = combineReducers({
  //reducers list
  todoList: todoReducer,
  todoCreate: todoCreateReducer,
  todoUpdate: todoUpdateReducer,
  todoDelete: todoDeleteReducer,
})

const initialState = {}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
)

export default store
