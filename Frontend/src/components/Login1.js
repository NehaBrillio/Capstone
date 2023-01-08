// import Home from './Home.js'
import './loginnew.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
} from 'mdb-react-ui-kit';
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation, Navigate } from 'react-router-dom'
import axios from 'axios'

function Login() {

  const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let result;
 
  const navhome = async (e) => {
    e.preventDefault();
     result=(await axios.get(`http://localhost:8084/user_details/${email}`)).data
        comparison();
        
  }
  
  
  
  
    const comparison = async (e) => {
      if(result==null){
        alert("Email Not Found, Navigating to Signup");
        navigate("/sign-up")
      }
      
      if(password==result.password){
        if (result.prime==true){
          navigate("/primehome",{state:result});
        }
        else{
          navigate("/home", { state: result });
  
        }
      }
      else{
        alert("WrongPassword");
        navigate("/login")
      }
    }


  return (
    <MDBContainer fluid>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/">Bri!!ifit</Navbar.Brand>
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
     <Navbar.Collapse id="responsive-navbar-nav">
       <Nav className="me-auto">
         <Nav.Link href="login">Login</Nav.Link>
         <Nav.Link href="sign-up">SignUp</Nav.Link>
         {/* <Nav.Link href="#features">Calorie-Counter</Nav.Link> */}

         </Nav>

         {/* <Nav className="ml-auto">
         <Nav.Link href="#pricing">Prime Member</Nav.Link>
         </Nav> */}
     </Navbar.Collapse>
     
 </Navbar>
      <MDBRow>

        <MDBCol sm='6'>

          <div className='d-flex flex-row ps-5 pt-5'>
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
            <span className="h1 fw-bold mb-0">Bri!!ifit</span>
          </div>

          <div className='d-flex flex-column  h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>
            <form onSubmit = {navhome}>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' placeholder='Enter Email' label='Email address' id='formControlLg' type='email' size="lg" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <MDBInput wrapperClass='mb-4 mx-5 w-100' placeholder='Enter Password'label='Password' id='formControlLg' type='password' size="lg"value={password}
                  onChange={(e) => setPassword(e.target.value )} required/>

            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg' type="submit">Login</MDBBtn>
            {/* <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" href="#!">Forgot password?</a></p> */}
            <p className='ms-5'>Don't have an account? <a href="sign-up" className="link-info">Register here</a></p>
            </form>
          </div>

        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src="loginimg.png"
            alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}
export default Login