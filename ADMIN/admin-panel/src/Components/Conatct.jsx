import React, { useEffect, useState } from 'react';
import "./Home.css"

import { MdDeleteForever } from "react-icons/md";
import Navbar from './Navbar';

const Conatct = () => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
      getUsers();
    })
  
    // SHOW DATA ON DASHBOARD
    const getUsers = async()=>{
    let result = await fetch("http://localhost:4000/contact_users/showcontactUser");
      result=await result.json();
      setRecords(result)
    }
    
  // DELETE DATA FROM DASHBOARD
  const Del = async(id) => {
    let result = await fetch(`http://localhost:4000/contact_users/delete/${id}`, {
      method:"DELETE"
    })

    result=await result.json();
    if(result){
      getUsers();
    }
  }
    return (
      <>
      <Navbar/>
  
  
      <div className="home-container">
  
  <table>
  
        
            <tr>  
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>                        
              <th>Delete</th>                        
            </tr>
        
   
  
          { records.map((userList)=>(
            
            <tr>
                <td>{userList.name}</td> 
                <td>{userList.email}</td>
                <td>{userList.message}</td>
                <td>{<MdDeleteForever className='delete_btn' onClick={()=>Del(userList._id)}/>}</td>

            </tr>
      
            ))}
      
  </table>
  </div>
      <div className="footer_bottom">
        &copy; Foodie~Zone.com | Designed by <span className='name'>
        SACHiN DiGE</span>
      </div>
      </>
  
      
    );
  }
export default Conatct
