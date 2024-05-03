import { useEffect, useState } from 'react'
import { Link,BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios'
import Nav from './Nav';

const Accueil = ()  =>{
    const [pokemons, setPokemons] = useState([]);
  
useEffect ( () => {
    axios.get( "https://pokebuildapi.fr/api/v1/pokemon/limit/100").then(response =>{
        console.log(response.data)
        setPokemons(response.data)

   
  })
})
  return (
    <div>
        <h1>liste des pokemons</h1>
        <div className='row row-cols-1 row_cols-md 3 g-2'>
            {pokemons.map((pokemon, index) =>(
                <div key={pokemon.id}>{ pokemon.name}</div>

            )
        )}
    </div></div>
  )
};

export default Accueil;