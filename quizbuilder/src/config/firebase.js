import * as firebase from "firebase";

import { FirebaseConfig } from "../config/keys";
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const quizRef = databaseRef.child("questions");
export const todosRef = databaseRef.child("todos");
export const newTestRef = databaseRef.child("test");
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();