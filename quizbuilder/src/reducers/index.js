import { combineReducers } from "redux";

import data from "./dataReducer";
import auth from "./authReducer";
import quiz from "./quizReducer";
import message from "./messageReducer";
export default combineReducers({
  data,
  quiz, 
  message,
  auth
});