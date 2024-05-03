import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './component/Nav';
import Cards from './component/Cards';
import Details from './component/Details';
import axios from 'axios';

const App =() => {
  const [count, setCount] = useState(0)

  return (
 
   <Router>
   {/* <Accueil/> */}
            <Routes>  
       <Route path='/' element={<Nav/>}/>
       <Route path='/cards' element={<Cards/>}/>
       <Route path='/details' element={<Details/>}/>

      </Routes>

  </Router>
  )   
};

export default App;
