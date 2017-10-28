import { GUESS } from '../actions/guess'
import { NEW_GAME} from '../actions/new-game'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case GUESS :
      return state.concat(payload)
    case NEW_GAME:
      return state = []
    default :
      return state
  }
}
