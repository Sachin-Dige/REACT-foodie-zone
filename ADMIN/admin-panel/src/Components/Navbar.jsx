import React from 'react'
import { Link } from 'react-router-dom';

import { FaBars } from "react-icons/fa";
// import { FaUserCircle } from "react-icons/fa";
import './Navbar.css'
// import logo from './img/logo11.png';
const Navbar = () => {
    return (
        <div>
            <nav>
                <input type="checkbox" id='check' />
                <label for="check"><FaBars className="checkbtn" /></label>
                <label className='title'><span style={{fontSize:"65px"}}>F</span>oodie<span style={{fontFamily:"forte", fontSize:"65px"}}>~Z</span>one </label> <br />
                <label className='tag'>we share's WOW!</label>



                <ul>
                    <li className="item"><Link to="/home" className='Main_nav'>Home</Link></li>
                    <li className="item"><Link to="/addrecipe" className='Main_nav'>Add Recipe</Link></li>

                    {/* 
                    <li className="item"><Link to="/myfavs" className='Main_nav'>My Recipes</Link></li>
                <li className="item"><Link to="/about" className='Main_nav'>About Us</Link></li> */}
                    {/* <li className="item"><Link to="/signin">SignIN</Link></li> */}
                    {/* <li className="item"><Link to="/logout">LOGOUT</Link></li> */}
                <li className="item"><Link to="/contact" className='Main_nav'>Contact</Link></li>
                        
                                <li className='btn' style={{
                                  
                                }}><Link to="/logout">Logout</Link>
                                </li>
                            
                        
                </ul>



            </nav>

        </div>
    )
}

export default Navbar
