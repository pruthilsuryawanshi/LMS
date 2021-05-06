import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./Signup.css";

const PersonalDetails = ({ nextStep, previousStep, details, editDetails }) => {
  const [firstName, setFirstName] = useState(details.firstname);
  const [lastName, setLastName] = useState(details.lastname);
  const [phoneNumber, setMobileNumber] = useState(details.phoneNumber);
  // const [isAgree, setAgree] = useState(details.isAgree);
  // const [isChecked, setIsChecked] = useState(false);

  function handleNext(e) {
    e.preventDefault();
    if (
      validateFirstName(firstName) === null &&
      validateLastName(lastName) === null &&
      validatePhoneNumber(phoneNumber) === null
    ) {
      nextStep();
      const temp = {
        ...details,
        firstname: firstName,
        lastname: lastName,
        phoneNumber: phoneNumber,
        // isAgree: isAgree,
      };
      editDetails(temp);
    } else {
      if (validateFirstName(firstName) !== null) {
        setFirst(true);
      }
      if (validateLastName(lastName) !== null) {
        setSecond(true);
      }
      if (validatePhoneNumber(phoneNumber) !== null) {
        setThird(true);
      }
      // if (!isAgree) {
      //   setIsChecked(true);
      // }
    }
  }
  function handlePrev(e) {
    e.preventDefault();
    const temp = {
      ...details,
      firstname: firstName,
      lastname: lastName,
      phoneNumber: phoneNumber,
    };
    editDetails(temp);
    previousStep();
  }
  function validateFirstName(firstName) {
    var pattern = new RegExp(/^[A-Za-z]{3,12}$/);
    if (!firstName) {
      return "First Name cannot be empty";
    } else if (!pattern.test(firstName)) {
      return "Please enter valid First Name";
    } else {
      return null;
    }
  }
  function validateLastName(lastName) {
    var pattern = new RegExp(/^[A-Za-z]{3,12}$/);
    if (!lastName) {
      return "Last Name cannot be empty";
    } else if (!pattern.test(lastName)) {
      return "Please enter valid Last Name";
    } else {
      return null;
    }
  }
  function validatePhoneNumber(mobileNumber) {
    var pattern = new RegExp(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    );
    if (!mobileNumber) {
      return "Phone Number cannot be empty";
    } else if (!pattern.test(mobileNumber)) {
      return "Please enter valid phone number";
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
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  return (
    <React.Fragment>
      <Card className="SignupCard">
        <CardContent>
          <div className="PersonalDetailsTitle">
            <h1>Personal Details</h1>
          </div>
          <hr class="top-hr"></hr>
          <form>
            <div className="form-inputs">
              <TextField
                error
                id="firstName"
                label="First Name"
                value={firstName}
                helperText={first && validateFirstName(firstName)}
                onBlur={() => setFirst(true)}
                onFocus={() => setFirst(false)}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="form-inputs">
              <TextField
                error
                id="lastName"
                label="Last Name"
                value={lastName}
                helperText={second && validateLastName(lastName)}
                onBlur={() => setSecond(true)}
                onFocus={() => setSecond(false)}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="form-inputs">
              <TextField
                error
                id="mobile"
                label="Mobile Number"
                value={phoneNumber}
                helperText={third && validatePhoneNumber(phoneNumber)}
                onBlur={() => setThird(true)}
                onFocus={() => setThird(false)}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>

            {/* <div className="CreateAccountCheckbox">
              <FormControlLabel
                control={
                  <Checkbox
                    error
                    checked={isAgree}
                    onChange={(e) => {setAgree(e.target.checked);setIsChecked(false)} }
                    // helperText={isChecked && "Please agree to the Terms & Conditions"}
                    name="checkedB"
                    color="primary"
                    type="checkbox"
                  />
                }
                    label="I agree to the Terms & Conditions"
              /> */}
            {/* <FormHelperText> */}
            {/* {isChecked && (
                <p className="tncerror">
                  Please agree to the Terms & Conditions
                </p>
              )} */}
            {/* </FormHelperText> */}
            {/* </div> */}

            <div className="doublebuttons">
              <Button
                variant="contained"
                color="secondary"
                onClick={handlePrev}
                className="back-button prev-button"
              >
                Back
              </Button>

              <Button
                variant="contained"
                color="secondary"
                className="back-button sub-button"
                onClick={handleNext}
              >
                Next
              </Button>
            </div>
          </form>

          <div className="orLogin">
            <div className="hero">
              <span className="hr"></span>
              <p>Or log in using</p>
              <span class="hr"></span>
            </div>
            <div className="faceG">
              <img src="Images/Facebook.svg" alt="" />
              <img src="Images/Gmail Icon.svg" alt="" />
              <p>
                Already a member?
                <Link to="/login">
                  <span className="blue"> Log In</span>
                </Link>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
export default PersonalDetails;
