import React, { Component } from 'react';
import AppNav from './components/Navbar';
import ShoppingList from './components/ShoppingList'

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNav />
          <ShoppingList />
        </div>
      </Provider>
    );
  }
}

export default App;
