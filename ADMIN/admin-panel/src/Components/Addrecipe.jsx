import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';

import { MdDeleteForever } from "react-icons/md";

const Addrecipe = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    getUsers();
  })

  // SHOW DATA ON DASHBOARD
  const getUsers = async()=>{
    let result = await fetch("http://localhost:4000/getimg");
    result=await result.json();
    setRecords(result)
  }

  // DELETE DATA FROM DASHBOARD
  const Del = async(id) => {
    let result = await fetch(`http://localhost:4000/addrecipe_Users/arUser_delete/${id}`, {
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
            <th>Image</th>
            <th>Recipe Name</th>
            <th>Description</th>
            <th>Ingredients</th>
            <th>Steps</th>                            
            <th>Delete</th>                            
          </tr>
      
 

        { records.map((userList)=>(
          
          <tr>
              <td><img src={userList.img} alt="Food Image" height="120px" width="120px" /></td>
              <td>{userList.recipeName}</td> 
              <td>{userList.description}</td>
              <td>{userList.ingredients}</td>
              <td>{userList.steps}</td>
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
export default Addrecipe
