import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import NewGameButton from './components/NewGameButton'
import Game from './Game'

class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://www.codester.com/static/uploads/items/630/icon.png" className="App-logo" alt="logo" />
          <Title content="HANGMAN"/>
        </header>
        <div className="App-Game">
          <h1>Guess the word ...</h1>
          <Game />
        </div>
        <footer className="App-footer">
          <NewGameButton />
        </footer>
      </div>
    );
  }
}

export default App;
