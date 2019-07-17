import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const Styles = styled.div`
  .jumbotron {
    background: url(${'./img/banner2.jpg'}) no-repeat fixed;
    background-size: cover;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

const Header = () => {
  return (
    <Styles>
      <Jumbotron fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
          <h1>Welcome</h1>
          <p>Front End Engineer | React Developer | Full Stack Developer</p>
        </Container>
      </Jumbotron>
    </Styles>
  )
}

export default Header;
