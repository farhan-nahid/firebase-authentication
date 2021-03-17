import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase/app";
import "firebase/auth";
import React, { useState } from 'react';
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
const [loggedInUser, setLoggedInUser] = useState({
  first : "",
  last : "",
  address : "",
  email : "",
  password : ""
})
  
// google provider function
const handelGoogleSignIn= () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  firebase
  .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      const user = result.user;
      setLoggedInUser(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
  });
}


// facebook provider function
const handelFacebookSignIn = () => {
  const facebookProvider = new firebase.auth.FacebookAuthProvider();

  firebase
  .auth()
    .signInWithPopup(facebookProvider)
    .then((result) => {
      const user = result.user;
      setLoggedInUser(user);
   })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
  });
}


// github provider function
const handelGithubSignIn = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();

  firebase
  .auth()
    .signInWithPopup(githubProvider)
    .then((result) => {
      const user = result.user;
      setLoggedInUser(user);
     })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
  });
}

// event handel
const handelBlur = (e) =>{
  let isFieldValid = true;   
  if(e.target.name === "email"){
    isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
  }
  if(e.target.name === "password"){
    const isPasswordValid = e.target.value.length > 6;
    const passwordHasNumber =  /\d{1}/.test(e.target.value)
    isFieldValid = isPasswordValid && passwordHasNumber
  }
  if(isFieldValid){
    const newUserInfo ={...loggedInUser}
    newUserInfo[e.target.name] = e.target.value
    setLoggedInUser(newUserInfo)
  }
}

const handelSubmit = () =>{

}
  return (
        <>
           <Navbar bg="light" expand="lg" >
              <Navbar.Brand href="#home">Firebase Authentication</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link href="#home">Sign In</Nav.Link>
                  <Nav.Link href="#home">Sign Out</Nav.Link>
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
                <h6> User Name :  {loggedInUser.displayName}</h6>
                  <br/>
                  <h4 className="text-center">Sign Up </h4>
                    <form onSubmit={handelSubmit} >
                      <input type="text" name="first" onBlur={handelBlur}  placeholder="First Name" required/> 
                        <br/> <br/>
                      <input type="text" name="last" onBlur={handelBlur}  placeholder="Last Name" required/>
                         <br/><br/>
                      <input type="text" name="address" onBlur={handelBlur}  placeholder="Address (Optional)"/>
                        <br/><br/>
                      <input type="email" name="email" id="" onBlur={handelBlur} placeholder="Your Email" required/>
                         <br/><br/>
                      <input type="password" name="password" id="" onBlur={handelBlur}  placeholder="Your Password" required/>
                        <br/><br/>
                      <input type="submit" value="Sign Up As New User"/>
                    </form>
                       <br/> <br/>
                    <h5 className="border-top">Log in With </h5>

                    <button className="text-primary" onClick={handelFacebookSignIn}>
                      <FontAwesomeIcon icon={faFacebook} />
                    </button>

                    <button className="text-danger mr-3 ml-3" onClick={handelGoogleSignIn}>
                      <FontAwesomeIcon icon={faGoogle} />
                      </button>

                    <button className="text-dark" onClick={handelGithubSignIn}> 
                    <FontAwesomeIcon icon={faGithub} />
                    </button>
                    
                </Col>
            </Row>
        </Container>
        </>
  );
}

export default App;