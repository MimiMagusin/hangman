import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Guess from './components/Guess'
import Progress from './components/Progress'
import Word from './components/Word'
import ShowGuessedLetters from './components/ShowGuessedLetters'
import ShowProgress from './components/Progress'
import './App.css'

 class Game extends PureComponent {

   wrongGuessCount() {
       const { words, guess } = this.props
       return guess.reduce(function(sum,guess) {
         return sum + (words.indexOf(guess, 0) === -1)
       }, 0);
     }

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


  render() {
    const {words} = this.props
    const showGuess = this.renderWords()

      if ( this.wrongGuessCount() > 7) {
        return(
          <div>
            <h1> YOU LOOSE! </h1>
            <img src='https://res.cloudinary.com/dwgyjfcoy/image/upload/v1509117997/lost_red_ahyjpq.png' alt='You Loose' className='WinState'/>
          </div>
        )
      } else if (showGuess === words.split('').join(' ') && words.length > 0 ){
          return(
            <div>
              <h1> YOU WIN! </h1>
              <img src='https://res.cloudinary.com/dwgyjfcoy/image/upload/v1509117997/5_dbfmfw.png' alt='You Win' className='WinState' />
              <h1> YOU WIN! </h1>
            </div>
          )
      } else {
        return(
          <div>
            <ShowProgress />
            <ShowGuessedLetters />
            <Guess />
            <div className="App-footer">
              <Word />
            </div>
          </div>
        )
      }
  }
}

const mapStateToProps = ({words, guess}) => ({words, guess})

export default connect(mapStateToProps)(Game)
