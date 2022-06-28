import React, { useState } from 'react'
import Navbar from './Navbar'

import { Link} from 'react-router-dom';
import './About.css'
const About = () => {
  const [cname, setCname] = useState("");
  const [cemail, setCemail] = useState("");
  const [message, setMessage] = useState("");

  // const navigate = useNavigate();
  function handleSubmit(e) {
    //  e.preventDefault();

    let validationFlag = true;
    
    if (!cname) {
      document.getElementById("cnameError").innerHTML = "User-name is required.";
      validationFlag = false
    } else {
      document.getElementById("cnameError").innerHTML = "";
    }

    if (!cemail) {
      document.getElementById("cemailError").innerHTML = "Email is required.";
      validationFlag = false
    } else if (!validateWithPatternEmail(cemail)) {
      document.getElementById("cemailError").innerHTML = "Email should be a valid.";
      validationFlag = false
    } else {
      document.getElementById("cemailError").innerHTML = "";
    }
  
    if (!message) {
      document.getElementById("messageError").innerHTML = "Message is required.";
      validationFlag = false
    }else if (message.length > 30) {
        document.getElementById("messageError").innerHTML = "Message is too large.";
        validationFlag = false
    } else {
      document.getElementById("messageError").innerHTML = "";
    }


    let headersList = {
      "Content-Type": "application/json"
     }
     
     let bodyContent = JSON.stringify({
         "name": cname,
         "email": cemail,
         "message": message
     });
     
     fetch("http://localhost:4000/contact_users/contact", { 
       method: "POST",
       body: bodyContent,
       headers: headersList
     }).then(function(data) {
       console.log(data);
     })
    //  navigate('/register');
    
  }
  
  function validateWithPatternEmail(cemail) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(cemail).toLowerCase());
  }

  return (
<> 
    <div className='aboutbg'>
<Navbar/> 
      <div className='header' >
      <h1 className='about_title'>About us</h1>
      <div className='about_title_underline'></div>
      <h2 className='header1'>Have No Idea</h2>
      <h2 className='header2'>To  <span style={{color:"red"}}>Cook New Dishes</span> Regualarly ?</h2>


      <h4 className='para'>As We Are Here  <span><Link to="/home" className='home_link'> Foodie~Zone</Link></span> For Solve Your This Problems B'coz <br /> We Are Providing Best And Delicious Food Recipes <br /> From All Over The 
      World And <br /> Also In Your Native Languages....😊 

         </h4>
      </div>



{/*------------------------ CONTACT FORM --------------------------*/}


    <div className="screen">
      <div className="screen-header">
      </div>
      <form className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            CONTACT US
          </div>
          <div className="app-contact">CONTACT INFO : +62 123 456 789</div>
        </div> 
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <div className='contact_header'>Let's Get In Touch</div>
              </div>
              
              <input className="app-form-control" placeholder="NAME"
               type="text" name="cname" value={cname} 
               onChange={(e) => {setCname(e.target.value)}}
               required/>
            <small id="cnameError" ></small> <br />

            {/* <div className="app-form-group"> */}
              <input className="app-form-control" placeholder="EMAIL"  
              type="email" name="cemail" value={cemail} 
              onChange={(e) => {setCemail(e.target.value)}}
              required/>
            {/* </div> */}
            <small id="cemailError" ></small> <br />
            
            {/* <div className="app-form-group message"> */}

              <input className="app-form-control" placeholder="MESSAGE" 
              type="text" name="message" value={message} 
              onChange={(e) => {setMessage(e.target.value)}}
              required/>
            {/* </div> */}
            <small id="messageError" ></small> <br />

            <div className="app-form-group buttons">
              <button className="app-form-button" type='submit' onClick={handleSubmit} >SEND</button>
            </div>
            
          </div>
        </div>
      </form><br /><br />
  <div className="footer_bottom">
        &copy; Foodie~Zone.com | Designed by <span className='name'>
        SACHiN DiGE</span>
      </div>
  </div>

    </div>
   
</>
  )
}

export default About