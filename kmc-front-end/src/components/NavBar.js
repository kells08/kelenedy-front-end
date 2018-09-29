import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white'
}

const NavBar = () =>
  <div>
    <NavLink to="/" exact="exact" style={link} activeStyle={{
        background: 'darkblue'
      }}>Home</NavLink>
    <NavLink to="/cart" exact="exact" style={link} activeStyle={{
        background: 'darkblue'
      }}>Cart</NavLink>
  </div>

export default NavBar;
