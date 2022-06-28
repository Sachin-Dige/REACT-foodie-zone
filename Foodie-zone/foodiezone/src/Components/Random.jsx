import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

import './Random.css'
const url = 'https://www.themealdb.com/api/json/v1/1/random.php'

const Random = () => {
    const [food, setFood] = useState([])

    const fetchFood = async () => {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data.meals);
      setFood(data.meals)
    }  
    useEffect(() => {
      fetchFood()
    }, [])

return (
<div className='rr_bg'>
<Navbar/>
    <div className="button">
        <button onClick={() => fetchFood()} className="btn">
            👉  Generate Another Special Meal  👈
        </button>
    </div>

    <h1 className='rg_title'>Meal Of a Day</h1>
    <div className='underline1'></div>
    <section className='meals'>
        {food.map((f) =>{
            const {
                idMeal,
                strMeal, 
                strInstructions, 
                strMealThumb, 
                strYouTube,
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5,
                strIngredient6,
                strIngredient7,
                strIngredient8,
                strIngredient9,
                strIngredient10,} = f
            
            
            return(
                <article key={idMeal}>
                    <div>
                    <h2>{strMeal}</h2>
                    <img src={strMealThumb} alt={strMeal} />
                    <p className='img_ingr_list'>  
                
                  <p style={{color:"darkblue"}}>Ingredients:</p>
                  <div className='underline2'></div>

                  <li>
                {strIngredient1}
                  </li>
                  <li>
                {strIngredient2}
                  </li>
                  <li>
                {strIngredient3}
                  </li>
                  <li>
                {strIngredient4}
                  </li>
                  <li>
                {strIngredient5}
                  </li>
                  <li>
                {strIngredient6}
                  </li>
                  <li>
                {strIngredient7}
                  </li>
                  <li>
                {strIngredient8}
                  </li>
                  <li>
                {strIngredient9}
                  </li>
                  <li>
                {strIngredient10}
                  </li>
                </p>
  
                    </div>
                    <div>
                    <h3>How to cook ?</h3>
                    <div className='underline2'></div>
                    <p>{strInstructions}</p>
                    <p className='ingr_list'>  
                
                  <p style={{color:"darkblue"}}>Ingredients:</p>
                  <div className='underline2'></div>

                  <li>
                {strIngredient1}
                  </li>
                  <li>
                {strIngredient2}
                  </li>
                  <li>
                {strIngredient3}
                  </li>
                  <li>
                {strIngredient4}
                  </li>
                  <li>
                {strIngredient5}
                  </li>
                  <li>
                {strIngredient6}
                  </li>
                  <li>
                {strIngredient7}
                  </li>
                  <li>
                {strIngredient8}
                  </li>
                  <li>
                {strIngredient9}
                  </li>
                  <li>
                {strIngredient10}
                  </li>
                </p>
                    </div> 
                    
                </article>
            )
          })}
        
    </section>
          </div>

  )
}

export default Random
