import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import './paymentpage.css';

function ConfirmPayment(props) {
    const navigate = useNavigate()
    const location=useLocation()
    const [result,setResult]=useState(location.state)
    console.log(result)
    result.prime=true
    useEffect(()=>{
        console.log(result)
        axios.put(`http://localhost:8084/user_details/${result.email}`, result)
        console.log(result)
        navigate('/primehome', { state: result })
    },[result.email])
    return (
        <div className=" d-flex justify-content-center align-items-center">
            Prime Account Bought
        </div>
    )
}

export default ConfirmPayment
