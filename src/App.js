import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import PersonalDetails from "./SignupForms/PersonalDetails";
import EducationalDetails from "./SignupForms/EducationalDetails";
import AdminDashboard from "./dashboard/AdminDashboard";
import "./App.css";
import TeacherLogin from "./dashboard/TeacherLogin";
import TeacherDashboard from "./dashboard/TeacherDashboard";
import StudentDashboard from "./dashboard/StudentDashboard";
import AdminLogin from "./dashboard/AdminLogin";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/resetPassword";
import Activate from "./Pages/activate";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route path="/resetpassword" component={ResetPassword} />
          <Route path="/activate" component={Activate} />
          <Route path="/signup" component={Signup} />
          <Route path="/adminlogin" component={AdminLogin} />
          <Route path="/teacherlogin" component={TeacherLogin} />
          <Route path="/admindashboard" component={AdminDashboard} />
          <Route path="/teacherdashboard" component={TeacherDashboard} />
          <Route path="/studentdashboard" component={StudentDashboard} />

          {/* <Route path='/requestdemo' component={RequestDemo}/> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
