import React, { PureComponent } from 'react';
import { connect } from 'react-redux';


export class ShowGuessedLetters extends PureComponent {

  showGuessedLetters() {
    const { guess } = this.props
    const letters = guess.join(", ")
    return letters
  }


  render(){
    return(
      <div>
        <h3>You guessed: { this.showGuessedLetters() }</h3>
      </div>
    )
  }
}

const mapStateToProps = ({guess}) => ({guess})

export default connect(mapStateToProps)(ShowGuessedLetters)
