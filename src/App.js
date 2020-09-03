import React,{useEffect,useState} from 'react';
import Recipe from "./Recipe"
import './App.css';

import style from "./recipe.module.css"
const APP_ID="e2566096"
const APP_KEY="87b6730702e5fbc563cbf2bb82bbe131"



const App=()=> {
  const [recipes, setRecipes]= useState([])
  const [search, setSearch]=useState("")
  const [query,setQuery]= useState("chicken")

  useEffect(()=>{
    getRecipes()
  },[query])

const getRecipes=async()=>{
  const respose=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data = await respose.json()
  setRecipes(data.hits)
}

const updateSearch = e=>{
  setSearch(e.target.value)
}
const getSearch=e=>{
  e.preventDefault()
  setQuery(search)
  setSearch('')
}

  return (
    <div className="App">
      <h1 className={style.title}>Recipe Search</h1>
      <form onSubmit={getSearch} className="search-form">
        <input 
        className="search-bar" 
        type="text" 
        value={search}
        onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="list">
      {recipes.map(i=>(
      <Recipe key={i.recipe.label}
        title={i.recipe.label}
        calories={i.recipe.calories}
        image={i.recipe.image}
        ingredients={i.recipe.ingredients}
      />
    ))}</div>

    </div>
  );
}

export default App;


