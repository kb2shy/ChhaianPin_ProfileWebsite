import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Nav fill variants="pills" className="justify-content-center">
        <Nav.Link href="/aboutme">About Me</Nav.Link>
        <Nav.Link href="/resume">Resume</Nav.Link>
        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
        <Nav.Link href="/contactme">Contact Me</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavbarComponent;
