import React from 'react'
import './Footer.css'

import { AiFillMail} from "react-icons/ai";
import { SiInstagram } from "react-icons/si";
import { ImFacebook2 } from "react-icons/im";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ImYoutube } from "react-icons/im";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer_bg'>
        
        {/* <footer>
            <div className="wave" id='wave1'></div>
            <div className="wave" id='wave2'></div>
            <div className="wave" id='wave3'></div>
            <div className="wave" id='wave4'></div>
        </footer> */}
      <div className="footer_content">

        <div className="footer-section about">
          <h5 className='logo_text'>Foodie<span style={{fontFamily: "forte" }}>~</span>Zone</h5>
          <div className='underline' style={{
          backgroundColor: "red", width:"90px",margin:"-5px 0px 10px 0px",height:"4px"
          }}></div>
          <p1 className='about_para'>Foodie~Zone is the website for finding best new food recipes from all over the world and also in your native languages. You can upload your recipe on our website in free. </p1>
          
          <div className="contact">  
            <span>📞 &nbsp; 123-456-789</span> 
            <span><AiFillMail/> &nbsp; fz@gmail.com</span> 
          </div>

          <div className="socials">
            <a href="#"><ImFacebook2/></a>
            <a href="#"><SiInstagram/></a>
            <a href="#"><AiFillTwitterCircle/></a>
            <a href="#"><ImYoutube/></a>
          </div>
        </div>

        <div className="footer-section link">
          <h2>Quick Links</h2>
          <div className='underline' style={{
          backgroundColor: "red", width:"80px",margin:"4px 4px 10px 4px",height:"4px"
          }}></div>

          <ul className='quick_links_name'>
          <li><Link to="/home" className='footer_link'>
              Home
            </Link></li>
            <li><Link to="/addrecipe" className='footer_link'>Add Recipe</Link></li>
            <li><Link to="/myrecipe" className='footer_link'>
              My Recipes
            </Link></li>
            <li><Link to="/about" className='footer_link'>
              About us
            </Link></li>
            <li><Link to="#" className='footer_link'>
              Terms & Conditiion
            </Link></li>
          </ul>
        </div>

        <div className="footer-section contact-form">
          <h2>Contact us</h2>
          <div className='underline' style={{
          backgroundColor: "red", width:"60px",margin:"2px 4px 10px 4px",height:"4px"
          }}></div>
          <form action="" method='post'>
            <input type="email" name='email' className='contact_form-input' placeholder='Enter Your Email'/><br />
            <textarea name="message" className='contact_form-input' placeholder='Enter Your Message....'></textarea>
            <button type="submit" className="contact_form-btn">✉ Send</button>
          </form>
        </div>

      </div>

      <div className="footer_bottom">
        &copy; Foodie~Zone.com | Designed by <span className='name'>
        SACHiN DiGE</span>
      </div>
    </div>
  )
}

export default Footer
