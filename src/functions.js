export function wrongGuessCount() {
  const { words, guess } = this.props
  return guess.reduce(function(sum,guess) {
    return sum + (words.indexOf(guess, 0) === -1)
  }, 0);
}
