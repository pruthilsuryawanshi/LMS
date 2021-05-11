import React, { useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import axios from "axios";
function Activate() {
  const [verified, setIsVerified] = useState(false);

  const { token } = useParams();
  function verify_account() {
    axios.get(`http://127.0.0.1:8000/api/user/verify/${token}`).then((res) => {
      if (res.status !== 403 && res.status !== 400) {
        setIsVerified(true);
      }
    });
  }
  if (verified) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="container">
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ marginTop: "200px" }}
      >
        <h1>Verify your Account:</h1>
        <button
          onClick={verify_account}
          style={{ marginTop: "50px" }}
          type="button"
          className="btn btn-primary"
        >
          Verify
        </button>
      </div>
    </div>
  );
}
export default Activate;
