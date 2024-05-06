import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios'
import Nav from './Nav';

const Cards = ()  =>{
    const [pokemons, setPokemons] = useState([]);
  
useEffect ( () => {
    axios.get( "https://pokebuildapi.fr/api/v1/pokemon/limit/100").then(response =>{
        console.log(response.data)
        setPokemons(response.data)

   
  })
},[])
  return (
    <div>
        <h1>liste des pokemons</h1>
        <div className='row row-cols-1 row_cols-md 3 g-2'>
            {pokemons.map((pokemon, index) =>(
              <div className="col">
              <div className="cards">

              <img src={pokemon.image} className="card-img-top" alt='images' />
              <div className='cards-body' key={index}>
                <div key={pokemon.id}>{ pokemon.name}
             </div >  </div> </div> </div>
 ))
 }

   
   
    </div> </div>
  )
};

export default Cards;