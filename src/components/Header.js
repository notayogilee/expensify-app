import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink exact to="/" activeClassName="selected">Home</NavLink>
    <NavLink to="/create" activeClassName="selected">Create Expense</NavLink>
  </header>
);

export default Header;