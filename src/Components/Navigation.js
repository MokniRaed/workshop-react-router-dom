import React from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Navigation() {
    const navigate = useNavigate()
  return (
    <>
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Router</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate('/')}>Home</Nav.Link>
            <Nav.Link  onClick={()=>navigate('/about')}>About</Nav.Link>
            <Nav.Link  onClick={()=>navigate('/contact')}>Contact</Nav.Link>
            </Nav>
            </Container>
            </Navbar>
    </>
  )
}

export default Navigation