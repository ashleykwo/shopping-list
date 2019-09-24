import React, { Component } from 'react';
import AppNav from './components/Navbar';
import ShoppingList from './components/ShoppingList'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNav />
        <ShoppingList />
      </div>
    );
  }
}

export default App;
