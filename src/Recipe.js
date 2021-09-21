import React from "react";
import style from'./recipe.module.css'

const Recipe = ({title,calories,image,cusineType,ingredients,source}) =>{
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>Calories = {calories}</p>
            <p>{cusineType}</p>
            <ol>{ingredients.map(ingredient =>(
                <li>{ingredient.text}</li>
            ))}</ol>
            <p>Source:-{source}</p>
            <img className={style.image}src={image} alt="Image Not Available"/>
        </div>
    )
}

export default Recipe;