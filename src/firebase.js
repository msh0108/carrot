// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/storage";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzGnhAWWP9oac-Mnay0VvSrscYZ-FyIfA",
  authDomain: "react-firebase-app-1faf4.firebaseapp.com",
  databaseURL: "https://react-firebase-app-1faf4-default-rtdb.firebaseio.com",
  projectId: "react-firebase-app-1faf4",
  storageBucket: "react-firebase-app-1faf4.appspot.com",
  messagingSenderId: "181629495403",
  appId: "1:181629495403:web:a796db5dd9c52004eb692e",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
export const firebaseInstance = firebase;

export default firebase;
