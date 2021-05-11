import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";
import "../Dashboard.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    button: {
      margin: theme.spacing(1),
    },
  },
}));

const AddAdmin = () => {
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [permission, setPermission] = useState([]);

  const Permission = () => {
    axios
      .get("http://www.json-generator.com/api/json/get/cfZrBzpZhK?indent=2")
      .then((res) => {
        console.log(res);
        setPermission(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/token/", {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        gender: gender,
        phone: phone,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("refresh_token", res.data.refresh_token);
      });
  }

  const classes = useStyles();

  return (
    // <form className={classes.root} noValidate autoComplete="off">
    //    <TextField id="outlined-basic" label="First Name" />
    //    <TextField id="outlined-basic" label="Last Name" />
    //    <TextField id="outlined-basic" label="Email" />
    //    <TextField id="outlined-basic" label="Password" />
    //    <TextField id="outlined-basic" label="Phone Number" />
    //    <TextField id="outlined-basic" label="Board" />
    // </form>

    <div class="row">
      <div class="col-12 col-xl-8">
        <div class="card card-body shadow-sm mb-4">
          <h2 class="h5 mb-4">General information</h2>
          <form>
            <div class="row">
              <div class="col-md-6 mb-3">
                <div>
                  <label for="first_name">First Name</label>
                  <input
                    class="form-control"
                    id="firstname"
                    type="text"
                    placeholder="First Name"
                    name="firstname"
                    value={firstname}
                    onChange={(e) => setfirstName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <div>
                  <label for="last_name">Last Name</label>
                  <input
                    class="form-control"
                    id="lastname"
                    name="lastname"
                    value={lastname}
                    onChange={(e) => setlastName(e.target.value)}
                    type="text"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-md-6 mb-3">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    class="form-control"
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    required
                  />
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    class="form-control"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder=""
                    required
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="gender">Gender</label>
                <select
                  class="form-select mb-0"
                  id="gender"
                  name="gender"
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  aria-label="Gender select example"
                >
                  <option selected>Gender</option>
                  <option value={"Female"}>Female</option>
                  <option value={"Male"}>Male</option>
                </select>
              </div>
              <div class="col-md-6 mb-3">
                <div class="form-group">
                  <label for="phone">Mobile Number</label>
                  <input
                    class="form-control"
                    id="phone"
                    type="number"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+12-345 678 910"
                    required
                  />
                </div>
              </div>
            </div>

            <div class="mt-3">
              <Button
                variant="contained"
                color="primary"
                size="small"
                type="submit"
                onClick={handleSubmit}
                className={classes.button}
                startIcon={<SaveIcon />}
              >
                Save
              </Button>
              <Button
                variant="contained"
                color="default"
                size="small"
                className={classes.button}
                type="submit"
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="small"
                type="button"
                onClick={Permission}
                className={classes.button}
                startIcon={<SaveIcon />}
              >
                Permissions
              </Button>
              {permission && (
                <ul>
                  {permission.map((per) => (
                    <li key={per.id}>
                      {per.name}
                      {per.codename}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
