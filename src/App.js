import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase/app";
import "firebase/auth";
import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import './App.css';
import { firebaseConfig } from './firebase.config';
import image from './images/authentication.svg';


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

function App() {

  return (
        <>
           <Navbar bg="light" expand="lg" >
              <Navbar.Brand href="#home">Firebase Authentication</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link href="#home">Log In</Nav.Link>
                  <Nav.Link href="#link">Sign Up</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Container>
            <Row>
                <Col md={7}>
                    <img src= {image} alt=".." className="img-fluid"/>
                </Col>
                <Col md={5} className="form-input">
                  <br/> <br/>
                  <h3 className="text-center">Sign Up hare</h3>
                    <form action="" >
                      <input type="text" placeholder="First Name"/> 
                      <br/> <br/>
                      <input type="text" placeholder="Last Name"/>
                      <br/><br/>
                      <input type="text" placeholder="Address"/>
                      <br/><br/>
                      <input type="email" name="" id="" placeholder="Your Email"/>
                      <br/><br/>
                      <input type="password" name="" id="" placeholder="Your Password"/>
                      <br/><br/>
                      <input type="submit" value="Sign Up as a new User"/>
                    </form>
                    <br/> <br/>
                    <h5 className="border-top">Log in With </h5>
                    <button className="text-primary"><FontAwesomeIcon icon={faFacebook} /></button>
                    <button className="text-danger mr-3 ml-3"><FontAwesomeIcon icon={faGoogle} /></button>
                    <button className="text-dark"> <FontAwesomeIcon icon={faGithub} /></button>
                    
                </Col>
            </Row>
        </Container>
        </>
  );
}

export default App;