import React, { useEffect, useState } from "react";
// import { BiFontSize } from "react-icons/bi";

import { Link, useNavigate} from 'react-router-dom'
import Navbar from "./Navbar";
import './Signin.css'
function Signin({authenticate}) {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [records, setRecords] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    getUsers()
  }, [])
  
  const getUsers = async()=>{
    let result = await fetch("http://localhost:4000/users/show");
    result = await result.json();
    setRecords(result)
  }

  function handleSubmitLogin(){
    let validationFlag = true;
      
    
    // let userList=JSON.parse(localStorage.getItem('userList'));
    
    if (!email) {
      document.getElementById("emailError").innerHTML = "Email is required.";
      validationFlag = false
    } else if (!validateWithPatternEmail(email)) {
      document.getElementById("emailError").innerHTML = "Email is not valid";
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
    
    if (!validationFlag) {
      return false
    }
    
    for(let user of records) {
         if(user.email === email && user.password === password){
           
           localStorage.setItem("isLogin",true);
           document.getElementById("incorrect").innerHTML=""
          authenticate();
          navigate("/home");
          return false
        }else{    
          
          document.getElementById("incorrect").innerHTML="Email or Password is Invalid!!"    
          validationFlag = false
          
        }     
    }
  
   
    
  }
  function validateWithPatternEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


  return (<>
<div className="login_bgimg">
<Navbar/>
      <div className="centerdiv">

          <p className="heading">LOGiN</p>
        
          <div>
            <small id="incorrect"></small>
          <br />
        
            <input
              type="email"
              className="inputbox"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div> <small id="emailError"></small><br/><br />

          <div className="form-group">
            <input
              type="password"
              className="inputbox"
              placeholder="Enter password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div> <small id="passwordError"></small><br/>

          <button type="button" className="login-btn" onClick={handleSubmitLogin}>
            LogIn
          </button> <br/>

          <p className="or">OR</p>

          <p className="question"><Link to='/Register' className="question">Create New Account ?</Link></p>


  </div>

</div></>
  );

}
export default Signin





