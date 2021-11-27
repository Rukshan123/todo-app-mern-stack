import './App.css'
import Header from './components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Todos from './screens/Todos.js'
import { Container } from 'react-bootstrap'
import CreateTodo from './screens/CreateTodo'
import UpdateTodo from './screens/UpdateTodo'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <main>
          <Routes>
            <Route path='/' element={<Todos />}></Route>
            <Route path='/createtodo' element={<CreateTodo />}></Route>
            <Route path='/todo/:id' element={<UpdateTodo />}></Route>
          </Routes>
        </main>
      </Container>
    </BrowserRouter>
  )
}

export default App
