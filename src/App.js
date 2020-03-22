import React from 'react';
import './App.css';
import Main from './components/main';
import { Nav, Navbar, Jumbotron, Button } from 'react-bootstrap';
//import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar sticky="top" bg="white" variant="light" expand="lg">
        <Navbar.Brand href="#home">Zixuan Xu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Jumbotron>
        <h1>Software Engineer</h1>
        <p>
          Graduated from one of the top universities in China, I started my career as a software engineer in a leading consulting firm in China developing structural design software for professional civil engineers. I used MFC on Visual Studio and source control tools including Git to collaborate with my teammates. The team adopted agile development methodology, enabling me to have a lot of interactions with customers and teammates.
        </p>
      </Jumbotron>
      <Main />
    </div>
  );
}

export default App;
