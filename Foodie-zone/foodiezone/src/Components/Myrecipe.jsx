import React, { useEffect, useState } from 'react'
import './Myrecipe.css'

import Navbar from './Navbar'

const Myrecipe = () => {

    const [users, setUsers] = useState([]);
  

    useEffect(() => {
        getUserhandler();

    },[])

    const getUserhandler = async() => {
        let result= await fetch("http://localhost:4000/getimg");
        result = await result.json();
        setUsers(result)
    }
    console.log(users);

  return (
<>
<Navbar/>
<h2 className='my_recipe'>My Recipe</h2>

<div className='wrapper'>
    
{
    users.map((photos) =>{
    console.log(photos.img);
                
return  (
<div className="container">
    <h1 className='rec_titile'>{photos.recipeName}</h1>
    <img src={photos.img} alt="Food Image" className='image' />
    
  <div className="overlay">
    <div className="text1">{photos.recipeName}</div>
    <h4 className='txt2'>DESCRIPTION:</h4>
    <div className="text2">{photos.description}</div>
    <h4 className='txt3'>Ingredients:</h4>
    <div className="text3">{photos.ingredients}</div>
    <h4 className='txt4'>STEPS:</h4>
    <div className="text4">{photos.steps}</div>
</div>
    
</div>
    )})}
</div>






































        {/* <div className="main_div">
            <div className="img_div">

        {
            users.map((photos) =>{
                console.log(photos.img);
                
                return  <img src={photos.img} width="400px" height="400px" alt="" />
            })
        }
        </div>

        <div className="content_div">
            {
                recipe.map((newUser) =>(
                    // return newUser.recipeName
                    // console.log(newUser);
                    <tr>
                        <td>{newUser.recipeName}</td><br />
                        <tr>{newUser.description}</tr><br /> 
                        <tr>{newUser.ingredients}</tr>
                     
                    </tr>
                ))
            }
        </div>
        </div> */}
    </>
  )
}
                    // <tr>
                    //     <h1>{newUser.recipeName}</h1><br />
                    //     <tr>{newUser.description}</tr><br /> 
                    //     <tr>{newUser.ingredients}</tr>
                     
                    // </tr>

export default Myrecipe





