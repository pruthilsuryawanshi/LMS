import React, { useState} from "react";
// import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import FeatherIcon from "feather-icons-react";
import "./Admin.css";
import axios from 'axios'
const AdminLogin = () => {  

  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkedB,setCheckedB] = useState(false)
  const [first,setFirst] = useState(false)


  
  
  function handleSubmit(e){
    e.preventDefault()

    if(validateEmail(email) === null){
      
      axios.post("http://127.0.0.1:8000/api/admin/api/token/",{
        
        email: email,
        password: password,
        
      }).then((res) => {
        console.log(res);
        localStorage.setItem('access_token', res.data.access_token);
        localStorage.setItem('refresh_token', res.data.refresh_token);}
        )
      
      
    }
  }
 
  function validateEmail(email) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (email.length === 0) {
      return "Email cannot be empty"
    }
    else if (!pattern.test(email)) {
      return "Please enter valid email address";
    }
    else {
      return null
    }

  }
  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: ' #57bb71',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: ' #57bb71',
      },
      '& .MuiInput-underline:before': {
        borderBottomColor: ' #57bb71',
      },
      input:{
        textIndent:'1rem'
      }
    },
  })(TextField);

 
 
  return (

    <div className="auth-wrapper">
    <div className="auth-content">
      <div className="auth-bg">
        <span className="r"></span>
        <span className="r s"></span>
        <span className="r s"></span>
        <span className="r"></span>
      </div>
      <div className="card">
        <div className="card-body text-center">
          <div className="mb-4">
            <FeatherIcon
              icon="unlock"
              className="auth-icon"
              size={34}
              style={{
                color: "linear-gradient(-135deg, #1de9b6 0%, #1dc4e9 100%);",
              }}
            />
          </div>
          <h3 style={{paddingBottom:'1rem'}}>Login</h3>

          <form>
            <input
              type="hidden"/>

            <div className="input-group mb-3">
              <TextField 
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
                variant="outlined"
                required
                id="email"
                helperText={first && validateEmail(email)} onBlur={() =>  setFirst(true)}  onFocus={()=> setFirst(false)} value={email} onChange={(e) => setEmail(e.target.value) } style={{backgroundColor:'#fff'}}
              />
            </div>

            <div className="input-group">
            <TextField
            type="password"
            name="password"
            placeholder="Password"
            className="form-control"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            id="password"
            style={{backgroundColor:'#fff',textIndent:'1rem'}}
            
          />
            </div>

            <div class="checkdetails">
             <div className='LoginCheckbox'>    
              <FormControlLabel className="some"
                control={
                <Checkbox
                  checked={checkedB}
                  onChange={(e) => setCheckedB(e.target.checked)}
                  name="checkedB"
                  color="primary"
                />
              }
               label="Save Details"
            />
          
      </div>
          <Link to="/forgotpassword">
          <h6 class="blue forget-password forgot-pass" style={{ fontSize: '1rem' }}>Forgot Password?</h6></Link>
        </div>

            <Link to="/admindashboard">
              <button
                type="submit"
                name="login"
                onClick={handleSubmit}
                className="btn btn-primary shadow-2 mb-4"
              >
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  </div>
    




  );
};

export default AdminLogin;

