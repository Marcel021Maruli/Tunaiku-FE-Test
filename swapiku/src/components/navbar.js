import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import { Link } from 'react-router-dom'

export default function NavbarComponent() {

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/film">Swapiku</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/film">Film</Nav.Link>
          <Nav.Link as={Link} to="/character">Character</Nav.Link>
        </Nav>
      </Navbar>
    </>
  )
}