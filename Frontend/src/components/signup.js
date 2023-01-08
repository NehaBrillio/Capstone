import React, { useState } from "react";
import './signlog.css'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function SignUp() {
  const [varname, setvarName] = useState({
    email: "dfdfdf@cc.dd", password: "", fname: "", lname: "", gender: "", age: "", height: "", weight: ""

  })
  let result;


  const navigate = useNavigate();
  const navHome = (e) => {
    e.preventDefault();
    
    axios.post('http://localhost:8084/user_details', varname)
      .then(res => console.log('posting data', res));

    goHome();
  }

  const goHome=async(e)=>{
    result = (await axios.get(`http://localhost:8084/user_details/${varname.email}`)).data
    nav()
  }
  const nav=()=>{
  navigate("/home", { state: result });
  }
  
  //  const postdata=()=>{
  //     Axios.post({

  //                 baseURL: '"http://localhost:8080/user_details',
  //                 headers: {
  //                   "Content-type": "application/json"
  //                 }
  //             },name).then(res=>console.log('posting data',res));

  //  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={'/login'}>
            <b>BeautifyMe</b>
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={'/login'}>
                  Login
                  </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/sign-up'}>
                  Sign up
                  </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <form onSubmit={navHome}>
          <br></br>
          <h3>Register</h3>

          <div className="form-group">
            <label>Full name</label>
            <input type="text" className="form-control" placeholder="First name" value={varname.fname}
              onChange={(e) => setvarName({ ...varname, fname: e.target.value })} required />
            <input type="text" className="form-control" placeholder="Last name" value={varname.lname}
              onChange={(e) => setvarName({ ...varname, lname: e.target.value })} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter email" value={varname.emailid}
              onChange={(e) => setvarName({ ...varname, email: e.target.value })} required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" value={varname.password}
              onChange={(e) => setvarName({ ...varname, password: e.target.value })} required />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input type="number" className="form-control" placeholder="Enter age" value={varname.age}
              onChange={(e) => setvarName({ ...varname, age: e.target.value })} required />
          </div>
          <div className="form-group">
            <label>Gender &nbsp;</label>
            <br></br>
            <input type="radio" value='0' name="gen"
              onChange={(e) => setvarName({ ...varname, gender: e.target.value })} required />Male &nbsp;
                        <input type="radio" value='1' name="gen"
              onChange={(e) => setvarName({ ...varname, gender: e.target.value })} required />Female &nbsp;
                        <input type="radio" value='2' name="gen"
              onChange={(e) => setvarName({ ...varname, gender: e.target.value })} required />Others
                    </div>
          <div className="form-group">
            <label>Weight</label>
            <input type="number" className="form-control" placeholder="Enter Weight" value={varname.weight}
              onChange={(e) => setvarName({ ...varname, weight: e.target.value })} required />
          </div>
          <div className="form-group">
            <label>Height</label>
            <input type="number" className="form-control" placeholder="Enter Height" value={varname.height}
              onChange={(e) => setvarName({ ...varname, height: e.target.value })} required />
          </div>
          <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
          <p className="forgot-password text-right">
            Already registered <a href="/login">log in?</a>
          </p>
        </form>
      </div>
    </div>

  );
}
