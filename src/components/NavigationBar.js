import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    width: 100%;
  }

  button, a{
    color: white;
    padding: 10px;
    text-decoration: none;

    &:hover {
      color: gray;
    }
  }

  .navbar-toggler {
    background-color: white;
    opacity: 0.5;
  }
`;

const NavbarComponent = () => {
  return (
    <Container>
    <Styles>
      <Navbar justify fixed="top" expand="sm">
        <Navbar.Brand><Link to='/'>Home</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item><Link to="/about">About Me</Link></Nav.Item>
            <Nav.Item><Link to="/resume">Résumé</Link></Nav.Item>
            <Nav.Item><Link to="/portfolio">Portfolio</Link></Nav.Item>
            <Nav.Item><Link to="/contact">Contact Me</Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
    </Container>
  )
}

export default NavbarComponent;
