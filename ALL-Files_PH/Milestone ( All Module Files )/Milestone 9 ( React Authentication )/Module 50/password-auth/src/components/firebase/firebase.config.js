// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXw1FKafC2ajfWtGUlw5Mt-kqikRChNWM",
  authDomain: "simple-auth-ca64b.firebaseapp.com",
  projectId: "simple-auth-ca64b",
  storageBucket: "simple-auth-ca64b.appspot.com",
  messagingSenderId: "400142444358",
  appId: "1:400142444358:web:532237985cdbd801d12747",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
