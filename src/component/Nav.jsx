import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

 
  return (
    <nav className="navbar  navbar-expand-lg bg-primary w-100 mx-auto" data-bs-theme=""  >
    <div className="container-fluid"  >
      <a className="navbar-brand" href="#"    >POKEDEX </a>
       <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav me-auto">
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          
          <nav>

    <Link to="/details">Details</Link>
    </nav>
             
           </form>  
           </div>
         </div>
       </nav>
  )
};

export default Nav;