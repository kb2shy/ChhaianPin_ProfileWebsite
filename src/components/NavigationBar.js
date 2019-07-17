import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    width: 100%;
  }

  .navbar-brand, .nav-item, a{
    color: white;
    padding: 10px;
    text-decoration: none;

    &:hover {
      color: gray;
    }
  }
`;

const NavbarComponent = () => {
  return (
    <Styles>
      <Navbar justify fixed="top">
        <Navbar.Brand><Link to='/'>Hire Chhaian</Link></Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Item><Link to="/about">About Me</Link></Nav.Item>
          <Nav.Item><Link to="/resume">Résumé</Link></Nav.Item>
          <Nav.Item><Link to="/portfolio">Portfolio</Link></Nav.Item>
          <Nav.Item><Link to="/contact">Contact Me</Link></Nav.Item>
        </Nav>
      </Navbar>
    </Styles>
  )
}

export default NavbarComponent;
