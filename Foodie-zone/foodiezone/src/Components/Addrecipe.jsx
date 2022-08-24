import React, { useState } from 'react'
import './Addrecipe.css'

import { useNavigate } from 'react-router-dom';

import Navbar from './Navbar'
// import sideimg from 'Foodie-zone\foodiezone\src\Components\img\logo11.png'

const Addrecipe = () => { 
  const [recipeName, setRecipeName] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    
    e.preventDefault();
    let validationFlag = true;

    if (!recipeName) {
      document.getElementById("recipenameError").innerHTML = "Recipe Name is required.";
      validationFlag = false
    }else if (recipeName.length > 20) {
        document.getElementById("recipenameError").innerHTML = "Recipe Name is too large.";
        validationFlag = false
    } else {
      document.getElementById("recipenameError").innerHTML = "";
    }
  
    if (!img) {
      document.getElementById("imgError").innerHTML = "Food Dish Image is required.";
      validationFlag = false
    } else {
      document.getElementById("imgError").innerHTML = "";
    }
  
    if (!description) {
      document.getElementById("descriptionError").innerHTML = "Description is required.";
      validationFlag = false
    }else if (description.length > 30) {
        document.getElementById("descriptionError").innerHTML = "Recipe Name is too large.";
        validationFlag = false
    } else {
      document.getElementById("descriptionError").innerHTML = "";
    }

    if (!ingredients) {
      document.getElementById("ingredientsError").innerHTML = "Recipe used Ingredients Names is required.";
      validationFlag = false
    }else if (ingredients.length > 30) {
        document.getElementById("ingredientsError").innerHTML = "Ingredients Names is too large.";
        validationFlag = false
    } else {
      document.getElementById("ingredientsError").innerHTML = "";
    }

    if (!steps) {
      document.getElementById("stepsError").innerHTML = "Recipe Steps is required.";
      validationFlag = false
    }else if (steps.length > 30) {
        document.getElementById("stepsError").innerHTML = "Recipe steps is too large.";
        validationFlag = false
    } else {
      document.getElementById("stepsError").innerHTML = "";
    }

   
   
   let bodyContent = new FormData();
   bodyContent.append("recipeName", recipeName);
   bodyContent.append("description", description);
   bodyContent.append("ingredients", ingredients);
   bodyContent.append("steps", steps);
   bodyContent.append("user_file", img);
   
   fetch("http://localhost:4000/uploading", { 
     method: "POST",
     body: bodyContent,
    //  headers: headersList
   }).then(function(response) {
     return response.text();
   }).then(function(data) {
     console.log(data);
   })

navigate('/')


}
  return (
<div >
<Navbar/>
  <div className='ar_header'>
    <h1 className='ar_title'>
    Submit Your Recipe On <span style={{ color:'cyan'}}> Foodie~Zone </span>
    </h1>
    
    <div className='ar_underline' style={{
          backgroundColor: "#ea1d6f", width:"220px",height:"3.1px", margin:"-8px 0px 0px 515px"
          }}></div>
    

    <p className='ar_para'>
    Foodie~Zone is looking for new recipes and wants to feature YOURS on the Foodie~Zone website! Got a recipe that's been passed down in the family ! So Post Below Your Best Recipe With Among The World.
    </p>   
  

  <div className= 'ar_content'>
    {/* <h2 className='ar_content_title'>
      Recipe Details
    </h2> */}

    <div className="addrecipe">

      {/* <img src={sideimg} alt="" className='sidebg'/> */}
      <div className="addrecipe-header">
      </div>
      <div className="addrecipe-body">
        <div className="addrecipe-body-item left">
          <div className="add-title">
            ADD RECIPE
          </div>

        </div>
        <form action='/add'  method='POST' encType='multipart/form-data' className="addrecipe-body-item">
          <div className="add-form">
            <div className="add-form-group">
              <div className='contact_header'>Recipe Details</div>

            <label for="recipeName">RecipeName
            <span style={{color:"red", fontSize:"25px", fontWeight:"700"}}>*</span>
            </label>
              <input className="add-form-control" placeholder="Recipe Title"
              name="recipeName" value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}

              />
            <small id="recipenameError" ></small> <br />


            </div>
            <label htmlFor="file">Picture Of Dish
            <span style={{color:"red", fontSize:"25px", fontWeight:"700"}}>*</span>
            </label>
            <input type="file" id="photo" 
            filename='user_file'
            className="add-form-control"
            // onChange={onChangeFile}
            name="file"
            onChange={(e) => setImg(e.target.files[0])}
            />
            <small id="imgError" ></small> <br />

            
            <div className="add-form-group message">
            <label for="message">Description
            <span style={{color:"red", fontSize:"25px", fontWeight:"700"}}>*</span>
            </label>
            <textarea id="message" className="add-form-control"
            placeholder='Write About The Recipe'
            name="description" value={description} 
            onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <small id="descriptionError" ></small> <br />


            <label for="message">Ingredients
            <span style={{color:"red", fontSize:"25px", fontWeight:"700"}}>*</span>
            </label>
            <textarea id="message" className="add-form-control"
            placeholder="List The Ingredients Names"
            name="ingredients" value={ingredients} 
            onChange={(e) => setIngredients(e.target.value)}
            ></textarea>
            <small id="ingredientsError" ></small> <br />


            <label for="message">Steps
            <span style={{color:"red", fontSize:"25px", fontWeight:"700"}}>*</span>
            </label>
            <textarea id="message" className="add-form-control"
            placeholder='Write The Direction Of Cooking'
            name="steps" value={steps} 
            onChange={(e) => setSteps(e.target.value)}
            ></textarea>
            <small id="stepsError" ></small> <br />
            </div>


            <div className="add-form-group buttons">
              <button type='submit' className="add-form-button" onClick={handleSubmit}>Upload Your Recipe</button>
            </div>
          </div>
        </form>
      </div><br /><br />
  <div className="footer_bottom">
        &copy; Foodie~Zone.com | Designed by <span className='name'>
        SACHiN DiGE</span>
      </div>
  </div>
  </div>
  </div>
</div>
  )
}

export default Addrecipe
