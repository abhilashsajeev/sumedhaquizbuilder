import { quizRef, todosRef, authRef, provider } from "../config/firebase";
import { FETCH_TODOS, FETCH_USER, FETCH_QUIZ } from "./types";
import { showMessage } from "../reducers/messageReducer";

export const addQuestion = (newQuestion, uid) => async dispatch => {
  quizRef
    .child(uid)
    .push()
    .set(newQuestion)
  dispatch(showMessage("Question saved"))

};

export const showNotifications = message => dispatch => {
  console.log("calling show message");
  dispatch(showMessage(message));
}

export const fetchQuiz = uid => async dispatch => {
  quizRef.on("value", snapshot => {
    dispatch({
      type: FETCH_QUIZ,
      payload: snapshot.val()
    });
  });
};

export const addToDo = (newToDo, uid) => async dispatch => {
  todosRef
    .child(uid)
    .push()
    .set(newToDo);
    dispatch(showMessage("Completed adding todos"))
};

export const completeToDo = (completeToDoId, uid) => async dispatch => {
  todosRef
    .child(uid)
    .child(completeToDoId)
    .remove();
};

export const fetchToDos = uid => async dispatch => {
  todosRef.child(uid).on("value", snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val()
    });
  });
};

export const fetchUser = () => dispatch => {
  authRef.onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: FETCH_USER,
        payload: user
      });
    } else {
      dispatch({
        type: FETCH_USER,
        payload: null
      });
    }
  });
};

export const signIn = () => dispatch => {
  authRef
    .signInWithPopup(provider)
    .then(result => { console.log("login success") })
    .catch(error => {
      console.log(error);
    });
};

export const signOut = () => dispatch => {
  authRef
    .signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch(error => {
      console.log(error);
    });
};