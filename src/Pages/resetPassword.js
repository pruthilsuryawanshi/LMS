import React, { useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";

import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import FormHelperText from "@material-ui/core/FormHelperText";
import "./resetPassword.css";
function ResetPassword() {
  const [verified, setIsVerified] = useState(false);
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [msg, setMsg] = useState("");
  const [dispMsg, setDispMsg] = useState(false);
  const { token } = useParams();
  const [values, setValues] = useState({
    password: password,
    showPassword: false,
    confPassword: cpassword,
    showConfPassword: false,
  });
  function changePassword(e) {
    e.preventDefault();
    if (
      validatePassword(password) === null &&
      checkPassword(cpassword, password) === null
    ) {
      axios
        .post(`http://127.0.0.1:8000/api/user/resetpassword/`, {
          password: password,
          token: token,
        })
        .then((res) => {
          setMsg(res.data.msg);
          setIsVerified(true);
        })
        .catch((err) => {
          setDispMsg(true);
          setMsg(JSON.parse(err.response.data).msg);
        });
    } else {
      if (validatePassword(password) !== null) {
        setSecond(true);
      }
      if (checkPassword(cpassword, password) !== null) {
        setThird(true);
      }
    }
  }
  if (verified) {
    return <Redirect to="/login" />;
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickShowConfPassword = () => {
    setValues({ ...values, showConfPassword: !values.showConfPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  function validatePassword(password) {
    const n = password.length;
    const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"];
    var num = false;
    var lower = false;
    var upper = false;
    var special = false;
    for (var i = 0; i < n; i++) {
      if (password[i] >= 0 && password[i] <= 9) {
        num = true;
        continue;
      }
      if (password[i] >= "a" && password[i] <= "z") {
        lower = true;
        continue;
      }
      if (password[i] >= "A" && password[i] <= "Z") {
        upper = true;
        continue;
      }
      if (specialCharacters.includes(password[i])) {
        special = true;
        continue;
      }
    }

    var err_msg = "Please include ";
    if (!num) {
      err_msg += "one number, ";
    }
    if (!lower) {
      err_msg += "one lower case alphabet, ";
    }
    if (!upper) {
      err_msg += "one upper case alphabet, ";
    }
    if (!special) {
      err_msg += "one special character ";
    }

    if (n === 0) {
      return "Password cannot be empty";
    } else if (!num || !lower || !upper || !special) {
      return err_msg;
    } else if (n <= 7) {
      return "Password should contain atleast 8 characters";
    } else {
      return null;
    }
  }
  function checkPassword(cpassword, password) {
    if (cpassword !== password) {
      return "Passwords did not match";
    } else if (cpassword.length === 0) {
      return "Password cannot be empty";
    } else {
      return null;
    }
  }
  return (
    <Card className="reset-password">
      <CardContent>
        <div className="reset-title">
          <h1>Reset Password</h1>
        </div>
        <hr class="top-hr"></hr>
        <form>
          <div className="form-inputs">
            <FormControl>
              <InputLabel htmlFor="password" className="createAccountLabel">
                Password
              </InputLabel>
              <Input
                id="password"
                type={values.showPassword ? "text" : "password"}
                value={password}
                onBlur={() => setSecond(true)}
                onFocus={() => {
                  setSecond(false);
                  setDispMsg(false);
                }}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <FormHelperText>
                {second && validatePassword(password)}
              </FormHelperText>
            </FormControl>
          </div>

          <div className="form-inputs">
            <FormControl>
              <InputLabel htmlFor="confPassword" className="createAccountLabel">
                Confirm Password
              </InputLabel>
              <Input
                id="confPassword"
                type={values.showConfPassword ? "text" : "password"}
                value={cpassword}
                onBlur={() => setThird(true)}
                onFocus={() => {
                  setThird(false);
                  setDispMsg(false);
                }}
                onChange={(e) => setCPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showConfPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <FormHelperText>
                {third && checkPassword(cpassword, password)}
              </FormHelperText>
            </FormControl>
          </div>

          <div className="next-button">
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              onClick={changePassword}
            >
              Change Password
            </Button>
          </div>
          <p
            style={{
              color: "red",
              fontSize: "15px",
              marginTop: "5px",
              fontFamily: "sans-serif",
              textAlign: "center",
            }}
          >
            {dispMsg && "*" + msg}
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
export default ResetPassword;
