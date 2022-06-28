import React, { useEffect, useRef, useState } from 'react'
import { FaSearch } from "react-icons/fa";

import Footer from './Footer';
import './Recipelist.css'

const Recipelist = () => {

    const [ingredientList, updateIngredientList] = useState([]);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef(null);

//When User Search Any Recipe Will Occur Here----------------
    const userSearchButton = (e) => {

        e.preventDefault();
         searchRecipe(inputRef.current.value)
    }
 
    const searchRecipe = (userSearch) => {
        setLoading(true);
        
        let url = `https://api.edamam.com/search?q=${userSearch}&app_id=${APP_ID}&app_key=${API_KEY}`;


        fetch(url)
            .then(response => {
                return response.json();
            })

            .then(res => {
                console.log(res.hits);
                updateIngredientList(res.hits);
                setLoading(false);
            })
            .catch(err => {
                console.log("error", err);
                setLoading(false);
            })
    }

    const API_KEY = "e81ccf85a7ed3653f0df2123c822104a";
    const APP_ID = "10e66024";

    useEffect(() => {
        searchRecipe('Icecream');
    }, []);


return (
<>      
<div className='App'>
    <header className="App_header">
    <div className="home" >
      <div className="search-container">

        <input
        ref={inputRef}
        type="search" 
        placeholder="✍ What recipe you looking for...." />
        <button
        onClick={userSearchButton}>
        <FaSearch/>
        </button>
    
       </div>
    </div>
{loading && <h4>Finding Recipes....</h4>}

        <div className="wrapper">
            {ingredientList.map((item) => {
            return (
            <div className="Ingredient">
                <span>{item.recipe.label.slice(0,28)}</span>
                    <img src={item.recipe.image} />
                        <div className="steps">
                            {item.recipe.ingredientLines.map((step) => {
                                        return <h5 className='recipe_text'>{step}</h5>
                            })}
                        </div>
                        <a className='page' href={item.recipe.url}>View Full Recipe....</a>
            </div>
                    )
            })}
        </div>
    </header>
</div>
<Footer/>
</>
    )
    
}

export default Recipelist
