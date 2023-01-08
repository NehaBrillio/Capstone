import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from "react";
import './loginnew.css'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBRadio
} from 'mdb-react-ui-kit';
import { FormCheck } from 'react-bootstrap';
// import SignUp from '../../../quiz-app TanishqSahay/src/components/signup';

function Signup() {
  const [varname, setvarName] = useState({
    email: "", password: "", fname: "", lname: "", gender: "", age: "", height: "", weight: "",
    prime: false,
    mon: "",
    tue: "",
    wed: "",
    thur: "",
    fri: "",
    sat: "",
    sun: ""
  })
  const navigate = useNavigate();

  let result;

  const checkEmail = async() => {
    result = (await axios.get(`http://localhost:8084/user_details/${varname.email}`)).data
    if(result!=""){
      console.log(result)
      alert("Account already exists")
      navigate("/login")
    }
    else{
      axios.post('http://localhost:8084/user_details', varname)
        .then(res => console.log('posting data', res));

      nav();
    }
  }

  const navHome = (e) => {
    e.preventDefault();
    checkEmail()
  }

  const nav = () => {
    navigate("/home", { state: varname });
  }

  return (
    <MDBContainer fluid>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/login">Bri!!ifit</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/sign-up">SignUp</Nav.Link>
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
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }} />
            <span className="h1 fw-bold mb-0">Bri!!ifit</span>
          </div>

          <div className='d-flex flex-column  h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>SignUp</h3>
            <form onSubmit={navHome}>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' placeholder="First name" label='First Name' id='formControlLg' type='fname' size="lg" value={varname.fname}
                onChange={(e) => setvarName({ ...varname, fname: e.target.value })} required />

              <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Last Name' id='formControlLg' type='lname' size="lg" placeholder="Last name" value={varname.lname}
                onChange={(e) => setvarName({ ...varname, lname: e.target.value })} required />
              <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg" placeholder="Enter email" value={varname.emailid}
                onChange={(e) => setvarName({ ...varname, email: e.target.value })} required />
              <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg" placeholder="Enter password" value={varname.password}
                onChange={(e) => setvarName({ ...varname, password: e.target.value })} required />
              <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Age' id='formControlLg' type='number' size="lg" placeholder="Enter age" value={varname.age}
                onChange={(e) => setvarName({ ...varname, age: e.target.value })} required />
              <div className='mydiv1'>
                <MDBRadio name='gen' id='formControlLg' value='0' label='Male' inline onChange={(e) => setvarName({ ...varname, gender: e.target.value })} required />
                <MDBRadio name='gen' id='formControlLg' value='1' label='Female' inline onChange={(e) => setvarName({ ...varname, gender: e.target.value })} required />
                <MDBRadio name='gen' id='formControlLg' value='2' label='Others' inline onChange={(e) => setvarName({ ...varname, gender: e.target.value })} required />
                <br />
                <label>Gender</label> <br /><br />
              </div>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Height' id='formControlLg' type='number' size="lg" placeholder="Enter Height" value={varname.height}
                onChange={(e) => setvarName({ ...varname, height: e.target.value })} required />
              <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Weight' id='formControlLg' type='number' size="lg" placeholder="Enter Weight" value={varname.weight}
                onChange={(e) => setvarName({ ...varname, weight: e.target.value })} required />


              <MDBBtn type="submit" className="mb-4 px-5 mx-5 w-100" color='info' size='lg'>SignUp</MDBBtn>
            </form>
            {/* <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" href="#!">Forgot password?</a></p> */}
            <p className='ms-5'>Already have an account? <a href="/sign-in" class="link-info">Login here</a></p>

          </div>

        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src="loginimg.png"
            alt="Login image" className="w-100" style={{ objectFit: 'cover', objectPosition: 'left' }} />
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}
export default Signup