import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { wrongGuessCount } from '../functions'
import './Progress.css'


class ShowProgress extends PureComponent {

wrongGuessCount() {
    const { words, guess } = this.props
    return guess.reduce(function(sum,guess) {
      return sum + (words.indexOf(guess, 0) === -1)
    }, 0);
  }

  renderHangMan(){
    if (this.wrongGuessCount() === 0) {
      return <img src='http://res.cloudinary.com/dwgyjfcoy/image/upload/v1509117997/o_n0dmby.png' className='hangman' />
    } else if (this.wrongGuessCount()=== 1) {
      return <img src='http://res.cloudinary.com/dwgyjfcoy/image/upload/v1509117996/0_x1zd4t.png' className='hangman'/>
    } else if (this.wrongGuessCount()=== 2) {
      return <img src='http://res.cloudinary.com/dwgyjfcoy/image/upload/v1509117997/2_yqx003.png' className='hangman'/>
    } else if (this.wrongGuessCount()=== 3) {
      return <img src='http://res.cloudinary.com/dwgyjfcoy/image/upload/v1509117997/3_ggsab1.png' className='hangman'/>
    } else if (this.wrongGuessCount()=== 4) {
      return <img src='http://res.cloudinary.com/dwgyjfcoy/image/upload/v1509117997/4_ash7il.png' className='hangman'/>
    } else if (this.wrongGuessCount()=== 5) {
      return <img src='http://res.cloudinary.com/dwgyjfcoy/image/upload/v1509117997/5_dbfmfw.png' className='hangman'/>
    } else if (this.wrongGuessCount()=== 6) {
      return <img src='http://res.cloudinary.com/dwgyjfcoy/image/upload/v1509117997/6_t0w6ju.png' className='hangman'/>
    } else if (this.wrongGuessCount()=== 7) {
      return <img src='https://res.cloudinary.com/dwgyjfcoy/image/upload/v1509117997/7_pqcj87.png' className='hangman'/>
    } else {
      return null
    }

  }

  render(){
    return(
      <div>
        <h3>Wrong Guesses: { this.wrongGuessCount() }/7</h3>
        { this.renderHangMan()}
      </div>
    )
  }
}

const mapStateToProps = ({words, guess}) => ({words, guess})

export default connect(mapStateToProps)(ShowProgress)
