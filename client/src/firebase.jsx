// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-ecf40.firebaseapp.com",
  projectId: "mern-blog-ecf40",
  storageBucket: "mern-blog-ecf40.appspot.com",
  messagingSenderId: "23439092516",
  appId: "1:23439092516:web:58707788fad8700ed861b1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);