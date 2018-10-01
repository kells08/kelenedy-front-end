import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  textDecoration: 'none',
  color: 'white'
}

const Footer = () =>
  <div className="footer">
    <NavLink to="/" exact="exact" style={link} activeStyle={{
        color: 'gray'
      }}>Home</NavLink>
    <NavLink to="/cart" exact="exact" style={link} activeStyle={{
        color: 'gray'
      }}>Cart</NavLink>
  </div>

export default Footer;
