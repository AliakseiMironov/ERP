// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuQQrKVFwGQlVeXppExJf6g1O-sI_CiAc",
  authDomain: "erp-project-d3a2b.firebaseapp.com",
  projectId: "erp-project-d3a2b",
  storageBucket: "erp-project-d3a2b.appspot.com",
  messagingSenderId: "604581031631",
  appId: "1:604581031631:web:05eae64cea8757cb6e11ba",
  measurementId: "G-5H3C5XP4WL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const createUser = async (email, password) => {
  return createUserWithEmailAndPassword(getAuth(app), email, password);
};

export const signInUser = async (email, password) => {
  return signInWithEmailAndPassword(getAuth(app), email, password);
};
