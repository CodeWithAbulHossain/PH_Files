// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA00bfubDRLRxoQcD1DkYXXBC2Ahp9APf0",
  authDomain: "login-auth-216ac.firebaseapp.com",
  projectId: "login-auth-216ac",
  storageBucket: "login-auth-216ac.appspot.com",
  messagingSenderId: "562437833294",
  appId: "1:562437833294:web:b64b93b2985c47cdeb391f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
