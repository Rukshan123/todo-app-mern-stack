import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#2c3e50', color: '#ffff' }}>
      <Container>
        <Row>
          <Col className='text-center py-3'>Alright reserved 2021</Col>
        </Row>
      </Container>
    </footer>
  )
}
