import React from "react"
import style from "./recipe.module.css"
 const Recipe=({title, calories,image, ingredients})=>{
    return(
        <div className={style.recipe}>
            <h1 className={style.text}>{title}</h1>
            <ol className={style.text}>
                {ingredients.map(i => (
                   <li>{i.text}</li> 
                ))}
            </ol>
            
            <img className={style.image} src={image} alt=""></img>
            <h6>Calories={Math.floor(calories)}</h6>

        </div>
    )
}
export default Recipe