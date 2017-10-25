import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://www.codester.com/static/uploads/items/630/icon.png" className="App-logo" alt="logo" />
          <Title content="HANGMAN"/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
