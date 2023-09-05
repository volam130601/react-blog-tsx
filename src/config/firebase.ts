// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE4oGpVi9nABk5zc4d9C864gpsxWtR14A",
  authDomain: "react-course-pedrotech-e0d9e.firebaseapp.com",
  projectId: "react-course-pedrotech-e0d9e",
  storageBucket: "react-course-pedrotech-e0d9e.appspot.com",
  messagingSenderId: "493665678181",
  appId: "1:493665678181:web:9df6b812037289406e678c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
