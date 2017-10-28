import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Game from './Game'


export class WinState extends PureComponent {

  renderWinState(){

    const { words, guess } = this.props
    const wrongGuess = guess.reduce(function(sum,guess) {
      return sum + (words.indexOf(guess, 0) === -1)
    }, 0);

    if (wrongGuess > 6) {
      return <h1> YOU LOOSE </h1>
    } else {
      <Game
    }
  }
}

const mapStateToProps = ({words, guess}) => ({words, guess})

export default connect(mapStateToProps)(WinState)
