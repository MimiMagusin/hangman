import chai, { expect } from 'chai'
import words from './words'

describe('words reducer', () => {
  const reducer = words
  const initialState = []

  it('returns an empty array for the initial state', () => {
    expect(reducer()).to.eql(initialState)
  })
})
