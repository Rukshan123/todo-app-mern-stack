import './App.css'
import Header from './components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Todos from './screens/Todos.js'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <main>
          <Routes>
            <Route path='/' element={<Todos />}></Route>
          </Routes>
        </main>
      </Container>
    </BrowserRouter>
  )
}

export default App
