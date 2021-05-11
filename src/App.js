import React  from "react";
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import LandingPage from "./Pages/LandingPage";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import PersonalDetails from './SignupForms/PersonalDetails'
import EducationalDetails from './SignupForms/EducationalDetails'
import AdminDashboard from './dashboard/AdminDashboard'
import './App.css'
import TeacherLogin from "./dashboard/TeacherLogin";
import TeacherDashboard from "./dashboard/TeacherDashboard";
import StudentDashboard from "./dashboard/StudentDashboard";
import AdminLogin from "./dashboard/AdminLogin";
import {getCookie} from './Pages/cookies'
const isStudent = getCookie("student")

const isTeacher = getCookie("teacher")
const PrivateRoute = ({ component: Component,  ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isStudent === "true" ? (<Component {...props} />)  : (<Redirect to={{ pathname: "/login" }} />)
    }
  />
);
const TeacherRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isTeacher === "true" ? (<Component {...props} />) : (<Redirect to={{ pathname: "/teacherlogin" }} />)
    }
  />
);
function App() {
  return (
    <Router>
    <div>

    
    <Switch>
    <Route path='/' exact component={LandingPage}/>
    <Route path='/login' component={Login}/>
    <Route path='/signup' component={Signup}/>
    <Route path='/personaldetails' component={PersonalDetails}/>
    <Route path='/educationaldetails' component={EducationalDetails}/>
    <Route path='/adminlogin' component={AdminLogin}/>
    <Route path='/teacherlogin' component={TeacherLogin}/>
    <Route path='/admindashboard' component={AdminDashboard}/>
    <TeacherRoute path='/teacherdashboard' component={TeacherDashboard}/>
    <PrivateRoute path='/studentdashboard' component={StudentDashboard}/>


    {/* <Route path='/requestdemo' component={RequestDemo}/> */}
    </Switch>

    </div>
  </Router>
   
    
  );
}

export default App;
