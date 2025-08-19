// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbqDpCS7Tpo9gOPMOQEm_CZTimnGAMaDE",
  authDomain: "counter-wizard-app.firebaseapp.com",
  projectId: "counter-wizard-app",
  storageBucket: "counter-wizard-app.firebasestorage.app",
  messagingSenderId: "873556887905",
  appId: "1:873556887905:web:8a4395296164e145a95d20",
  measurementId: "G-B3QXRKFPP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
