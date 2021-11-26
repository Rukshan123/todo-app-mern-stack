import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

export default function Header() {
  return (
    <div>
      <Navbar bg='primary' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>Todo App</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
