import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () =>
  <div className="navbar">
    <NavLink to="/" exact="exact">KELENEDY COSMETICS</NavLink>
    <NavLink to="/cart" exact="exact" activeStyle={{
        textDecoration: 'underline'
      }}><i class="fa fa-shopping-cart"/></NavLink>
    <NavLink to="/login" exact="exact">
      <span className="login">LOG IN</span>
    </NavLink>
  </div>

export default NavBar;
