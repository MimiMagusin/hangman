import React, { PureComponent } from 'react';
import { connect } from 'react-redux';


export class Word extends PureComponent {
 renderWords(){
   const { words, guess } = this.props
   const wordArray = words.split("")
   const secretWord = wordArray.map(function(letter){
     if (guess.includes(letter) === false) return "_"
     else return letter
   })

   const showGuess = secretWord.join(" ")
   return showGuess
 }

  render(){
    return(
      <div>
        <h2>{ this.renderWords() }</h2>
      </div>
    )
  }
}

const mapStateToProps = ({words, guess}) => ({words, guess})

export default connect(mapStateToProps)(Word)
