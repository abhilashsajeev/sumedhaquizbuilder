import {SHOW_MESSAGE, FETCH_QUIZ, FETCH_TODOS, FETCH_USER} from '../actions/types';

export const showMessage = (val)=> ({type: SHOW_MESSAGE, payload: val});

export default (state = "", action) => {
  switch (action.type) {
    case SHOW_MESSAGE:
      return action.payload;
    case FETCH_QUIZ:
    case FETCH_TODOS:
    case FETCH_USER:
      return '';
    default:
      return state;
  }
}