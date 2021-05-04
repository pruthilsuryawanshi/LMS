import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import "../Dashboard.css"




const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    button: {
        margin: theme.spacing(1),
      },
  },
}));

const AddStudent = () => {

    const [firstname,setfirstName] = useState("");
    const [lastname,setlastName]  = useState("");
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [gender,setGender] = useState('');
    const [phone,setPhone] = useState('');
    const [standard,setStandard] = useState('');
    const [state,setState] = useState('');

    function handleSubmit(e){
        e.preventDefault()
          axios.post("http://127.0.0.1:8000/api/token/",{
            
            firstname:firstname,
            lastname:lastname,
            email: email,
            password: password,
            gender:gender,
            phone:phone,
            standard:standard,
            state:state
            
          }).then((res) => {
            console.log(res);
            localStorage.setItem('access_token', res.data.access_token);
            localStorage.setItem('refresh_token', res.data.refresh_token);}
            )
          
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
                              <input class="form-control" id="firstname" type="text" placeholder="First Name" name="firstname" 
                              value={firstname}
                              onChange={(e) => setfirstName(e.target.value) }
                              required />
                          </div>
                      </div>
                      <div class="col-md-6 mb-3">
                          <div>
                              <label for="last_name">Last Name</label>
                              <input class="form-control" id="lastname"
                              name="lastname" value={lastname}
                              onChange={(e) => setlastName(e.target.value) }
                              type="text" placeholder="Last Name" required />
                          </div>
                      </div>
                  </div>
                  <div class="row align-items-center">
                      <div class="col-md-6 mb-3">
                      <div class="form-group">
                              <label for="email">Email</label>
                              <input class="form-control" id="email" type="email" 
                              name="email" value={email}
                              onChange={(e) => setEmail(e.target.value) }
                              placeholder="name@company.com" required /> 
                          </div>
                      </div>
                      <div class="col-md-6 mb-3">
                      <div class="form-group">
                              <label for="password">Password</label>
                              <input class="form-control" id="password" 
                              name="password" value={password}
                              onChange={(e) => setPassword(e.target.value) }
                              type="password" placeholder="" required /> 
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-6 mb-3">
                          <label for="gender">Gender</label>
                          <select class="form-select mb-0" id="gender" 
                          name="gender" 
                          value={gender}
                          onChange={(e) => {
                            setGender(e.target.value);
                          }}
                          aria-label="Gender select example">
                              <option selected>Gender</option>
                              <option value={"Female"}>Female</option>
                              <option value={"Male"}>Male</option>
                          </select>
                      </div>
                      <div class="col-md-6 mb-3">
                          <div class="form-group">
                              <label for="phone">Mobile Number</label>
                              <input class="form-control" id="phone"
                               type="number" name="phone"
                               value={phone} 
                               onChange={(e) => setPhone(e.target.value) }
                               placeholder="+12-345 678 910" required />
                          </div>
                      </div>

                  </div>
                  <div class="row db-row">
                      <div class="col-md-6 mb-3">
                          <label for="class">Class</label>
                          <select class="form-select mb-0" id="class" 
                          value={standard}
                          name="standard" onChange={(e) => setStandard(e.target.value)}
                          aria-label="Gender select example">
                              <option selected>Class</option>
                              <option value={"1"}>1st</option>
                              <option value={"2"}>2nd</option>
                              <option value={"3"}>3rd</option>
                              <option value={"4"}>4th</option>
                              <option value={"5"}>5th</option>
                              <option value={"6"}>6th</option>
                              <option value={"7"}>7th</option>
                              <option value={"8"}>8th</option>
                              <option value={"9"}>9th</option>
                              <option value={"10"}>10th</option>
                          </select>
                      </div>
                      <div class="col-md-6 mb-3">
                          <label for="state">State</label>
                          <select class="form-select mb-0" id="state" 
                          name="state" value={state} onChange={(e)=>{setState(e.target.value)}}
                          aria-label="Gender select example">
                              <option selected>State</option>
                              <option value={"Andaman & Nicobar Islands"}>Andaman & Nicobar Islands</option>
                              <option value={"Andhra Pradesh"}>Andhra Pradesh</option>
                              <option value={"Arunachal Pradesh"}>Arunachal Pradesh</option>
                              <option value={"Assam"}>Assam</option>
                              <option value={"Bihar"}>Bihar</option>
                              <option value={"Chandigarh"}>Chandigarh</option>
                              <option value={"Chhattisgarh"}>Chhattisgarh</option>
                              <option value={"Delhi"}>Delhi</option>
                              <option value={"Goa"}>Goa</option>
                              <option value={"Gujarat"}>Gujarat</option>
                              <option value={"Haryana"}>Haryana</option>
                              <option value={"Himachal Pradesh"}>Himachal Pradesh</option>
                              <option value={"Jammu & Kashmir"}>Jammu & Kashmir</option>
                              <option value={"Jharkhand"}>Jharkhand</option>
                              <option value={"Karnataka"}>Karnataka</option>
                              <option value={"Kerala"}>Kerala</option>
                              <option value={"Ladakh"}>Ladakh</option>
                              <option value={"Lakshadweep"}>Lakshadweep</option>
                              <option value={"Madhya Pradesh"}>Madhya Pradesh</option>
                              <option value={"Maharashtra"}>Maharashtra</option>
                              <option value={"Manipur"}>Manipur</option>
                              <option value={"Meghalaya"}>Meghalaya</option>
                              <option value={"Mizoram"}>Mizoram</option>
                              <option value={"Nagaland"}>Nagaland</option>
                              <option value={"Odisha"}>Odisha</option>
                              <option value={"Pondicherry"}>Pondicherry</option>
                              <option value={"Punjab"}>Punjab</option>
                              <option value={"Rajasthan"}>Rajasthan</option>
                              <option value={"Sikkim"}>Sikkim</option>
                              <option value={"Tamil Nadu"}>Tamil Nadu</option>
                              <option value={"Telangana"}>Telangana</option>
                              <option value={"Tripura"}>Tripura</option>
                              <option value={"Uttar Pradesh"}>Uttar Pradesh</option>
                              <option value={"Uttarakhand"}>Uttarakhand</option>
                              <option value={"West Bengal"}>West Bengal</option>
                          </select>
                      </div>
                  </div>
                  <div class="mt-3">
                  <Button
                  variant="contained"
                  color="primary"
                  size='small'
                  type="submit"
                  onClick={handleSubmit}
                  className={classes.button}
                  startIcon={<SaveIcon />}>
                  Save
                 </Button>
          <Button
              variant="contained"
              color="default"
              size='small'
              className={classes.button}
              type="submit"
              startIcon={<DeleteIcon />}
          >
              Delete
          </Button>
                  </div>
              </form>
          </div>
      </div>
      </div>

   );
}

export default AddStudent
