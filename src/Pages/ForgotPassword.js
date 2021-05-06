import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./forgotPassword.css";
function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [dispMsg, setDispMsg] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    // axios
    //   .post("http://127.0.0.1:8000/api/user/forgetpassword/", { email: email })
    //   .then((res) => setDispMsg(false))
    //   .catch((err) => {
    //     setDispMsg(true);
    //     setMsg(JSON.parse(err.response.data).msg);
    //   });
  }
  return (
    <div className="container padding-bottom-3x mb-2 mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="forgot">
            <h2>Forgot your password?</h2>
          </div>
          <form className="card mt-4 main">
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="email-for-pass">Enter your email address</label>
                <input
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setDispMsg(false)}
                  type="text"
                  id="email-for-pass"
                  required=""
                />
                <small className="form-text text-muted">
                  Enter the email address you used during the registration on
                  kidsgalaxy.co.in. Then we'll email a link to this address.
                </small>{" "}
              </div>
            </div>
            <div className="card-footer bottom">
              <button
                className="btn btn-success"
                type="submit"
                onClick={handleSubmit}
              >
                Get New Password
              </button>
              <Link to="/login">
                <button className="btn btn-danger" type="submit">
                  Back to Login
                </button>{" "}
              </Link>
            </div>
          </form>
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
        </div>
      </div>
    </div>
  );
}
export default ForgotPassword;
