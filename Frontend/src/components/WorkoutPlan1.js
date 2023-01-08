import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'

function WorkoutPlan(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const [result, setResult] = useState(location.state);

    let bmi = ((result.weight) * 10000 / (result.height * result.height));
    if (bmi < 18.5) {
        return (
            <div>
                UNDERWEIGHT
            </div>
        )
    }
    else if (25 < bmi && bmi < 29.9) {
        return (
            <div>
                OVERWEIGHT
            </div>
        )
    }
    else if (18.5 < bmi && bmi < 24.9) {
        return (
            <div>
                HEALTHY
            </div>
        )
    }
    else if (bmi > 30) {
        return (
            <div>
                OBESE
            </div>
        )
    }


}
export default WorkoutPlan