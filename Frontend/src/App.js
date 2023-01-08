import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp1 from './components/Signup1';
import Login1 from './components/Login1'
import Home from './components/Home'
import PrimeHome from './components/PrimeHome'
import LoggedOutHome from './components/LoggedOutHome'
import PaymentPage from './components/PaymentPage';
import ConfirmPayment from './components/ConfirmPayment';
import BMICalculator from './components/BMICalculator';
import DietPlan from './components/DietPlan';
import WorkoutPlan1 from './components/WorkoutPlan';
import Calorie from './components/Calories';
function App() {
  return (
    <Router>
      <div>
        <div>
          <Routes>
            <Route exact path="/" element={<LoggedOutHome />} />
            <Route path="/logout" element={<LoggedOutHome />} />
            <Route path="/login" element={<Login1 />} />
            <Route path="/sign-up" element={<SignUp1 />} />
            <Route path="/home" element={<Home />} />
            <Route path="/primehome" element={<PrimeHome />} />
            <Route path="/bmi" element={<BMICalculator />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/confirmpayment" element={<ConfirmPayment />} />
            <Route path="/pdiet" element={<DietPlan />} />
            <Route path="/pwork" element={<WorkoutPlan1 />} />
            <Route path="/calorie" element={<Calorie />} />
          </Routes>

        </div>
      </div>

    </Router>
  )

}
export default App;
