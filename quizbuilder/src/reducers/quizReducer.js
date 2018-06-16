import {FETCH_QUIZ} from '../actions/types'

export default (state = "loading", action) => {
  switch(action.type) {
    case FETCH_QUIZ:
      return action.payload;
    default :
      return state;
  }
}