import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => (
  <header>
    <h1>Harvestr</h1>
    <NavLink to="/" activeClassName="active">Home</NavLink>
    <NavLink to="/profile" activeClassName="active">Search profile</NavLink>
    <NavLink to="/ranking" activeClassName="active">Ranking</NavLink>
    <NavLink to="/harvest" activeClassName="active">Results</NavLink>
  </header>
);


export default Header;