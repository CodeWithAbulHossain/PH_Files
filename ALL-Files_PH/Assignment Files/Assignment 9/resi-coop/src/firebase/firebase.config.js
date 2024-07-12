// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB26C8Y3Bu20bRypNlqlu0_sVWsMRSufug",
  authDomain: "resi-coop.firebaseapp.com",
  projectId: "resi-coop",
  storageBucket: "resi-coop.appspot.com",
  messagingSenderId: "616355722293",
  appId: "1:616355722293:web:9fb46b8afaa547776aad7c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
