import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import newGame from '../actions/new-game'

  export class NewGame extends PureComponent {
    playAgain(){
      this.props.newGame()
    }
    render(){
      return (

          <button className= "btn" onClick={this.playAgain.bind(this)}>
            <h2> NEW WORD </h2>
          </button>

          )
    }
  }

const mapDispatchToProps = { newGame }

export default connect(null, mapDispatchToProps)(NewGame)
