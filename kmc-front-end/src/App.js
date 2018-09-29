import React, {Component} from 'react';
import ShoppingContainer from './ShoppingContainer'

import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
      <h1 className="top-title">Kelenedy</h1>
      <ShoppingContainer/>
    </div>);
  }
}

export default App;
