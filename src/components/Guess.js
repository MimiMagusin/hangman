import React, { PureComponent } from 'react'
import guess from "../actions/guess.js"
import { connect } from 'react-redux';



class Guess extends PureComponent {
  constructor(props) {
    super()
    const { letter } = props
    this.state = {
      letter: '',
    };
  }

  updateLetter(event) {
    if (event.keyCode === 13) {
      this.saveGuess()
    }
  }

  saveGuess() {
    const guess = this.refs.letter.value.toLowerCase()
    this.props.guess(guess)
    this.refs.letter.value=null
  }

  render(){
    return (
      <div>
        <input
          type="text"
          ref="letter"
          className="letter"
          placeholder="Guess a letter!"
          defaultValue={this.state.letter}
          onChange={this.updateLetter.bind(this)} />

        <div className="actions">
          <button className="primary" onClick={this.saveGuess.bind(this)}>Guess!</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ( { guess } ) => {
  return {
    guess
  }
}
const mapDispatchToProps = { guess: guess }

export default connect(mapStateToProps, mapDispatchToProps)(Guess)
