import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import ShoppingContainer from './containers/ShoppingContainer';
import Cart from './containers/Cart';
import LoginForm from "./components/LoginForm";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';

const App = (props) => {

  return (
    <Router>
      <div>
        <NavBar />
        <div className="App">
        <Route exact path="/" component={ShoppingContainer} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={LoginForm} />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App
