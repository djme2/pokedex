import { useState } from 'react';
import { Link,BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Nav from './component/Nav';
import Accueil from './component/Accueil';
import Details from './component/Details';
import axios from 'axios';

const App =() => {
  const [count, setCount] = useState(0)

  return (
   <Router>
    <Route>  
       <Route path='/' element={<Nav/>}/>
       <Route path='/accueil' element={<Accueil/>}/>
       <Route path='/details' element={<Details/>}/>



     
      </Route>
   
  </Router>
  )
};

export default App;
