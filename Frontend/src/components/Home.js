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
import axios from 'axios';




function Home(props) {

    const location = useLocation();
    const navigate = useNavigate();
    const shoot = () => {

        alert("Great Shot!");

    }



    const [name, setName] = useState(location.state)
    const [show, setShow] = useState(false);
    const [mshow, setmShow] = useState(false);
    const [pshow, setpShow] = useState(false);
    const [hshow, sethShow] = useState(false);
    const [wshow, setwShow] = useState(false);


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


    const navHome = () => { if(name.prime==true){
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
    // const navPWork = () => {
    //     navigate("/pwork", { state: name })
    // }
    // const navPDiet = () => {
    //     navigate("/pdiet", { state: name })
    // }
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

                        <Nav className="ml-auto">
                        <Nav.Link onClick={reflex}>Buy</Nav.Link>


                        </Nav>
                        <Nav className="ml-auto">
                            <Button variant="primary" onClick={handleShow}>
                                Profile
      </Button>

                            <Offcanvas show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Your Profile!</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    Name: {console.log(name)}{name.fname} {name.lname}
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




            {/* <Card className="bg-dark text-white"
onClick={shoot} style={{ cursor: "pointer" }}>
      <Card.Img src="C:/Users/Tanishq.Sahay/OneDrive - Brillio/Desktop/imgcap1.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>BMI Calculator</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card> */}

            <div className="container" onClick={navBMI} style={{ cursor: "pointer" }}>

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

                            <Button variant="primary" onClick={navBMI}>Click to Know!</Button>

                        </Card.Body>

                        <Card.Footer className="text-muted">*for All Signed-up Memebers</Card.Footer>

                    </Card>

                </div>
            </div>


            <div className="container" onClick={navCalorie} style={{ cursor: "pointer" }}>

                <div className="cards" id="one" >

                    <Card className="text-center" onClick={navCalorie} style={{ cursor: "pointer" }} >

                        <Card.Header><h1 id="premium">Calorie Counter</h1></Card.Header>

                        <Card.Body>

                            <Card.Title><h2 id="plans"></h2></Card.Title>

                            <Card.Text>

                                This Calorie-counter allows you to choose from multiple types of foods and drinks, and see nutrition facts such as calories, fat, protein andcarbohydrates.

                </Card.Text>

                            <Button variant="primary" onClick={navCalorie}>Click to Plan your Daily Meals</Button>

                        </Card.Body>

                        <Card.Footer className="text-muted">*for All Signed-up Memebers</Card.Footer>

                    </Card>

                </div>



                <div id="four">

                    <img src="calorie.png" alt="Calorie Page"></img>

                </div>



            </div>



            {/* <div className="container"   onClick={shoot} style={{ cursor: "pointer" }}> */}

            {/* <div id="five">

    <img src="diet.png" alt="Workout Plan"></img>

</div> */}

            <div className="cards" id="one" >

                <Card className="text-center" >

                    <Card.Header><h1 id="premium">5 Basic Exercises To Do EveryDay For Beginners </h1></Card.Header>

                    <Card.Body>

                        <Card.Title><h2 id="plans">    PushUps - 3 Sets (Maximum Reps Possible) <br />
          PullUps - 3 Sets (Maximum Reps Possible)<br />
          Squats  - 3 Sets (15 Reps Each Set) *increase reps accordingly<br />
          Lunges  - 3 Sets (15 Reps Each Set) *increase reps accordingly<br />
          Plank   - 2 Sets (1 minute minimum)
          </h2></Card.Title>
                        <Card.Text>
                            Check out these exercises you can do for ultimate fitness. Combine them into a routine for a workout that’s simple but powerful and sure to keep you in shape for the rest of your life.

        </Card.Text>

                        {/* <Button variant="primary">Click To Start Getting In Shape!</Button> */}

                    </Card.Body>

                    <Card.Footer className="text-muted">*for All Signed-up Memebers</Card.Footer>

                </Card>

            </div>
            {/* </div> */}

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

                            <Button variant="primary" onClick={compareD}>Check Out the Plan!</Button>

                        </Card.Body>

                        <Card.Footer className="text-muted">*Only for Premium Memebers</Card.Footer>

                    </Card>

                </div>
            </div>
        </div>
    );
}



export default Home;