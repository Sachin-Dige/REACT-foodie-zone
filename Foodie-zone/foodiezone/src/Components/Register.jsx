import React, { useState } from 'react';
// import Signin from "./Signin";
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import './Register.css'
function Register() {

  const [fname, setFname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit() {
    let validationFlag = true;

    if (!fname) {
      document.getElementById("fnameError").innerHTML = "User-name is required.";
      validationFlag = false
    } else if (fname.length > 15) {
      document.getElementById("fnameError").innerHTML = "Name should be maximum 15 characters.";
      validationFlag = false
    } else {
      document.getElementById("fnameError").innerHTML = "";
    }

    if (!email) {
      document.getElementById("emailError").innerHTML = "Email is required.";
      validationFlag = false
    } else if (!validateWithPatternEmail(email)) {
      document.getElementById("emailError").innerHTML = "Email should be a valid.";
      validationFlag = false
    } else {
      document.getElementById("emailError").innerHTML = "";
    }

    if (!password) {
      document.getElementById("passwordError").innerHTML = "Password is required.";
      validationFlag = false
    } else if (password.length < 6) {
      document.getElementById("passwordError").innerHTML = "Password should be at least 6 characters.";
      validationFlag = false
    } else {
      document.getElementById("passwordError").innerHTML = "";
    }

    if (!repassword) {
      document.getElementById("repasswordError").innerHTML = "Confirm Password is required";
      validationFlag = false
    } else if (password !== repassword) {
      document.getElementById("passwordError").innerHTML = "Password is not matched.";
      validationFlag = false
    } else {
      document.getElementById("passwordError").innerHTML = "";
    }

    if (!phone) {
      document.getElementById("phoneError").innerHTML = "Phone number is required.";
      validationFlag = false
    } else if (phone.length > 10 || phone.length < 10) {
      document.getElementById("phoneError").innerHTML = "Phone number should be of 10 digit.";
      validationFlag = false
    } else {
      document.getElementById("phoneError").innerHTML = "";
    }

    if (!validationFlag) {
      return false
    }

    let headerList = {
      "Content-Type": "application/json"
    }

    let bodyContent = JSON.stringify({
      "name": fname,
      "phone": phone,
      "email": email,
      "password": password,
      "repassword": repassword,
    });

    fetch("http://localhost:4000/users/register", {
      method: "POST",
      body: bodyContent,
      headers: headerList
    }).then(function (data) {
      console.log(data);
    })
    // window.location.pathname="/";
    navigate("/");
    return false


  }
  function validateWithPatternEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <> <Navbar />
      <div className='register_bgimg'>
        <br />
        <h2 className='register_header'>Registration FORM</h2>
        <div className="register_centerdiv">

          <div className="form-group">
            <br />

            <input
              type="text"
              className="register_inputbox"
              placeholder="Enter Full Name"
              name="fname"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </div> <small id="fnameError" ></small> <br /><br />

          <div className="form-group">
            <input
              type="Phone"
              className="register_inputbox"
              placeholder="Enter contact no."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div> <small id="phoneError" ></small><br /><br />

          <div className="form-group">
            <input
              type="email"
              className="register_inputbox"
              placeholder="Enter email"
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
          </div><small id="emailError"></small> <br /><br />

          <div className="form-group">
            <input
              type="password"
              className="register_inputbox"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div> <small id="passwordError" ></small> <br /><br />

          <div className="form-group">
            <input
              type="re-password"
              className="register_inputbox"
              placeholder="Re-Enter password"
              value={repassword}
              onChange={(e) => setRepassword(e.target.value)}
            />
          </div> <small id="passwordError" ></small> <br /><br />

          <button type="submit" onClick={handleSubmit} className="register_register-btn">
            Register
          </button> <br />

          <p className="or">OR</p>

          <p className="question"><Link to='/Signin' className="question">Already Registered LOGIN ?</Link></p>


          {/*            <Alert color="primary" variant="danger">
                  PLEASE FILLED EVERY REQUIREMENT FIELD!
                </Alert>
 
               */}
        </div>
      </div>
    </>
  );
}


export default Register
