import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import ShoppingContainer from './containers/ShoppingContainer';
import Cart from './containers/Cart';
import NavBar from './components/NavBar';
import './App.css';

const App = (props) => {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <h1 className="top-title">Kelenedy</h1>
        <Route exact path="/" component={ShoppingContainer} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </Router>
  );
};

export default App
