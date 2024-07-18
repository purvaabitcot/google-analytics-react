// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOe4gtw0WvejGUir9Rx70R_VGUTm6zyjc",
  authDomain: "crud-c8188.firebaseapp.com",
  projectId: "crud-c8188",
  storageBucket: "crud-c8188.appspot.com",
  messagingSenderId: "77279299150",
  appId: "1:77279299150:web:d29c4e424a281e7bd2651f",
  measurementId: "G-55JM77LZ8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getFirestore();
export const auth = getAuth();
export default app;