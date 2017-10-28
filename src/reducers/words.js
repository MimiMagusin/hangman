import { NEW_GAME } from '../actions/new-game';

export default (state = "", { type, payload } = {}) => {
  switch(type) {
      case NEW_GAME :
      state = ""
       return  state.concat(payload)
      default :
        return state
    }
}
