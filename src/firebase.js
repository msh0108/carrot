import { initializeApp } from "firebase/app";
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
  apiKey: "AIzaSyB1E4b8RcpusOtY5fTpmN5n8TStVcbU8bs",
  authDomain: "carrot-3086e.firebaseapp.com",
  projectId: "carrot-3086e",
  storageBucket: "carrot-3086e.appspot.com",
  messagingSenderId: "761166877177",
  appId: "1:761166877177:web:4531687ba1995ad24aed28",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export default firebase;
