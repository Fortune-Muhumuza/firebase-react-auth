// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI_rCs2RUZUVuRNXH1NqSQxvS7_wWc0Us",
  authDomain: "auth-development-6e0c4.firebaseapp.com",
  projectId: "auth-development-6e0c4",
  storageBucket: "auth-development-6e0c4.appspot.com",
  messagingSenderId: "367534618436",
  appId: "1:367534618436:web:e3b36a8b0e40521d6d8911",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
