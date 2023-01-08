import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Card, CardGroup, Row } from 'react-bootstrap';
import './bmiStyle.css';
import Modal from 'react-bootstrap/Modal';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios';

function WorkoutPlan(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const [result, setResult] = useState(location.state);

    const reflex = () => {
        if (result.prime == true) {
            navigate("/primehome", { state: result })
        }
        else {
            navigate("/home", { state: result })
        }
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
    const reflex2 = () => {
        navigate("/payment", { state: name })
    }
    const compareD = () => {
        if (name.prime === false) {
            reflex2();
        }
        else {
            navigate("/pdiet", { state: name })
        }
    }
    const compareW = () => {
        if (name.prime === false) {
            reflex2();
        }
        else {
            navigate("/pwork", { state: name })
        }
    }









    const base = () => {
        let bmi = ((result.weight) * 10000 / (result.height * result.height));
        if (bmi < 18.5) {
            return (
                <div>
                    <Card style={{ width: '90%' }, { alignItems: 'center' }} class="cardclass" >
                        <Card.Img variant="top" src="https://i.pinimg.com/736x/26/00/74/260074fa58871923a6753fefebfd8107.jpg" class="cardimg" />
                        <Card.Body>
                            <Card.Title>UNDERWEIGHT WORKOUT</Card.Title>
                            
                            <Button variant="primary " onClick={reflex}>Back to HOME</Button>
                        </Card.Body>
                    </Card>
                </div>
            )
        }
        else if (25 < bmi && bmi < 29.9) {
            return (
                <div>
                    <Card style={{ width: '90%' }, { alignItems: 'center' }} class="cardclass" >
                        <Card.Img variant="top" src="https://i.pinimg.com/736x/ba/b4/4d/bab44d7add7d79119156d0b26eff4928.jpg" class="cardimg" />
                        <Card.Body>
                            <Card.Title>OVERWEIGHT WORKOUT</Card.Title>
                            <Button variant="primary " onClick={reflex}>Back to HOME</Button>
                        </Card.Body>
                    </Card>
                </div>
            )
        }
        else if (18.5 < bmi && bmi < 24.9) {
            return (
                <div>
                    <Card style={{ width: '90%' }, { alignItems: 'center' }} class="cardclass" >
                        <Card.Img variant="top" src="https://i.pinimg.com/736x/38/e1/3e/38e13e8852c982769e5b6036ebc1d425--easy-morning-workout-wake-up-workout.jpg" class="cardimg" />
                        <Card.Body>
                            <Card.Title>HEALTHY WEIGHT WORKOUT</Card.Title>
                            
                            <Button variant="primary " onClick={reflex}>Back to HOME</Button>
                        </Card.Body>
                    </Card>
                </div>
            )
        }
        else if (bmi > 30) {
            return (
                <div>
                    <Card style={{ width: '90%' }, { alignItems: 'center' }} class="cardclass" >
                        <Card.Img variant="top" src="https://i.pinimg.com/474x/5f/16/9c/5f169c031e5fce629a5b9f7cdc4e7d5c.jpg" class="cardimg" />
                        <Card.Body>
                            <Card.Title>OBESITY WORKOUT</Card.Title>
                            
                            <Button variant="primary " onClick={reflex}>Back to HOME</Button>
                        </Card.Body>
                    </Card>
                </div>
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

                        <Nav className="ml-auto">
                            <Nav.Link href="">Prime Member</Nav.Link>


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
            
            {base()}
            
            </div>)}





                                               
export default WorkoutPlan