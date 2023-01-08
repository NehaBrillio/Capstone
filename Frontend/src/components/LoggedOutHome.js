import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Card from 'react-bootstrap/Card';
import './bmiStyle.css';
import Modal from 'react-bootstrap/Modal';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'




function LoggedOutHome() {

  const navigate = useNavigate();



  const [name, setName] = useState(false)
  const [questions, setQuestions] = useState(false)
  const [show, setShow] = useState(false);
  const [mshow, setmShow] = useState(false);
  const [pshow, setpShow] = useState(false);
  const [qshow, setqShow] = useState(false);
  const [wshow, setwShow] = useState(false);


  const [updatedAt, setUpdatedAt] = useState(null)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const mhandleClose = () => setmShow(false);
  const mhandleShow = () => setmShow(true);
  const phandleClose = () => setpShow(false);
  const phandleShow = () => setpShow(true);
  const qhandleClose = () => setqShow(false);
  const qhandleShow = () => setqShow(true);
  const whandleClose = () => setwShow(false);
  const whandleShow = () => setwShow(true);

  const navLogin = () => {
    navigate("/login")
  }
  return (

    <div>
      {[false,].map((expand) => (

        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand href="">Bri!!ifit</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="">Home</Nav.Link>
              <Nav.Link href="login">BMICalculator</Nav.Link>
              <Nav.Link href="login">Calorie-Counter</Nav.Link>

            </Nav>

            <Nav className="ml-auto">
              <Nav.Link href="login">Buy</Nav.Link>
              <Nav.Link href="login">Login/Signup</Nav.Link>



            </Nav>
          </Navbar.Collapse>

        </Navbar>


      ))}






      <div className="container" onClick={navLogin} style={{ cursor: "pointer" }}>

        <div id="five">

          <img src="workout1.png" alt="BMI Page"></img>

        </div>

        <div className="cards" id="one" >

          <Card className="text-center" >

            <Card.Header><h1 id="premium">BMI Calculator</h1></Card.Header>

            <Card.Body>

              <Card.Title><h2 id="plans"></h2></Card.Title>

              <Card.Text>

                Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.

                </Card.Text>

              <Button variant="primary" onClick={navLogin}>Click to Know!</Button>

            </Card.Body>

            <Card.Footer className="text-muted">*for All Signed-up Memebers</Card.Footer>

          </Card>

        </div>
      </div>


      <div className="container" onClick={navLogin} style={{ cursor: "pointer" }}>

        <div className="cards" id="one" >

          <Card className="text-center" onClick={navLogin} style={{ cursor: "pointer" }} >

            <Card.Header><h1 id="premium">Calorie Counter</h1></Card.Header>

            <Card.Body>

              <Card.Title><h2 id="plans"></h2></Card.Title>

              <Card.Text>

                This Calorie-counter allows you to choose from multiple types of foods and drinks, and see nutrition facts such as calories, fat, protein andcarbohydrates.

                </Card.Text>

              <Button variant="primary" onClick={navLogin}>Click to Plan your Daily Meals</Button>

            </Card.Body>

            <Card.Footer className="text-muted">*for All Signed-up Memebers</Card.Footer>

          </Card>

        </div>



        <div id="four">

          <img src="calorie.png" alt="Calorie page"></img>

        </div>



      </div>





      <div className="cards" id="one" >

        <Card className="text-center" >

          <Card.Header><h1 id="premium">5 Basic Exercises To Do EveryDay For Beginners </h1></Card.Header>

          <Card.Body>

            <Card.Title><h4 id="plans">
              Check out these exercises you can do for ultimate fitness. Combine them into a routine for a workout that’s simple but powerful and sure to keep you in shape for the rest of your life.

          </h4></Card.Title>
            <Card.Text>
              PushUps - 3 Sets (Maximum Reps Possible) <br />
          PullUps - 3 Sets (Maximum Reps Possible)<br />
          Squats  - 3 Sets (15 Reps Each Set) *increase reps accordingly<br />
          Lunges  - 3 Sets (15 Reps Each Set) *increase reps accordingly<br />
          Plank   - 2 Sets (1 minute minimum)
        </Card.Text>

            {/* <Button variant="primary">Click To Start Getting In Shape!</Button> */}

          </Card.Body>

          <Card.Footer className="text-muted">*for All Signed-up Memebers</Card.Footer>

        </Card>

      </div>
      {/* </div> */}

      <div className="container" onClick={navLogin} style={{ cursor: "pointer" }}>

        <div className="cards" id="one" >

          <Card className="text-center" onClick={navLogin} style={{ cursor: "pointer" }} >

            <Card.Header><h1 id="premium">Premium</h1></Card.Header>

            <Card.Body>

              <Card.Title><h2 id="plans">Work Out Plan</h2></Card.Title>

              <Card.Text>

                A Workout plan designed according to your BMI

                </Card.Text>

              <Button variant="primary" onClick={navLogin}>Check Out the Plan!</Button>

            </Card.Body>

            <Card.Footer className="text-muted">*Only for Premium Memebers</Card.Footer>

          </Card>

        </div>



        <div id="four">

          <img src="workout1.png" alt="Workout Plan"></img>

        </div>




      </div>

      <div className="container" onClick={navLogin} style={{ cursor: "pointer" }}>

        <div id="five">

          <img src="diet.png" alt="Diet Plan"></img>

        </div>

        <div className="cards" id="one" >

          <Card className="text-center" >

            <Card.Header><h1 id="premium">Premium</h1></Card.Header>

            <Card.Body>

              <Card.Title><h2 id="plans">Diet Plan</h2></Card.Title>

              <Card.Text>

                A Diet plan designed according to your BMI

                </Card.Text>

              <Button variant="primary" onClick={navLogin}>Check Out the Plan!</Button>

            </Card.Body>

            <Card.Footer className="text-muted">*Only for Premium Memebers</Card.Footer>

          </Card>

        </div>
      </div>
    </div>
  );
}



export default LoggedOutHome;