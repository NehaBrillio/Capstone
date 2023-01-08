import React,{useState, useEffect} from 'react'
import './caloriesStyle.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from 'react-bootstrap/Modal';


function Calories() {
    const location = useLocation();
    const navigate = useNavigate();
    const [name, setName] = useState(location.state)


    const [breakfastMeal, setBreakfast] = useState([]);
    const [lunchMeal, setLunchMeal] = useState([]);
    const[dinnerMeal,setDinnerMeal] =useState([]);
  
    let postsB
    let postsL
    let postsD 

    const [id, setId] = useState("")
    const [lunch, setLunch] = useState("")
    const [dinner, setDinner] = useState("")

    const [calB, setcalB] = useState("")
    const [calL, setcalL] = useState("")
    const [calD, setcalD] = useState("")

    const [days, setDay] = useState(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"])
    const [numDays, setNum] = useState([0,1,2,3,4,5,6])
    let nameday;

    // var today = (new Date().getDay())+7;
    // console.log(days[today])
    // const setDayValue=()=>{
    //     document.getElementById('0').innerHTML=days[today];
    //     document.getElementById('1').innerHTML=days[today-1];
    //     document.getElementById('2').innerHTML=days[today-2];
    //     document.getElementById('3').innerHTML=days[today-3];
    //     document.getElementById('4').innerHTML=days[today-4];
    //     document.getElementById('5').innerHTML=days[today-5];
    //     document.getElementById('6').innerHTML=days[today-6];
        
    // }

  const breakfastHandler = async(e) => {
    e.preventDefault();
    postsB=(await axios.get(`https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${id}`,{headers: {'Access-Control-Allow-Origin': '*','X-RapidAPI-Key': '3aa5c8d228msh258300a1f508213p1fa43djsnbe0b9c519857','X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'}})).data[0];
    if(postsB === undefined){
        alert("Please enter a valid meal")
    }else{
        addBreakfastToList();
        countCaloriesB();
        console.log(postsB)
    }
      
  }

  const lunchHandler = async(e) => {
    e.preventDefault();
    postsL=(await axios.get(`https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${lunch}`,{headers: {'Access-Control-Allow-Origin': '*','X-RapidAPI-Key': '3aa5c8d228msh258300a1f508213p1fa43djsnbe0b9c519857','X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'}})).data[0]; 
    if(postsL === undefined){
        alert("Please enter a valid meal")
    }else{
        addLunchToList();
     countCaloriesL();
    console.log(postsL)
    } 
    
  }

  const dinnerHandler = async(e) => {
    e.preventDefault();
    postsD =(await axios.get(`https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${dinner}`,{headers: {'Access-Control-Allow-Origin': '*','X-RapidAPI-Key': '3aa5c8d228msh258300a1f508213p1fa43djsnbe0b9c519857','X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'}})).data[0];
    if(postsD === undefined){
        alert("Please enter a valid meal")
    }else{
        addDinnerToList();
        countCaloriesD();      
          // document.getElementById('mealName').innerHTML = `${posts.name}`
          // document.getElementById('Calories').innerHTML = `${posts.calories}`          
          console.log(postsD)
    } 
 
  }
  const addBreakfastToList = () => {
    let mealArr = breakfastMeal;
    mealArr.push({
        name: `${postsB.name}` ,
        calories: `${postsB.calories}`*0.01*calB, 
        ss: `${postsB.serving_size_g}`
    });
    setBreakfast(mealArr);   
    setId("");
  };

  const addLunchToList = () => {

    let lunchArr= lunchMeal;
    lunchArr.push({
        name: `${postsL.name}` ,
        calories: `${postsL.calories}`*0.01*calL, 
        ss: `${postsL.serving_size_g}`
    });
    setLunchMeal(lunchArr);
    setLunch("");
  };

  const addDinnerToList = () => {
    let dinnerArr = dinnerMeal;
    dinnerArr.push({
        name: `${postsD.name}` ,
        calories: `${postsD.calories}`*0.01*calD, 
        ss: `${postsD.serving_size_g}`
    });  
    setDinnerMeal(dinnerArr);   
    setDinner("");
  };

  const renderBreakfast = (meal, index) =>{

        return (            
          <tr key={index}>
            <td>{meal.name}</td>
            <td>{ parseFloat(meal.calories.toFixed(2))}</td>      
          </tr>
        )      
  }

  const renderLunch = (meal, index) =>{
   
    return (
      <tr key={index}>
        <td>{meal.name}</td>
        <td>{ parseFloat(meal.calories.toFixed(2))}</td>     
      </tr>
    )  
}

const renderDinner = (meal, index) =>{

    return (

      <tr key={index}>
        <td>{meal.name}</td>
        <td>{ parseFloat(meal.calories.toFixed(2))}</td>      
      </tr>
    )
  
}

    const [totalB,setTotalB]=useState(0)
    const [totalL, setTotalL] = useState(0)
    const [totalD, setTotalD] = useState(0)
    const [total, setTotal] = useState(0)

const countCaloriesB = () =>{
    breakfastMeal.map(count=>(
        setTotalB(totalB + count.calories)
    ))
    console.log(totalB, "total ",total)
    return(
       document.getElementById("count").innerHTML = parseFloat(totalB.toFixed(2))
      
    )
}

const countCaloriesL = () =>{
    lunchMeal.map(count=>(
        setTotalL(totalL + count.calories)
    ))   
    console.log(totalL,  "total ",total)
    return(
       document.getElementById("count2").innerHTML = parseFloat(totalL.toFixed(2))
    )
}

const countCaloriesD = () =>{
    dinnerMeal.map(count=>(
        setTotalD(totalD + count.calories)
    ))
    // setTotal(total + totalD)
    console.log(totalD, "total ",total)
    
    return(
       document.getElementById("count3").innerHTML = parseFloat(totalD.toFixed(2))
    )
}

    let x=0;
    var today = new Date()
    let alldis=(name.lastday==today.getDay()?true:false)


    const makeTimer = ()=>{

        
        console.log(totalB, totalL, totalD)
        x=totalB+totalL+totalD
        //   document.getElementById("monday").innerHTML =  "Total calories: "+ x
        console.log(x)
        console.log(today.getDay())
        name.lastday=today.getDay()
        if (today.getDay()==0){ name.sun = total}
        else if (today.getDay() == 1) { name.mon = x }
        else if (today.getDay() == 2) { name.tue = x }
        else if (today.getDay() == 3) { name.wed = x }
        else if (today.getDay() == 4) { name.thur = x}
        else if (today.getDay() == 5) { name.fri = x }
        else if (today.getDay() == 6) { name.sat = x }
        axios.put(`http://localhost:8084/user_details/${name.email}`, name).then(res => apicall())

        
    
    }
    
   
    const ResetEntry = () => {
            console.log(alldis)
            console.log("value")
            makeTimer()
    }

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
    const fetchName=(num)=>{
           
                var today = new Date()
                let prefix;
                // console.log(name)
                
                if (num > today.getDay()) {
                    prefix = "Previous"
                }

                else {
                    prefix = "This"
                }

                if (num == 0) {
                    return (
                        <Card className="text-center" >
                            <Card.Header><h4>{prefix} {days[num]}</h4></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Total calories: {name.sun}
                                </Card.Text>
                            </Card.Body>
                        </Card>) }
                else if (num == 1) {
                    return (
                        <Card className="text-center" >
                            <Card.Header><h4>{prefix} {days[num]}</h4></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Total calories: {name.mon}
                                </Card.Text>
                            </Card.Body>
                        </Card>) }
                else if (num == 2) {
                    return (
                        <Card className="text-center" >
                            <Card.Header><h4>{prefix} {days[num]}</h4></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Total calories: {name.tue}
                                </Card.Text>
                            </Card.Body>
                        </Card>) }
                else if (num == 3) {
                    return (
                        <Card className="text-center" >
                            <Card.Header><h4>{prefix} {days[num]}</h4></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Total calories: {name.wed}
                                </Card.Text>
                            </Card.Body>
                        </Card>) }
                else if (num == 4) {
                    return (
                        <Card className="text-center" >
                            <Card.Header><h4>{prefix} {days[num]}</h4></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Total calories: {name.thur}
                                </Card.Text>
                            </Card.Body>
                        </Card>) }
                else if (num == 5) {
                    return (
                        <Card className="text-center" >
                            <Card.Header><h4>{prefix} {days[num]}</h4></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Total calories: {name.fri}
                                </Card.Text>
                            </Card.Body>
                        </Card>) }
                else if (num == 6) {
                    return (
                        <Card className="text-center" >
                            <Card.Header><h4>{prefix} {days[num]}</h4></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Total calories: {name.sat}
                                </Card.Text>
                            </Card.Body>
                        </Card>) }
                
            }
            const apicall = async()=>{
                let temp = (await axios.get(`http://localhost:8084/user_details/${name.email}`)).data
                console.log(temp)

                navigate("/calorie",{state:temp})

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
 
        <div className="outer">
              <div  className="right">
                    <h1>History</h1>
                  {numDays.map(fetchName)}
                  
                {/* <div id="0">0</div>
                <div id="1">0</div>
                <div id="2">0</div>
                <div id="3">0</div>
                <div id="4">0</div>
                <div id="5">0</div>
                <div id="6">0</div> */}
                {/* {setDayValue()} */}

           </div>
            <div className="left" >
            <h1 className="center">Keep Track of your Calories intake!</h1>
            <div className="inner1">
               
                <div>
                <h1> Breakfast </h1>
              
              <h4 id="quote">Search a meal and add it to the list!</h4>
                </div>
                
                <br/>
                    <div id="breakfast">
                        <InputGroup>
                            <Form.Control
                        placeholder="Search Meal" type="text" value={id}onChange={event => setId(event.target.value)}
                            />
                            <Form.Control
                        placeholder="Quantity in gm" type="text" value={calB}onChange={event => setcalB(event.target.value)}
                            />
                            <Button variant="outline-secondary" id="button-addon2" onClick={breakfastHandler}>
                            Add meal to list
                            </Button>
                        </InputGroup>

                    </div>
                <div className= "meals">
                    <Table> 
                    <thead>
                    <tr>
                        <th>Total Calories: </th>
                        <th id="count">{totalB}</th>
                    </tr>
                    </thead>
                    <tbody>     
                    {/* {breakfastMeal.length > 0 && breakfastcalorie.length > 0 && breakfastMeal.map((meal) => <td><h3>{meal} </h3> </td> ) && breakfastcalorie.map((cal) => <td><h3>{cal} </h3> </td>)} */}
                            
                                {/* <td  id="Calories"></td> */}
                                <tr>
                                    <td id="head"> <h4>Meal</h4></td>
                                    <td id="head"><h4>Calories</h4></td>
                                </tr>

                                {breakfastMeal.map(renderBreakfast)} 
                            
                    </tbody>      
                    
                    </Table>  
                </div>
                   
            </div>
            
            <div className="inner1">
                <div>
                <h1> Lunch </h1>
            <h4 id="quote">Search a meal and add it to the list!</h4>
            </div>
            <br/>
                <div id="breakfast">
                
                    <InputGroup>
                        <Form.Control
                       placeholder="Search Meal"type="text" value={lunch}onChange={event => setLunch(event.target.value)}
                        />
                         <Form.Control
                        placeholder="Quantity in gm" type="text" value={calL}onChange={event => setcalL(event.target.value)}
                            />
                        <Button variant="outline-secondary" id="button-addon2" onClick={lunchHandler} width="10px">
                        Add meal to list
                        </Button>
                    </InputGroup>
                </div>
                <div className= "meals">
                <Table> 
                <thead>
                <tr>
                        <th>Total Calories: </th>
                        <th id="count2">{totalL}</th>
                    </tr>
                </thead>
                   <tbody>
                      
                {/* {breakfastMeal.length > 0 && breakfastcalorie.length > 0 && breakfastMeal.map((meal) => <td><h3>{meal} </h3> </td> ) && breakfastcalorie.map((cal) => <td><h3>{cal} </h3> </td>)} */}
                           
                               {/* <td  id="Calories"></td> */}
                               <tr>
                                    <td id="head"> <h4>Meal</h4></td>
                                    <td id="head"><h4>Calories</h4></td>
                                </tr>

                               {lunchMeal.map(renderLunch)} 
                        
                </tbody>      
                
                </Table>  
                </div>

                
            </div>

            <div className="inner1">
            <div>
                <h1> Dinner </h1>
            <h4 id="quote">Search a meal and add it to the list!</h4>
            </div>
            <br/>
                <div id="breakfast">
                
                    <InputGroup>
                        <Form.Control
                      placeholder="Search Meal" type="text" value={dinner} onChange={event => setDinner(event.target.value)}
                        />
                         <Form.Control
                        placeholder="Quantity in gm" type="text" value={calD}onChange={event => setcalD(event.target.value)}
                            />
                        <Button variant="outline-secondary" id="button-addon2" onClick={dinnerHandler} width="10px">
                        Add meal to list
                        </Button>
                    </InputGroup>
                </div>
                <div className= "meals">
                <Table> 
                <thead>
                <tr>
                        <th>Total Calories: </th>
                        <th id="count3">{totalD}</th>
                    </tr>
                </thead>
                   <tbody>
                      
                {/* {breakfastMeal.length > 0 && breakfastcalorie.length > 0 && breakfastMeal.map((meal) => <td><h3>{meal} </h3> </td> ) && breakfastcalorie.map((cal) => <td><h3>{cal} </h3> </td>)} */}
                           
                               {/* <td  id="Calories"></td> */}
                               <tr>
                                    <td id="head"> <h4>Meal</h4></td>
                                    <td id="head"><h4>Calories</h4></td>
                                </tr>

                               {dinnerMeal.map(renderDinner)} 
                        
                </tbody>                     
                </Table>  
                </div>               
            </div>
            <Button variant="outline-secondary" id="button-addon2" onClick={ResetEntry} width="10px" disabled={alldis}>
                        That's All for the day!
                        </Button>
            </div>    

            {/* style={{ cursor: clicked === 1 ? "not-allowed" : "allowed" }} */}
        </div>
      </div>

  )


}

export default Calories
