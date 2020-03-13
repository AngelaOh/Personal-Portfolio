import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Home from './Home.js'
import Footer from './Footer.js'

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" >
          <Navbar.Brand href="#home">Angela . . . </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>



      {/* <Navbar expand="lg" bg="light" >
        <Navbar.Brand href="#home">Angela . . .</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar> */}

      <Home/>
      <Footer/>
    </div>
  );
}

export default App;

//TODO: delete topbar files
