// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOzThfkN54qB18zEKGGJ8fp92Aahfj0G8",
  authDomain: "tpi-23307-efectores.firebaseapp.com",
  projectId: "tpi-23307-efectores",
  storageBucket: "tpi-23307-efectores.appspot.com",
  messagingSenderId: "887178728429",
  appId: "1:887178728429:web:75ead3396280c872940de4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)