import './bmiStyle.css';
import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios';



const BMICalculator = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [name, setName] = useState(location.state)
  const [show, setShow] = useState(false);
  const [mshow, setmShow] = useState(false);
  const [pshow, setpShow] = useState(false);
  const [hshow, sethShow] = useState(false);
  const [wshow, setwShow] = useState(false);
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState(((name.weight) * 10000 / (name.height * name.height)).toFixed(1))
  const [message, setMessage] = useState('')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const mhandleClose = () => setmShow(false);
  const mhandleShow = () => setmShow(true);
  const phandleClose = () => setpShow(false);
  const phandleShow = () => setpShow(true);
  const hhandleClose = () => sethShow(false);
  const hhandleShow = () => sethShow(true);
  const whandleClose = () => setwShow(false);
  const whandleShow = () => setwShow(true);
  const navHome = () => {
    if (name.prime == true) {
      navigate("/primehome", { state: name })
    }
    else {
      navigate("/home", { state: name })
    }

  }
  const navBMI = () => {
    navigate("/bmi", { state: name })
  }
  const navCalorie = () => {
    navigate("/calorie", { state: name })
  }
  const changeName = (e) => {
    const c = axios.put(`http://localhost:8084/user_details/${name.email}`, name).then(res => console.log(res));
    mhandleClose();

  }
  const changeHeight = (e) => {
    const c = axios.put(`http://localhost:8084/user_details/${name.email}`, name).then(res => console.log(res));
    hhandleClose();

  }
  const changeWeight = (e) => {
    const c = axios.put(`http://localhost:8084/user_details/${name.email}`, name).then(res => console.log(res));
    whandleClose();

  }
  const changePass = (e) => {
    const c = axios.put(`http://localhost:8084/user_details/${name.email}`, name).then(res => console.log(res));
    phandleClose();

  }
  const changeValue = (e) => {
    const c = axios.put(`http://localhost:8084/user_details/${name.email}`, name).then(res => console.log(res));

  }
  const reflex = () => {
    navigate("/payment", { state: name })
  }
  const compareD = () => {
    if (name.prime === false) {
      reflex();
    }
    else {
      navigate("/pdiet", { state: name })
    }
  }
  const compareW = () => {
    if (name.prime === false) {
      reflex();
    }
    else {
      navigate("/pwork", { state: name })
    }
  }
  let calcBmi = (event) => {
    event.preventDefault()
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } 
    else {
      let bmi = (weight * 10000 / (height * height))
      setBmi(bmi.toFixed(1))
      name.weight = weight;
      name.height = height
      changeValue();
      if (bmi < 18.5) {
        setMessage('You are underweight')
      } 
      else if (bmi >= 18.5 && bmi <= 24.9) {
        setMessage('You are in a healthy weight range')
      } 
      else if (bmi >= 25 && bmi < 29.9) {
        setMessage('You are overweight')
      } 
      else {
        setMessage('You are obese')
      }
    }

  }





  let reload = () => {

    window.location.reload()

  }
  const navLink = () => {
    if (name.prime == true) {
      return (
        <Nav className="ml-auto">
          <Nav.Link href="">Prime Member</Nav.Link></Nav>
      )
    }
    else if (name.prime == false) {
      return (<Nav className="ml-auto">
        <Nav.Link onClick={reflex}>Buy</Nav.Link>
      </Nav>
      )
    }
  }



  return (

    <div>
      {[false,].map((expand) => (


        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand href="">Bri!!ifit</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={navHome}>Home</Nav.Link>
              <Nav.Link onClick={navBMI}>BMICalculator</Nav.Link>
              <Nav.Link onClick={navCalorie}>Calorie-Counter</Nav.Link>

            </Nav>
            {navLink()}
            <Nav className="ml-auto">
              <Button variant="primary" onClick={handleShow}>
                Profile
</Button>

              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Your Profile!</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Name: {name.fname} {name.lname}
                  <button type="button" className="btn btn-primary" onClick={mhandleShow}>
                    <h5> Update Your Name</h5>

                  </button><br /><br />
                  <Modal show={mshow} onHide={mhandleClose}>

                    <Modal.Header closeButton>

                      <Modal.Title>Update Name</Modal.Title>

                    </Modal.Header>

                    <Modal.Body>

                      <input
                        type='text'
                        value={name.fname}
                        placeholder='New First Name' onChange={(e) => setName({
                          ...name,
                          fname: e.target.value
                        })} />
                      <input
                        type='text'
                        value={name.lname}
                        placeholder='New Last Name'
                        onChange={(e) => setName({
                          ...name,
                          lname: e.target.value
                        })} />


                    </Modal.Body>

                    <Modal.Footer>

                      <Button variant="secondary" onClick={mhandleClose}>

                        Close

                                      </Button>

                      <Button variant="primary" onClick={changeName}>

                        Save Changes

                                      </Button>

                    </Modal.Footer>

                  </Modal>
                              Email: {name.email}
                  <Button variant="secondary" disabled >
                    <h5>Email Cannot Be Changed</h5>

                  </Button><br /><br />


                              Height:{name.height} Cms
                          <Button variant="primary" onClick={hhandleShow}> Update Your Height</Button><br /><br />
                  <Modal show={hshow} onHide={hhandleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Enter New Height(in Cms)</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <input
                        type='number'
                        value={name.height}
                        placeholder='New Height'
                        onChange={(e) => setName({
                          ...name,
                          height: e.target.value
                        })} />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={hhandleClose}>
                        Close
                                      </Button>
                      <Button variant="primary" onClick={changeHeight}>
                        Save Changes
                                      </Button>
                    </Modal.Footer>
                  </Modal>

                              Weight:{name.weight} Kgs
                          <Button variant="primary" onClick={whandleShow}> Update Your Weight</Button><br /><br />
                  <Modal show={wshow} onHide={whandleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Enter New Weight (in Kgs)</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <input
                        type='number'
                        value={name.weight}
                        placeholder='New Weight'
                        onChange={(e) => setName({
                          ...name,
                          weight: e.target.value
                        })} />

                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={whandleClose}>
                        Close
                                      </Button>
                      <Button variant="primary" onClick={changeWeight}>
                        Save Changes
                                      </Button>
                    </Modal.Footer>
                  </Modal>



                  <Button variant="primary" onClick={phandleShow}>
                    Change Your Password

                              </Button><br /><br />
                  <Modal show={pshow} onHide={phandleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Change Password</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <input
                        type='password'
                        value={name.password}
                        placeholder='New Password'
                        onChange={(e) => setName({
                          ...name,
                          password: e.target.value
                        })} />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={phandleClose}>
                        Close
                                      </Button>
                      <Button variant="primary" onClick={changePass}>
                        Save Changes
                                      </Button>
                    </Modal.Footer>
                  </Modal>

                  <Button variant="primary">
                    <Link className="navbar-brand" to={"/logout"}>
                      Logout
                                  </Link>

                  </Button><br />
                </Offcanvas.Body>
              </Offcanvas>
            </Nav>
          </Navbar.Collapse>

        </Navbar>


      ))}



      <div>

        <div className="app">

          <div className='container'>

            <div className="inner" id="one">

              <h2 className='center'>BMI Calculator</h2>

              <form onSubmit={calcBmi}>



                <div>

                  <label>Weight (kg)</label>

                  <input value={weight} onChange={(e) => setWeight(e.target.value)} />

                </div>



                <div>

                  <label>Height (cm)</label>

                  <input value={height} onChange={(event) => setHeight(event.target.value)} />

                </div>



                <div>

                  <button className='btn' type='submit'>Submit</button>

                </div>

              </form>

            </div>

            <div id="two">

              <h2 className='center'>Your BMI is: {bmi}</h2>

              <h1 style={{ color: message === "You are in a healthy weight range" ? "green" : "red" }}>{message}</h1>



              <div id="three">

                <h2>BMI Weight Ranges</h2>

                <h3>Less than 18.5 = Underweight</h3>

                <h3>Between 18.5 and 24.9 = Healthy Weight</h3>

                <h3>Between 25 and 29.9 = Overweight</h3>

                <h3>Over 30 = Obese </h3>

              </div>

            </div>

          </div>

        </div>






        <div className="container" onClick={compareW} style={{ cursor: "pointer" }}>

          <div className="cards" id="one" >

            <Card className="text-center" onClick={compareW} style={{ cursor: "pointer" }} >

              <Card.Header><h1 id="premium">Premium</h1></Card.Header>

              <Card.Body>

                <Card.Title><h2 id="plans">Work Out Plan</h2></Card.Title>

                <Card.Text>

                  A Workout plan designed according to your BMI

                </Card.Text>

                <Button variant="primary" onClick={compareW}>Check Out the Plan!</Button>

              </Card.Body>

              <Card.Footer className="text-muted">*Only for Premium Memebers</Card.Footer>

            </Card>

          </div>



          <div id="four">

            <img src="workout1.png" alt="Workout Plan"></img>

          </div>




        </div>

        <div className="container" onClick={compareD} style={{ cursor: "pointer" }}>

          <div id="five">

            <img src="diet.png" alt="Workout Plan"></img>

          </div>

          <div className="cards" id="one" >

            <Card className="text-center" >

              <Card.Header><h1 id="premium">Premium</h1></Card.Header>

              <Card.Body>

                <Card.Title><h2 id="plans">Diet Plan</h2></Card.Title>

                <Card.Text>

                  A Diet plan designed according to your BMI

                </Card.Text>

                <Button variant="primary" onClick={compareD}>Check Out the Plan!</Button>

              </Card.Body>

              <Card.Footer className="text-muted">*Only for Premium Memebers</Card.Footer>

            </Card>

          </div>
        </div>

      </div>
    </div>
  );

}



export default BMICalculator;