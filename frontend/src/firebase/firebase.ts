// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Initialize Google Auth Provider
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
auth.useDeviceLanguage(); // Usar el idioma del dispositivo

// Configure Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.addScope('email');
googleProvider.addScope('profile');
googleProvider.setCustomParameters({
  prompt: 'select_account',
  access_type: 'offline'
});

// Limpiar cualquier estado de autenticación previo al inicio
auth.signOut();
