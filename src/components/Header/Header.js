import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => (
  <header className='headerContainer'>
  <h1 className='title'>Track Your Money</h1>
  <nav className='navbar'>
  <NavLink to="/Track-Your-Money/" activeClassName="is-active" className='navLink' exact={true}>Dashboard</NavLink>
  <NavLink to="/Track-Your-Money/create" activeClassName="is-active" className='navLink'>Create Expense</NavLink>
  </nav>
  </header>
  );

  export default Header;