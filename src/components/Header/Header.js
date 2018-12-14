import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => (
  <header>
  <h1>Track Your Money</h1>
  <NavLink to="/" activeClassName="is-active" className='navLink' exact={true}>Dashboard</NavLink>
  <NavLink to="/create" activeClassName="is-active" className='navLink'>Create Expense</NavLink>
  </header>
  );

  export default Header;