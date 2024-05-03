import { useEffect, useState } from 'react'
import { Link,BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios'
import Nav from './Nav';

const Accueil = ()  =>{



useEffect ( () => {
    axios.post( "https://pokebuildapi.fr/api/v1/pokemon/limit/100").then(response =>{
        console.log(response.data)

   
  })
})
  return (
    <div>
        <h1>Pokedex</h1>
    </div>
  )
};

export default Accueil;