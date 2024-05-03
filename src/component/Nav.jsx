import React, {useState} from 'react';

import { Link } from 'react-router-dom';

const Nav = () => {

 
  return (
    <nav className="navbar navbar-expand-lg bg-yellow w-100 mx-auto" data-bs-theme="yellow"  >
    <div className="container-fluid"  >
      <a className="navbar-brand" href="#"    > Pokedex  </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarColor02" aria-controls="navbarColor02"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <nav>
      <Link to="/accueil">Accueil</Link>
      <Link to="/details">Details</Link>
      </nav>
</div>
</nav>

  
  )
};

export default Nav;