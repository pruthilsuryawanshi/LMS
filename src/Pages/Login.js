import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import axios from "axios";
import "./Login.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkedB, setCheckedB] = useState(false);
  const [first, setFirst] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (validateEmail(email) === null) {
      axios
        .post("http://127.0.0.1:8000/api/student/api/token/", {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res);
          localStorage.setItem("access_token", res.data.access_token);
          localStorage.setItem("refresh_token", res.data.refresh_token);
        });
    }
  }

  function validateEmail(email) {
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (email.length === 0) {
      return "Email cannot be empty";
    } else if (!pattern.test(email)) {
      return "Please enter valid email address";
    } else {
      return null;
    }
  }

  const CssTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: " #57bb71",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: " #57bb71",
      },
      "& .MuiInput-underline:before": {
        borderBottomColor: " #57bb71",
      },
    },
  })(TextField);

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Header />
      <div class="green-bg"></div>
      <div class="white-bg"></div>

      <div class="container-fluid">
        <div class="row nav-bar">
          <div class="col-3 nav-left">
            <Link to="/">
              <img
                src="Images/navbar logo.svg"
                alt="kg-logo"
                class="nav-logo"
              />
            </Link>
          </div>
        </div>
      </div>

      <div class="row container-fluid mainContent">
        <div class="mainLeftLogin col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div class="mainLeftContentLogin d-md-none d-lg-block">
            <img src="Images/Login Illustration.svg" alt="" />
            <p>
              To get exciting discounts, offers, free study resources, <br />{" "}
              special programs from Kids Galaxy
              <span class="blue"> Sign Up here.</span>
            </p>
          </div>
        </div>
        <div class="middleLineLogin d-md-none d-lg-block"></div>
        <div class="mainRightLogin col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          {/* <div class="card loginCardLogin">
            <div class="cardContentLogin"> */}
          <Card className="LoginCard">
            <CardContent>
              <div class="LoginTitle">
                <h1>Log In</h1>
              </div>
              <hr class="top-hr"></hr>
              <form>
                <div className="form-inputs">
                  <TextField
                    id="email"
                    name="email"
                    value={email}
                    helperText={first && validateEmail(email)}
                    onBlur={() => setFirst(true)}
                    onFocus={() => setFirst(false)}
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email"
                    style={{ color: "#57bb71" }}
                  />
                </div>

                <div className="form-inputs">
                  <FormControl>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                      id="password"
                      type={values.showPassword ? "text" : "password"}
                      value={password}
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {values.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </div>

                <div class="checkbox">
                  {/* <div class="rememberBox">
                    <input type="checkbox" />
                    <p class="blue">Remember me</p>
                  </div> */}
                  <div className="LoginCheckbox">
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkedB}
                          onChange={(e) => setCheckedB(e.target.checked)}
                          name="checkedB"
                          color="primary"
                        />
                      }
                      label="Remember Me"
                    />
                  </div>
                  <p class="blue forget-password" style={{ fontSize: "1rem" }}>
                    Forgot Password
                  </p>
                </div>

                <div className="next-button">
                  <Link to="/studentdashboard">
                    <Button
                      variant="contained"
                      color="secondary"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      LogIn
                    </Button>
                  </Link>
                </div>
              </form>

              <div class="orLogin">
                <div class="hero">
                  <span class="hr"></span>
                  <p>Or log in using</p>
                  <span class="hr"></span>
                </div>
                <div class="faceG">
                  <img src="Images/Facebook.svg" alt="" />
                  <img src="Images/Gmail Icon.svg" alt="" />
                  <p>
                    New User?
                    <a href="{}">
                      <Link to="/signup">
                        <span class="blue"> Sign Up</span>
                      </Link>
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
