import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #000;
  }

  .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

const NavbarComponent = () => {
  return (
    <Styles>
      <Navbar >
        <Navbar.Brand href="/">Hire Chhaian</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/about">About Me</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/resume">Résumé</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/portfolio">Portfolio</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/contact">Contact Me</Nav.Link></Nav.Item>
        </Nav>
      </Navbar>
    </Styles>
  )
}

export default NavbarComponent;
